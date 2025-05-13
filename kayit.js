//Sayfanın URL’sindeki sorgu parametrelerini elde etmek için URLSearchParams nesnesi oluştur
var degerler = new URLSearchParams(window.location.search);
// URL’den “isim”, “email” ve “bina” parametrelerinin değerlerini al
var ad = degerler.get('isim');
var email = degerler.get('email');
var bina = degerler.get('bina');

// HTML öğelerine yazdır
document.getElementById('ad').textContent = ad;
document.getElementById('email').textContent = email;
document.getElementById('bina').textContent = bina;