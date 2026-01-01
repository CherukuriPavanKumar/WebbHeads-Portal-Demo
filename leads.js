// Sample leads data
let leadsData = [
    { id: 'L001', name: 'Rahul Verma', phone: '+91 98765 43210', email: 'rahul@example.com', source: 'Website', budget: '₹45-55L', stage: 'New Lead', agent: 'John Doe', lastContact: '2 hours ago', nextFollowup: 'Today 3:00 PM' },
    { id: 'L002', name: 'Priya Sharma', phone: '+91 98765 43211', email: 'priya@example.com', source: 'Referral', budget: '₹60-70L', stage: 'Contacted', agent: 'Sarah Johnson', lastContact: '1 day ago', nextFollowup: 'Tomorrow 11:00 AM' },
    { id: 'L003', name: 'Amit Patel', phone: '+91 98765 43212', email: 'amit@example.com', source: 'Facebook', budget: '₹35-40L', stage: 'Site Visit Scheduled', agent: 'John Doe', lastContact: '3 days ago', nextFollowup: 'Dec 30, 2:00 PM' },
    { id: 'L004', name: 'Sneha Reddy', phone: '+91 98765 43213', email: 'sneha@example.com', source: '99acres', budget: '₹80-90L', stage: 'Negotiation', agent: 'Mike Wilson', lastContact: '5 hours ago', nextFollowup: 'Today 5:00 PM' },
    { id: 'L005', name: 'Vikram Singh', phone: '+91 98765 43214', email: 'vikram@example.com', source: 'MagicBricks', budget: '₹1-1.2Cr', stage: 'Contacted', agent: 'John Doe', lastContact: '2 days ago', nextFollowup: 'Tomorrow' },
    { id: 'L006', name: 'Anjali Mehta', phone: '+91 98765 43215', email: 'anjali@example.com', source: 'Website', budget: '₹50-60L', stage: 'New Lead', agent: 'Sarah Johnson', lastContact: '30 min ago', nextFollowup: 'Today 6:00 PM' },
    { id: 'L007', name: 'Karan Malhotra', phone: '+91 98765 43216', email: 'karan@example.com', source: 'Walk-in', budget: '₹70-80L', stage: 'Site Visit Scheduled', agent: 'Mike Wilson', lastContact: '4 days ago', nextFollowup: 'Jan 2, 10:00 AM' },
    { id: 'L008', name: 'Neha Gupta', phone: '+91 98765 43217', email: 'neha@example.com', source: 'Housing.com', budget: '₹45-50L', stage: 'Contacted', agent: 'John Doe', lastContact: '1 day ago', nextFollowup: 'Tomorrow 3:00 PM' }
];

// Get stage badge class
function getStageBadge(stage) {
    const badges = {
        'New Lead': 'badge-new',
        'Contacted': 'badge-warm',
        'Site Visit Scheduled': 'badge-hot',
        'Negotiation': 'badge-active',
        'Closed': 'badge-closed'
    };
    return badges[stage] || 'badge-cold';
}

// Render leads table
function renderLeadsTable() {
    const tbody = document.getElementById('leadsTableBody');
    tbody.innerHTML = leadsData.map(lead => `
        <tr>
            <td><input type="checkbox"></td>
            <td><strong>${lead.name}</strong><br><small>${lead.id}</small></td>
            <td>${lead.phone}<br><small>${lead.email}</small></td>
            <td>${lead.source}</td>
            <td>${lead.budget}</td>
            <td><span class="table-badge ${getStageBadge(lead.stage)}">${lead.stage}</span></td>
            <td>${lead.agent}</td>
            <td>${lead.lastContact}</td>
            <td>${lead.nextFollowup}</td>
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

// Setup sidebar toggle
function setupEventListeners() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Add Lead Button
    const addLeadBtn = document.getElementById('addLeadBtn');
    if (addLeadBtn) {
        addLeadBtn.addEventListener('click', () => {
            openModal('addLeadModal');
        });
    }

    // Add Lead Form Submit
    const addLeadForm = document.getElementById('addLeadForm');
    if (addLeadForm) {
        addLeadForm.addEventListener('submit', handleAddLead);
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
        // Reset form if it exists
        const form = modal.querySelector('form');
        if (form) {
            form.reset();
        }
    }
}

// Handle Add Lead
function handleAddLead(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newLead = {
        id: `L${String(leadsData.length + 1).padStart(3, '0')}`,
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        source: formData.get('source'),
        budget: formData.get('budget'),
        stage: formData.get('stage'),
        agent: formData.get('agent'),
        lastContact: 'Just now',
        nextFollowup: formData.get('nextFollowup') ? new Date(formData.get('nextFollowup')).toLocaleString() : 'Not set'
    };

    leadsData.unshift(newLead);
    renderLeadsTable();
    closeModal('addLeadModal');
    
    // Show success message
    alert('Lead added successfully!');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderLeadsTable();
    setupEventListeners();
});