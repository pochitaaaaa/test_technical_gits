function RumusA000124(n) {
  let hasil = '';
  let nilaiSaatIni = 1;

  for (let i = 1; i <= n; i++) {
      hasil += nilaiSaatIni;

      if (i < n) {
          hasil += '-';
      }

      nilaiSaatIni += i;
  }

  return hasil;
}

let input = ''; 
let output = '';


input = 7;

if (RumusA000124(input) && input > 0) {
  output = RumusA000124(input);
} else {
  output = 'Masukkan angka positif!';
}

console.log(`Input: ${input}`);
console.log(`Output: ${output}`);
