use std::collections::BTreeMap;
use std::iter;

use group::ff::Field;

use super::FailureLocation;
use crate::{
    dev::{metadata, util},
    plonk::{Any, Expression},
};

fn padded(p: char, width: usize, text: &str) -> String {
    let pad = width - text.len();
    format!(
        "{}{}{}",
        iter::repeat(p).take(pad - pad / 2).collect::<String>(),
        text,
        iter::repeat(p).take(pad / 2).collect::<String>(),
    )
}

/// Renders a cell layout around a given failure location.
///
/// `highlight_row` is called at the end of each row, with the offset of the active row
/// (if `location` is in a region), and the rotation of the current row relative to the
/// active row.
pub(super) fn render_cell_layout(
    location: &FailureLocation,
    columns: &BTreeMap<metadata::Column, usize>,
    layout: &BTreeMap<i32, BTreeMap<metadata::Column, usize>>,
    highlight_row: impl Fn(Option<i32>, i32),
) {
    let col_width = |cells: usize| cells.to_string().len() + 3;

    // If we are in a region, show rows at offsets relative to it. Otherwise, just show
    // the rotations directly.
    let offset = match location {
        FailureLocation::InRegion { region, offset } => {
            eprintln!("  Cell layout in region '{}':", region.name);
            eprint!("    | Offset |");
            Some(*offset as i32)
        }
        FailureLocation::OutsideRegion { row } => {
            eprintln!("  Cell layout at row {}:", row);
            eprint!("    |Rotation|");
            None
        }
    };

    // Print the assigned cells, and their region offset or rotation.
    for (column, cells) in columns {
        let width = col_width(*cells);
        eprint!(
            "{}|",
            padded(
                ' ',
                width,
                &format!(
                    "{}{}",
                    match column.column_type {
                        Any::Advice => "A",
                        Any::Fixed => "F",
                        Any::Instance => "I",
                    },
                    column.index,
                )
            )
        );
    }
    eprintln!();
    eprint!("    +--------+");
    for cells in columns.values() {
        eprint!("{}+", padded('-', col_width(*cells), ""));
    }
    eprintln!();
    for (rotation, row) in layout {
        eprint!(
            "    |{}|",
            padded(' ', 8, &(offset.unwrap_or(0) + rotation).to_string())
        );
        for (col, cells) in columns {
            let width = col_width(*cells);
            eprint!(
                "{}|",
                padded(
                    ' ',
                    width,
                    &row.get(col).map(|i| format!("x{}", i)).unwrap_or_default()
                )
            );
        }
        highlight_row(offset, *rotation);
        eprintln!();
    }
}

pub(super) fn expression_to_string<F: Field>(
    expr: &Expression<F>,
    layout: &BTreeMap<i32, BTreeMap<metadata::Column, usize>>,
) -> String {
    expr.evaluate(
        &util::format_value,
        &|_| panic!("virtual selectors are removed during optimization"),
        &|query, column, rotation| {
            if let Some(i) = layout
                .get(&rotation.0)
                .and_then(|row| row.get(&(Any::Fixed, column).into()))
            {
                format!("x{}", i)
            } else if rotation.0 == 0 {
                // This is most likely a merged selector
                format!("S{}", query)
            } else {
                // No idea how we'd get here...
                format!("F{}@{}", column, rotation.0)
            }
        },
        &|_, column, rotation| {
            format!(
                "x{}",
                layout
                    .get(&rotation.0)
                    .unwrap()
                    .get(&(Any::Advice, column).into())
                    .unwrap()
            )
        },
        &|_, column, rotation| {
            format!(
                "x{}",
                layout
                    .get(&rotation.0)
                    .unwrap()
                    .get(&(Any::Instance, column).into())
                    .unwrap()
            )
        },
        &|a| {
            if a.contains(' ') {
                format!("-({})", a)
            } else {
                format!("-{}", a)
            }
        },
        &|a, b| {
            if let Some(b) = b.strip_prefix('-') {
                format!("{} - {}", a, b)
            } else {
                format!("{} + {}", a, b)
            }
        },
        &|a, b| match (a.contains(' '), b.contains(' ')) {
            (false, false) => format!("{} * {}", a, b),
            (false, true) => format!("{} * ({})", a, b),
            (true, false) => format!("({}) * {}", a, b),
            (true, true) => format!("({}) * ({})", a, b),
        },
        &|a, s| {
            if a.contains(' ') {
                format!("({}) * {}", a, util::format_value(s))
            } else {
                format!("{} * {}", a, util::format_value(s))
            }
        },
    )
}