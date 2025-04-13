function sayiArttir() {
   let sayi = document.getElementById("artacak");

   let sayiDonustur = Number(sayi.innerHTML);

   sayiDonustur ++;
   sayi.innerHTML = sayiDonustur;

}
