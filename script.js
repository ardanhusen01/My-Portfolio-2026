// BACKGROUND PARTIKEL BINTANG
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100, /* Jumlah bintang */
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5,
      "random": true, /* Kelap-kelip */
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": { "enable": false }
    },
    "line_linked": {
      "enable": true, /* Hubungkan bintang dengan garis tipis jika ingin efek rasi bintang */
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1, /* Kecepatan gerak bintang */
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "window", // Ubah dari 'canvas' ke 'window' agar lebih responsif
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Bintang akan tertarik mengikuti kursor
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    }
  },
  "retina_detect": true
});




// LANDING PAGE TRANSITION 1 - 2
function showDetail(id) {
    const detail = document.getElementById(id);
    const summary = detail.previousElementSibling; // Mengambil elemen ringkasan
    
    detail.style.display = "block";
    summary.style.display = "none";
}

function hideDetail(id) {
    const detail = document.getElementById(id);
    const summary = detail.previousElementSibling;
    
    detail.style.display = "none";
    summary.style.display = "block";
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            e.preventDefault();

            // 1. Matikan semua section yang sedang aktif
            document.querySelectorAll('.page-section').forEach(sec => {
                sec.classList.remove('active');
            });

            // 2. Aktifkan section yang diklik
            targetSection.classList.add('active');

            // 3. Reset Detail Experience agar tertutup kembali
            const wrapper = document.getElementById('detailsWrapper');
            if (wrapper) {
                wrapper.classList.remove('show');
            }
        }
    });
});





function toggleDetails() {
    const wrapper = document.getElementById('detailsWrapper');
    wrapper.classList.toggle('show');
}


