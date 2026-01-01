// Sample properties data
let propertiesData = [
    { id: 'P001', title: 'Prestige Lakeside Habitat', location: 'Whitefield, Bangalore', type: 'Apartment', price: '₹95 Lakhs', area: '1850 sq.ft', bedrooms: '3 BHK', bathrooms: '3', status: 'Available' },
    { id: 'P002', title: 'Sobha Dream Acres', location: 'Panathur, Bangalore', type: 'Villa', price: '₹1.4 Crores', area: '3200 sq.ft', bedrooms: '4 BHK', bathrooms: '4', status: 'Available' },
    { id: 'P003', title: 'Brigade Orchards', location: 'Devanahalli, Bangalore', type: 'Apartment', price: '₹68 Lakhs', area: '1450 sq.ft', bedrooms: '2 BHK', bathrooms: '2', status: 'Under Negotiation' },
    { id: 'P004', title: 'Purva Venezia', location: 'Yelahanka, Bangalore', type: 'Apartment', price: '₹1.1 Crores', area: '2100 sq.ft', bedrooms: '3 BHK', bathrooms: '3', status: 'Available' },
    { id: 'P005', title: 'Godrej E-City', location: 'Electronic City, Bangalore', type: 'Apartment', price: '₹58 Lakhs', area: '1250 sq.ft', bedrooms: '2 BHK', bathrooms: '2', status: 'Available' },
    { id: 'P006', title: 'Adarsh Palm Retreat', location: 'Bellandur, Bangalore', type: 'Villa', price: '₹2.2 Crores', area: '4500 sq.ft', bedrooms: '5 BHK', bathrooms: '5', status: 'Sold' }
];

// Render properties grid
function renderPropertiesGrid() {
    const grid = document.getElementById('propertiesGrid');
    grid.innerHTML = propertiesData.map(property => `
        <div class="property-card">
            <div class="property-image">
                <i class="fas fa-home"></i>
                <span class="property-badge">${property.status}</span>
            </div>
            <div class="property-details">
                <div class="property-title">${property.title}</div>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i> ${property.location}
                </div>
                <div class="property-price">${property.price}</div>
                <div class="property-meta">
                    <span><i class="fas fa-bed"></i> ${property.bedrooms}</span>
                    <span><i class="fas fa-bath"></i> ${property.bathrooms}</span>
                    <span><i class="fas fa-ruler-combined"></i> ${property.area}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup sidebar toggle
function setupEventListeners() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Add Property Button
    const addPropertyBtn = document.getElementById('addPropertyBtn');
    if (addPropertyBtn) {
        addPropertyBtn.addEventListener('click', () => {
            openModal('addPropertyModal');
        });
    }

    // Add Property Form Submit
    const addPropertyForm = document.getElementById('addPropertyForm');
    if (addPropertyForm) {
        addPropertyForm.addEventListener('submit', handleAddProperty);
    }
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        const form = modal.querySelector('form');
        if (form) {
            form.reset();
        }
    }
}

// Handle Add Property
function handleAddProperty(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newProperty = {
        id: `P${String(propertiesData.length + 1).padStart(3, '0')}`,
        title: formData.get('title'),
        location: formData.get('location'),
        type: formData.get('type'),
        price: formData.get('price'),
        area: formData.get('area'),
        bedrooms: formData.get('bedrooms'),
        bathrooms: formData.get('bathrooms'),
        status: formData.get('status')
    };

    propertiesData.unshift(newProperty);
    renderPropertiesGrid();
    closeModal('addPropertyModal');
    
    alert('Property added successfully!');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPropertiesGrid();
    setupEventListeners();
});