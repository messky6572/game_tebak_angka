const angkaRandom = Math.floor(Math.random() * 100) + 1;

console.log(angkaRandom);

const input = document.getElementById("angka");
const tombol = document.getElementById("tebak");
const hasil = document.getElementById("hasil");

tombol.addEventListener("click", function () {
  const angka = Number(input.value);

  let titik = 1;

  const animasi = setInterval(function () {
    ((tombol.textContent = "memproses" + "."), repeat(titik));

    titik++;

    if (titik > 4) {
      titik = 1;
    }
  }, 200);

  tombol.disabled = true;

  setTimeout(function () {
    if (angka > angkaRandom) {
      hasil.textContent = "kebesaran dek";
    } else if (angka < angkaRandom) {
      hasil.textContent = "kekecilan dek";
    } else {
      hasil.textContent = "selamat! angkamu benar";
    }

    clearInterval(animasi);

    tombol.textContent = "tebak";
    tombol.disabled = false;
  }, 1000);
});
