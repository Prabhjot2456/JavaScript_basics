// Sample Destinations Data
const destinations = [
  {
    name: "Paris, France",
    img: "https://source.unsplash.com/random/400x300/?paris",
    desc: "City of Love & Lights",
    price: "₹89,999"
  },
  {
    name: "Bali, Indonesia",
    img: "https://source.unsplash.com/random/400x300/?bali",
    desc: "Tropical Paradise",
    price: "₹65,999"
  },
  {
    name: "New York, USA",
    img: "https://source.unsplash.com/random/400x300/?newyork",
    desc: "The City That Never Sleeps",
    price: "₹1,25,000"
  },
  {
    name: "Dubai, UAE",
    img: "https://source.unsplash.com/random/400x300/?dubai",
    desc: "Luxury & Adventure",
    price: "₹75,999"
  }
];

// Sample Packages
const packages = [
  {
    title: "European Summer Escape",
    duration: "10 Days",
    price: "₹1,89,999",
    desc: "Paris • Rome • Switzerland"
  },
  {
    title: "Asian Adventure",
    duration: "7 Days",
    price: "₹89,999",
    desc: "Thailand • Malaysia"
  }
];

// Render Destinations
function renderDestinations() {
  const container = document.getElementById('destinations-grid');
  container.innerHTML = '';

  destinations.forEach(dest => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${dest.img}" alt="${dest.name}">
      <div class="card-content">
        <h3>${dest.name}</h3>
        <p>${dest.desc}</p>
        <p class="price">From ${dest.price}</p>
        <button class="btn" onclick="bookNow('${dest.name}')">Book Now</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Packages
function renderPackages() {
  const container = document.getElementById('packages-grid');
  container.innerHTML = '';

  packages.forEach(pkg => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-content">
        <h3>${pkg.title}</h3>
        <p><strong>Duration:</strong> ${pkg.duration}</p>
        <p>${pkg.desc}</p>
        <p class="price">₹${pkg.price}</p>
        <button class="btn" onclick="bookNow('${pkg.title}')">Book Package</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Search Function
function searchDestination() {
  const query = document.getElementById('search').value.toLowerCase();
  
  if (query.trim() === '') {
    alert("Please enter a destination!");
    return;
  }

  const found = destinations.some(dest => 
    dest.name.toLowerCase().includes(query)
  );

  if (found) {
    alert(`Great choice! We have amazing tours to ${query.charAt(0).toUpperCase() + query.slice(1)} 🌟`);
  } else {
    alert("Sorry, we don't have that destination yet. Try Paris, Bali, New York or Dubai!");
  }
}

// Book Now Alert
function bookNow(place) {
  alert(`🎉 Thank you for choosing ${place}!\nOur team will contact you shortly.`);
}

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("✅ Message sent successfully! We'll reply within 24 hours.");
  this.reset();
});

// Initialize Website
window.onload = function() {
  renderDestinations();
  renderPackages();
};