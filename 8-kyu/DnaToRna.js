function DNAtoRNA(dna) {
 const rna = dna.replace(/T/g,'U')
 return rna

  }


  console.log(DNAtoRNA("GCAT"))
  console.log(DNAtoRNA("TTT"))