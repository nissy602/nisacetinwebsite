// Sayfa yüklenince form işlemlerini hazırlamak için event listener 
document.addEventListener("DOMContentLoaded", function () {
    // Form elementini al
    const form = document.getElementById("form");
    // Form gönderildiğinde çalışacak fonksiyon
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Formun otomatik gönderilip sayfanın yenilenmesini durdurur
      
      // Kullanıcının girdiği değerleri al ve boşlukları temizle
      const isim = document.getElementById("isim").value.trim();
      const dogumTarihi = document.getElementById("dogum_tarihi").value.trim();
      const yas = document.getElementById("yas").value.trim();
      const kadın = document.getElementById("kadın").checked;
      const erkek = document.getElementById("erkek").checked;
      const bina = document.getElementById("bina").value.trim();
      const email = document.getElementById("email").value.trim();
  
      if (!isim || !dogumTarihi || !yas || !bina || !email || (!kadın && !erkek)) {
        alert("Lütfen tüm alanları doldurunuz!"); // Boş alan varsa uyarı göster
        return;
      }
      // Tüm kontroller geçerse kullanıcıya başarı mesajı göster ve formu gönder
      alert("Form başarıyla gönderildi!");
      form.submit(); 
    });
  });
  