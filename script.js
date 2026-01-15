const message =
  "Chin chào Trúc Linnh xinh đẹp, dễ thương! ♑\nChúc Trúc Linnh sinh nhật thật nhiều niềm vui, hạnh phúc và thành công.\nLuôn rạng rỡ như những vì sao trên bầu trời nhé.\n Hẹn gặp vào tuần sau nhé! Bái Baiii ngủ ngon ^^";

const typeWriterElement = document.getElementById("typewriter");
const celebrateBtn = document.getElementById("celebrateBtn");
let i = 0;
const speed = 50; // milliseconds

function typeWriter() {
  if (i < message.length) {
    if (message.charAt(i) === "\n") {
      typeWriterElement.innerHTML += "<br>";
    } else {
      typeWriterElement.innerHTML += message.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Start typewriter effect when page loads
window.onload = function () {
  setTimeout(typeWriter, 1000); // Delay start by 1 second
};

celebrateBtn.addEventListener("click", () => {
  // Play music
  const audio = document.getElementById('bgMusic');
  if (audio) {
      audio.play().catch(e => {
          console.error("Audio error:", e);
          alert("Không thể phát nhạc: " + e.message + ". Bạn kiểm tra lại file music.mp3 nhé!");
      });
  }

  // Fire confetti
  var duration = 5 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);

  // Also play a simple sound if possible (browser policies might block autoplay)
  // For now, sticking to visual effects which are safer.

  celebrateBtn.textContent = "Chúc Mừng Sinh Nhật! 🎂";
  celebrateBtn.style.background = "linear-gradient(45deg, #1e90ff, #00bfff)";
});

// Create floating stars background
function createStars() {
    const container = document.body;
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random properties
        const xy = Math.random() * 100;
        const duration = Math.random() * 3 + 2; // 2s to 5s
        const delay = Math.random() * 2;
        const size = Math.random() * 3 + 1;
        
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDuration = duration + 's';
        star.style.animationDelay = delay + 's';
        
        container.appendChild(star);
    }
}

createStars();

// Create periodic shooting stars
function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    // Start from top-right area to bottom-left
    const startX = Math.random() * window.innerWidth + 200;
    const startY = Math.random() * -100;
    
    star.style.left = startX + 'px';
    star.style.top = startY + 'px';
    
    // Random visual properties
    const duration = Math.random() * 2 + 1; // 1-3s
    const size = Math.random() * 2 + 1;
    
    star.style.height = size + 'px';
    star.style.animation = `shoot ${duration}s linear`;
    
    document.body.appendChild(star);
    
    // Cleanup
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

// Spawn a shooting star every 2-6 seconds
setInterval(() => {
    if(!document.hidden) { // Only when tab is active
        createShootingStar();
    }
}, 3000);
