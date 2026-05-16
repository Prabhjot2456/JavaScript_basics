// ===== CURSOR=====
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== HAMBURGER MENU =====
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ===== SMOOTH SCROLL =====
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ===== COUNT-UP ANIMATION =====
function animateCount(el) {
  const target = +el.dataset.count;
  let count = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    count += step;
    if (count >= target) { count = target; clearInterval(timer); }
    el.textContent = count;
  }, 20);
}

let countersStarted = false;
const statsObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !countersStarted) {
    countersStarted = true;
    document.querySelectorAll('.hstat-num').forEach(animateCount);
  }
}, { threshold: 0.5 });
const statsEl = document.querySelector('.hero-stats');
if (statsEl) statsObserver.observe(statsEl);

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(
  '.dest-card, .pkg-card, .why-card, .contact-card, .gallery-item, .section-head'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ===== DESTINATION DATA =====
const destData = {
  Maldives: {
    emoji: '🏝️',
    bg: 'linear-gradient(160deg, #00b4db, #0083b0 40%, #00c9a7)',
    price: '₹45,000',
    desc: 'Paradise on Earth. The Maldives offers crystal-clear turquoise waters, overwater bungalows, and the world\'s most breathtaking coral reefs. Dive into a world of luxury and tranquility.',
    tags: ['Luxury', 'Beach', 'Diving', 'Honeymoon']
  },
  Paris: {
    emoji: '🗼',
    bg: 'linear-gradient(160deg, #614385, #516395)',
    price: '₹60,000',
    desc: 'The City of Light captivates every traveler with the Eiffel Tower, world-class cuisine, the Louvre, and charming cobblestone streets. Romance is everywhere in Paris.',
    tags: ['Romance', 'Culture', 'Food', 'Art']
  },
  Tokyo: {
    emoji: '⛩️',
    bg: 'linear-gradient(160deg, #c94b4b, #4b134f)',
    price: '₹55,000',
    desc: 'A dazzling blend of ultra-modern skyscrapers and ancient shrines. From Shibuya\'s neon chaos to Asakusa\'s tranquil temples — Tokyo is unforgettable.',
    tags: ['Culture', 'Food', 'Tech', 'Anime']
  },
  Switzerland: {
    emoji: '🏔️',
    bg: 'linear-gradient(160deg, #1a6b4a, #2ecc71)',
    price: '₹75,000',
    desc: 'Pristine Alpine peaks, glistening lakes, and fairy-tale villages. Switzerland offers world-class skiing, scenic train routes, and impeccable luxury.',
    tags: ['Mountains', 'Skiing', 'Scenic', 'Luxury']
  },
  Kashmir: {
    emoji: '🏔️',
    bg: 'linear-gradient(160deg, #e65c00, #f9d423)',
    price: '₹15,000',
    desc: 'Heaven on Earth – breathtaking valleys of Gulmarg and Pahalgam, serene Dal Lake shikaras, snow-capped mountains, and mesmerizing landscapes wrapped in natural beauty.',
    tags: ['Mountains', 'Snow', 'Lakes', 'Nature']
  },
  'New York': {
    emoji: '🗽',
    bg: 'linear-gradient(160deg, #1c3a5e, #4e78ae)',
    price: '₹80,000',
    desc: 'The city that never sleeps! Iconic skyline, Times Square\'s electric buzz, Central Park serenity, Broadway shows, and world-class museums await you.',
    tags: ['City', 'Shopping', 'Culture', 'Food']
  },
  Bali: {
    emoji: '🌺',
    bg: 'linear-gradient(160deg, #56ab2f, #a8e063)',
    price: '₹30,000',
    desc: 'The Island of the Gods. Bali enchants with lush rice terraces, ancient temples, surf-ready beaches, and a spiritual calm unlike anywhere else in the world.',
    tags: ['Beach', 'Spiritual', 'Surf', 'Nature']
  },
  Dubai: {
    emoji: '🕌',
    bg: 'linear-gradient(160deg, #bba05c, #8b6914)',
    price: '₹50,000',
    desc: 'A city of superlatives. The Burj Khalifa, desert safaris, gold souks, indoor skiing, and the most lavish hotels on the planet — Dubai does everything bigger.',
    tags: ['Luxury', 'Shopping', 'Adventure', 'Modern']
  }
};

// ===== MODAL =====
function openModal(name) {
  const d = destData[name];
  if (!d) return;
  document.getElementById('modalHeader').style.background = d.bg;
  document.getElementById('modalHeader').innerHTML = `<span style="font-size:5rem">${d.emoji}</span>`;
  document.getElementById('modalBody').innerHTML = `
    <h2>${name}</h2>
    <p>${d.desc}</p>
    <p style="color: #ff9a62; font-weight:600; font-size:1rem;">Starting from ${d.price}/person</p>
    <div class="modal-meta">
      ${d.tags.map(t => `<span>${t}</span>`).join('')}
    </div>
  `;
  document.getElementById('modalBookBtn').onclick = () => {
    closeModal();
    scrollToSection('contact');
    showToast(`✈ Planning your trip to ${name}! Fill the form below.`);
  };
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay')) return;
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== DESTINATION SEARCH =====
function filterDestinations() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.dest-card');
  let found = 0;
  cards.forEach(card => {
    const tags = (card.dataset.tags || '').toLowerCase();
    const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const match = !q || name.includes(q) || tags.includes(q);
    card.style.display = match ? '' : 'none';
    if (match) found++;
  });
  document.getElementById('noResult').style.display = (q && found === 0) ? 'block' : 'none';
  if (q) scrollToSection('destinations');
}

function quickSearch(tag) {
  document.getElementById('searchInput').value = tag;
  filterDestinations();
}

// ===== PACKAGE SELECTION =====
function selectPackage(name, price) {
  showToast(`🎉 ${name} Package (₹${price.toLocaleString()}) selected!`);
  document.getElementById('fdest').value = '';
  scrollToSection('contact');
}

// ===== CONTACT FORM =====
function submitForm(e) {
  e.preventDefault();
  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const dest  = document.getElementById('fdest').value;
  const msg   = document.getElementById('fmsg').value.trim();

  if (!name || !email || !msg) {
    showToast('⚠️ Please fill in all required fields.'); return;
  }

  showToast(`✅ Thanks ${name.split(' ')[0]}! We'll contact you at ${email} soon.`);
  document.querySelector('.contact-form').reset();
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#ff6b35' : '';
  });
});