// Oyun alanındaki buton, snitch resmi ve diğer HTML öğelerini seç
const startBtn   = document.getElementById('startBtn');
const snitch     = document.getElementById('snitch');
const gameArea   = document.getElementById('gameArea');
const scoreSpan  = document.getElementById('score');
const messageDiv = document.getElementById('message');
const timeSpan   = document.getElementById('time');
// Oyun durumu için değişkenler
let score     = 0;
let interval  = 1000;
let moveTimer;
let countdownTimer;
const maxScore = 20;
const totalTime = 30; 
let timeLeft;
// Önceki pozisyonu tutmak, snitch’in aynı yere çok yakın konumlanmasını engellemek için
let lastX = 0;
let lastY = 0;
/**
 * Snitch’i oyun alanı içinde rastgele bir konuma taşır.
 * Önceki konuma yakın olmaması için kontrol içerir.
 */
function randomPosition() {
  const area = gameArea.getBoundingClientRect();
  let x, y;
  // Önceki pozisyona çok yakınsa tekrar üret
  do {
    x = Math.random() * (area.width - snitch.offsetWidth);
    y = Math.random() * (area.height - snitch.offsetHeight);
  } while (Math.abs(x - lastX) < 30 && Math.abs(y - lastY) < 30);

  snitch.style.left = `${x}px`;
  snitch.style.top  = `${y}px`;
  lastX = x;
  lastY = y;
}
/**
 * Geri sayım fonksiyonu: her saniye çalışır, zamanı azaltır ve
 * 0’a indiğinde oyunu bitirir.
 */
function updateTimer() {
  timeLeft--;
  timeSpan.textContent = timeLeft;
  if (timeLeft <= 0) {
    endGame();
  }
}
/**
 * Oyunu başlatır: skor ve süreyi sıfırlar, snitch’i görünür yapar,
 * hareket ve geri sayım zamanlayıcılarını ayarlar.
 */
function startGame() {
  score     = 0;
  interval  = 1000;
  timeLeft  = totalTime;
  scoreSpan.textContent = score;
  timeSpan.textContent  = timeLeft;
  messageDiv.textContent = '';
  startBtn.disabled      = true;

  //Snitch'i Göster ve  İlk Pozisyonunu Ayarla
  snitch.style.display = 'block';
  randomPosition();

  //Hareket Periyodu
  moveTimer = setInterval(randomPosition, interval);
  //Sayaç
  clearInterval(countdownTimer);
  countdownTimer = setInterval(updateTimer, 1000);
}

function endGame() {
  clearInterval(moveTimer);
  clearInterval(countdownTimer);
  snitch.style.display = 'none';

  // Oyun bittiğinde kullanıcıya skor bilgisini göster
  alert(`Süre bitti! Skorun: ${score}`);

  // Oyun yeniden başlatılabilir hâle gelsin
  startBtn.disabled = false;
}
// Snitch’e tıklandığında skor artışı, hareket hızının artması ve konum değişikliği
snitch.addEventListener('click', () => {
  scoreSpan.textContent = ++score;
  clearInterval(moveTimer);
  // Her tıklamada interval’i azalt (en düşük 150ms)
  interval = Math.max(150, interval - 50);
  moveTimer = setInterval(randomPosition, interval);
  randomPosition();
  if (score >= maxScore) endGame();
});

// Başlat butonuna tıklanınca startGame() fonksiyonunu çalıştır
startBtn.addEventListener('click', startGame);