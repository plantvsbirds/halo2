(function() {var implementors = {};
implementors["halo2_gadgets"] = [{"text":"impl&lt;FixedPoints:&nbsp;<a class=\"trait\" href=\"halo2_gadgets/ecc/trait.FixedPoints.html\" title=\"trait halo2_gadgets::ecc::FixedPoints\">FixedPoints</a>&lt;Affine&gt;&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;Fp&gt; for <a class=\"struct\" href=\"halo2_gadgets/ecc/chip/struct.EccChip.html\" title=\"struct halo2_gadgets::ecc::chip::EccChip\">EccChip</a>&lt;FixedPoints&gt;","synthetic":false,"types":["halo2_gadgets::ecc::chip::EccChip"]},{"text":"impl&lt;F:&nbsp;FieldExt, const WIDTH:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const RATE:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;F&gt; for <a class=\"struct\" href=\"halo2_gadgets/poseidon/struct.Pow5Chip.html\" title=\"struct halo2_gadgets::poseidon::Pow5Chip\">Pow5Chip</a>&lt;F, WIDTH, RATE&gt;","synthetic":false,"types":["halo2_gadgets::poseidon::pow5::Pow5Chip"]},{"text":"impl <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;Fp&gt; for <a class=\"struct\" href=\"halo2_gadgets/sha256/struct.Table16Chip.html\" title=\"struct halo2_gadgets::sha256::Table16Chip\">Table16Chip</a>","synthetic":false,"types":["halo2_gadgets::sha256::table16::Table16Chip"]},{"text":"impl&lt;Hash, Commit, Fixed&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;Fp&gt; for <a class=\"struct\" href=\"halo2_gadgets/sinsemilla/chip/struct.SinsemillaChip.html\" title=\"struct halo2_gadgets::sinsemilla::chip::SinsemillaChip\">SinsemillaChip</a>&lt;Hash, Commit, Fixed&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.HashDomains.html\" title=\"trait halo2_gadgets::sinsemilla::HashDomains\">HashDomains</a>&lt;Affine&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fixed: <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.FixedPoints.html\" title=\"trait halo2_gadgets::ecc::FixedPoints\">FixedPoints</a>&lt;Affine&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Commit: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.CommitDomains.html\" title=\"trait halo2_gadgets::sinsemilla::CommitDomains\">CommitDomains</a>&lt;Affine, Fixed, Hash&gt;,&nbsp;</span>","synthetic":false,"types":["halo2_gadgets::sinsemilla::chip::SinsemillaChip"]},{"text":"impl&lt;Hash, Commit, Fixed&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;Fp&gt; for <a class=\"struct\" href=\"halo2_gadgets/sinsemilla/merkle/chip/struct.MerkleChip.html\" title=\"struct halo2_gadgets::sinsemilla::merkle::chip::MerkleChip\">MerkleChip</a>&lt;Hash, Commit, Fixed&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.HashDomains.html\" title=\"trait halo2_gadgets::sinsemilla::HashDomains\">HashDomains</a>&lt;Affine&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fixed: <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.FixedPoints.html\" title=\"trait halo2_gadgets::ecc::FixedPoints\">FixedPoints</a>&lt;Affine&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Commit: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.CommitDomains.html\" title=\"trait halo2_gadgets::sinsemilla::CommitDomains\">CommitDomains</a>&lt;Affine, Fixed, Hash&gt;,&nbsp;</span>","synthetic":false,"types":["halo2_gadgets::sinsemilla::merkle::chip::MerkleChip"]},{"text":"impl&lt;F:&nbsp;FieldExt&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;F&gt; for <a class=\"struct\" href=\"halo2_gadgets/utilities/cond_swap/struct.CondSwapChip.html\" title=\"struct halo2_gadgets::utilities::cond_swap::CondSwapChip\">CondSwapChip</a>&lt;F&gt;","synthetic":false,"types":["halo2_gadgets::utilities::cond_swap::CondSwapChip"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()