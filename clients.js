// Sample clients data
let clientsData = [
    { name: 'Ravi Shankar', phone: '+91 98765 43210', email: 'ravi@example.com', type: 'Buyer', budget: '₹80-100L', location: 'Whitefield, Koramangala', status: 'Active', lastContact: '2 days ago' },
    { name: 'Kavita Pillai', phone: '+91 98765 43211', email: 'kavita@example.com', type: 'Buyer', budget: '₹60-75L', location: 'HSR Layout, Bellandur', status: 'Active', lastContact: '1 week ago' },
    { name: 'Deepak Agarwal', phone: '+91 98765 43212', email: 'deepak@example.com', type: 'Seller', budget: '₹1.5Cr', location: 'Indiranagar', status: 'Closed', lastContact: '1 month ago' },
    { name: 'Meera Joshi', phone: '+91 98765 43213', email: 'meera@example.com', type: 'Both', budget: '₹2-2.5Cr', location: 'Whitefield', status: 'Active', lastContact: '3 days ago' },
    { name: 'Suresh Kumar', phone: '+91 98765 43214', email: 'suresh@example.com', type: 'Buyer', budget: '₹1-1.2Cr', location: 'Electronic City', status: 'Active', lastContact: '5 days ago' }
];

function renderClientsTable() {
    const tbody = document.getElementById('clientsTableBody');
    tbody.innerHTML = clientsData.map(client => `
        <tr>
            <td><input type="checkbox"></td>
            <td><strong>${client.name}</strong></td>
            <td>${client.phone}<br><small>${client.email}</small></td>
            <td><span class="table-badge badge-new">${client.type}</span></td>
            <td>${client.budget}</td>
            <td>${client.location}</td>
            <td><span class="table-badge ${client.status === 'Active' ? 'badge-active' : 'badge-closed'}">${client.status}</span></td>
            <td>${client.lastContact}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn" title="View"><i class="fas fa-eye"></i></button>
                    <button class="action-btn" title="Call"><i class="fas fa-phone"></i></button>
                    <button class="action-btn" title="Edit"><i class="fas fa-edit"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function setupEventListeners() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Add Client Button
    const addClientBtn = document.getElementById('addClientBtn');
    if (addClientBtn) {
        addClientBtn.addEventListener('click', () => {
            openModal('addClientModal');
        });
    }

    // Add Client Form Submit
    const addClientForm = document.getElementById('addClientForm');
    if (addClientForm) {
        addClientForm.addEventListener('submit', handleAddClient);
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

// Handle Add Client
function handleAddClient(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newClient = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        type: formData.get('type'),
        budget: formData.get('budget'),
        location: formData.get('location'),
        status: formData.get('status'),
        lastContact: 'Just now'
    };

    clientsData.unshift(newClient);
    renderClientsTable();
    closeModal('addClientModal');
    
    alert('Client added successfully!');
}

document.addEventListener('DOMContentLoaded', () => {
    renderClientsTable();
    setupEventListeners();
});