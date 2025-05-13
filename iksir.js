// Sayfa yüklendiğinde “İksirini Bul” form verilerini okumaya başlıyoruz
document.getElementById("iksirForm").addEventListener("submit", function (e) {
   // Formun otomatik gönderimini durdurarak JS ile işleyebilmek için sayfanın yenilenmesini engelle
    e.preventDefault();
    // Kullanıcıdan gelen tercih,mekan ve evet/hayır cevaplarını al
    const ozellik = document.getElementById("ozellik").value;
    const mekan = document.getElementById("mekan").value;
    const risk = document.querySelector("input[name='risk']:checked");
    const karar = document.querySelector("input[name='karar']:checked");
    // Eğer herhangi bir soru yanıtlanmamışsa uyarı verip işlemi durdur
    if (!ozellik || !mekan || !risk || !karar) {
      alert("Lütfen tüm soruları cevaplayınız.");
      return;
    }
    // Seçilen radio düğmelerinden değerleri al
    const riskVal = risk.value;
    const kararVal = karar.value;
    // İksirin başlığını, açıklamasını ve resim URL’sini belirleyecek değişkenler
    let baslik = "";
    let aciklama = "";
    let resim = "";
    // Kullanıcının verdiği cevap kombinasyonuna göre iksir türünü seç
    if (ozellik === "sans" && riskVal === "evet") {
      baslik = "Felix Felicis";
      aciklama = "Bu iksir sana geçici ama büyük bir şans getirir. Her şey yolunda gider!";
      resim = "https://cdnb.artstation.com/p/assets/images/images/027/463/751/large/lena-ka-felix-felicis.jpg?1591623120";
    } else if (ozellik === "ask" && kararVal === "duygusal") {
      baslik = "Amortentia";
      aciklama = "Dünyanın en güçlü aşk iksiri. Kokusuyla büyüler, dikkatli kullanılmalı!";
      resim = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NxdZ6OTO_9kHr-IDy5nhvv7JS6Gz63Qxxg&s";
    } else if (ozellik === "gizlenme" && mekan === "orman") {
      baslik = "Polyjuice Potion";
      aciklama = "Kimlik değiştirmeni sağlar. Sihirli ama hazırlaması zordur!";
      resim = "https://cdn11.bigcommerce.com/s-1cfhlpd74o/images/stencil/original/products/28400/56979/fizz-creations-ltd-desk-light-harry-potter-potion-large-mood-lamp-27966710579244__04802.1664983699.jpg?c=1";
    } else if (ozellik === "zeka" && mekan === "kutuphane") {
      baslik = "Veritaserum";
      aciklama = "Gerçekleri ortaya çıkaran iksir. Yalancıların kabusu!";
      resim = "https://img.wattpad.com/cover/225143108-288-k529711.jpg";
    } else if (ozellik === "huzur" && kararVal === "mantikli") {
      baslik = "Draught of Peace";
      aciklama = "Huzur verir, kaygıyı ve endişeyi azaltır. İç huzurun anahtarı.";
      resim = "https://ih1.redbubble.net/image.767912140.7592/st,small,507x507-pad,600x600,f8f8f8.jpg";
    } else if (ozellik === "mutluluk" && kararVal === "duygusal") {
      baslik = "Elixir to Induce Euphoria";
      aciklama = "Enerji ve mutluluk verir. Ama fazla alınırsa gülme krizine sokabilir!";
      resim = "https://img.photobucket.com/albums/v190/charbonne/elixir_to_induce_euphoria_by_zoliapjove-d5l66ws.jpg";
    } else {
      baslik = "Bilinmeyen İksir";
      aciklama = "Hmm... Belki de sana özel bir iksir henüz keşfedilmedi.";
      resim = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39da6277-d7e8-4885-9cd8-12328bbe53a9/dgccikc-2da925c2-0432-4a82-a6dc-1a188146e179.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5ZGE2Mjc3LWQ3ZTgtNDg4NS05Y2Q4LTEyMzI4YmJlNTNhOVwvZGdjY2lrYy0yZGE5MjVjMi0wNDMyLTRhODItYTZkYy0xYTE4ODE0NmUxNzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.D2ECcKgfc_Adnpn6myiFRs_KCy2eUq_WqqxC6xqwujM";
    }
    // Modal içindeki başlık, açıklama ve resim elementlerini güncelle
    document.getElementById("iksirBaslik").innerText = baslik;
    document.getElementById("iksirAciklama").innerText = aciklama;
    document.getElementById("iksirResim").src = resim;
    // Modal penceresini görünür yaparak kullanıcıya sonucu göster
    document.getElementById("iksirModal").style.display = "block";
  });
  // Modal’ı kapatmak için çarpı ikonuna tıkla
  document.querySelector(".close").addEventListener("click", function () {
    // Modal penceresini gizle
    document.getElementById("iksirModal").style.display = "none";
  });
  