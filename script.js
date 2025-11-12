// Función para cambiar de página
function goToPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById('page' + pageNumber).classList.add('active');
}

// Función para abrir el sobre
function openEnvelope() {
  const envelope = document.getElementById('envelope');
  envelope.classList.add('envelope-opening');

  setTimeout(() => {
    goToPage(3);
  }, 1200);
}

// Función para salir
function exitPage() {
  alert('¡Espero que te haya gustado! 🎉');
  goToPage(1);
}

// Funciones de música
function playMusic() {
  const audio = document.getElementById('musica');
  audio.volume = 0.5; // Establece el volumen al 50%
  audio.play().catch(err => console.log('Error al reproducir:', err));
  document.getElementById('volumeControl').classList.add('show');
}

function changeVolume(change) {
  const audio = document.getElementById('musica');
  audio.volume = Math.max(0, Math.min(1, audio.volume + change));
  updateVolumeFill();
}

function setVolume(event) {
  const bar = event.currentTarget;
  const rect = bar.getBoundingClientRect();
  const percent = (event.clientX - rect.left) / rect.width;
  document.getElementById('musica').volume = percent;
  updateVolumeFill();
}

function updateVolumeFill() {
  const volume = document.getElementById('musica').volume;
  document.getElementById('volumeFill').style.width = (volume * 100) + '%';
}

// Iniciar música al cargar la página
window.addEventListener('load', playMusic);