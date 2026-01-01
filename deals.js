// Sample deals data
let dealsData = [
    { id: 'D001', property: 'Prestige Lakeside Habitat', client: 'Ravi Shankar', value: '₹95L', commission: '₹1.9L', status: 'Active', agent: 'John Doe', closingDate: 'Jan 15, 2026' },
    { id: 'D002', property: 'Brigade Orchards', client: 'Kavita Pillai', value: '₹68L', commission: '₹1.36L', status: 'Negotiation', agent: 'Sarah Johnson', closingDate: 'Jan 20, 2026' },
    { id: 'D003', property: 'Sobha Dream Acres', client: 'Deepak Agarwal', value: '₹1.4Cr', commission: '₹2.8L', status: 'Closed', agent: 'John Doe', closingDate: 'Dec 15, 2025' },
    { id: 'D004', property: 'Godrej E-City', client: 'Lakshmi Narayanan', value: '₹58L', commission: '₹1.16L', status: 'Active', agent: 'Mike Wilson', closingDate: 'Jan 10, 2026' },
    { id: 'D005', property: 'Purva Venezia', client: 'Suresh Kumar', value: '₹1.1Cr', commission: '₹2.2L', status: 'Negotiation', agent: 'Sarah Johnson', closingDate: 'Jan 25, 2026' },
    { id: 'D006', property: 'Adarsh Palm Retreat', client: 'Meera Joshi', value: '₹2.2Cr', commission: '₹4.4L', status: 'Closed', agent: 'John Doe', closingDate: 'Dec 20, 2025' }
];

// Get status badge
function getStatusBadge(status) {
    const badges = {
        'Active': 'badge-active',
        'Negotiation': 'badge-warm',
        'Closed': 'badge-closed',
        'Lost': 'badge-cold'
    };
    return badges[status] || 'badge-new';
}

// Render deals table
function renderDealsTable() {
    const tbody = document.getElementById('dealsTableBody');
    tbody.innerHTML = dealsData.map(deal => `
        <tr>
            <td><strong>${deal.id}</strong></td>
            <td>${deal.property}</td>
            <td>${deal.client}</td>
            <td><strong>${deal.value}</strong></td>
            <td>${deal.commission}</td>
            <td><span class="table-badge ${getStatusBadge(deal.status)}">${deal.status}</span></td>
            <td>${deal.agent}</td>
            <td>${deal.closingDate}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn" title="View"><i class="fas fa-eye"></i></button>
                    <button class="action-btn" title="Edit"><i class="fas fa-edit"></i></button>
                </div>
            </td>
        </tr>
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

    // Create Deal Button
    const createDealBtn = document.getElementById('createDealBtn');
    if (createDealBtn) {
        createDealBtn.addEventListener('click', () => {
            openModal('addDealModal');
        });
    }

    // Add Deal Form Submit
    const addDealForm = document.getElementById('addDealForm');
    if (addDealForm) {
        addDealForm.addEventListener('submit', handleAddDeal);
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

// Handle Add Deal
function handleAddDeal(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const closingDate = new Date(formData.get('closingDate'));
    const formattedDate = closingDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    const newDeal = {
        id: `D${String(dealsData.length + 1).padStart(3, '0')}`,
        property: formData.get('property'),
        client: formData.get('client'),
        value: formData.get('value'),
        commission: formData.get('commission'),
        status: formData.get('status'),
        agent: formData.get('agent'),
        closingDate: formattedDate
    };

    dealsData.unshift(newDeal);
    renderDealsTable();
    closeModal('addDealModal');
    
    alert('Deal created successfully!');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderDealsTable();
    setupEventListeners();
});