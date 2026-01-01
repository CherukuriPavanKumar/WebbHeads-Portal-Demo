// Sample site visits data
let siteVisitsData = [
    { id: 'V001', property: 'Prestige Lakeside Habitat', client: 'Priya Sharma', dateTime: 'Dec 28, 2025 3:00 PM', agent: 'John Doe', status: 'Scheduled', feedback: '-' },
    { id: 'V002', property: 'Sobha Dream Acres', client: 'Vikram Singh', dateTime: 'Dec 28, 2025 6:00 PM', agent: 'Sarah Johnson', status: 'Scheduled', feedback: '-' },
    { id: 'V003', property: 'Brigade Orchards', client: 'Anjali Mehta', dateTime: 'Dec 29, 2025 11:00 AM', agent: 'John Doe', status: 'Scheduled', feedback: '-' },
    { id: 'V004', property: 'Purva Venezia', client: 'Amit Patel', dateTime: 'Dec 27, 2025 4:00 PM', agent: 'Mike Wilson', status: 'Completed', feedback: 'Very interested' },
    { id: 'V005', property: 'Godrej E-City', client: 'Neha Gupta', dateTime: 'Dec 26, 2025 2:00 PM', agent: 'Sarah Johnson', status: 'Completed', feedback: 'Wants to negotiate' },
    { id: 'V006', property: 'Adarsh Palm Retreat', client: 'Karan Malhotra', dateTime: 'Dec 25, 2025 10:00 AM', agent: 'John Doe', status: 'Cancelled', feedback: 'Budget issue' }
];

// Get status badge
function getStatusBadge(status) {
    const badges = {
        'Scheduled': 'badge-new',
        'Completed': 'badge-active',
        'Cancelled': 'badge-cold',
        'Missed': 'badge-warm'
    };
    return badges[status] || 'badge-new';
}

// Render site visits table
function renderVisitsTable() {
    const tbody = document.getElementById('visitsTableBody');
    tbody.innerHTML = siteVisitsData.map(visit => `
        <tr>
            <td><strong>${visit.id}</strong></td>
            <td>${visit.property}</td>
            <td>${visit.client}</td>
            <td>${visit.dateTime}</td>
            <td>${visit.agent}</td>
            <td><span class="table-badge ${getStatusBadge(visit.status)}">${visit.status}</span></td>
            <td>${visit.feedback}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn" title="View"><i class="fas fa-eye"></i></button>
                    <button class="action-btn" title="Edit"><i class="fas fa-edit"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Render calendar placeholder
function renderCalendar() {
    const calendar = document.getElementById('siteVisitsCalendar');
    calendar.innerHTML = '<p><i class="fas fa-calendar-alt" style="font-size: 48px; margin-bottom: 16px;"></i><br>Calendar view coming soon. Use table view below.</p>';
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

    // Schedule Visit Button
    const scheduleVisitBtn = document.getElementById('scheduleVisitBtn');
    if (scheduleVisitBtn) {
        scheduleVisitBtn.addEventListener('click', () => {
            openModal('scheduleVisitModal');
        });
    }

    // Schedule Visit Form Submit
    const scheduleVisitForm = document.getElementById('scheduleVisitForm');
    if (scheduleVisitForm) {
        scheduleVisitForm.addEventListener('submit', handleScheduleVisit);
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

// Handle Schedule Visit
function handleScheduleVisit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const date = new Date(formData.get('date'));
    const time = formData.get('time');
    
    // Format date and time
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const dateTime = `${formattedDate} ${time}`;
    
    const newVisit = {
        id: `V${String(siteVisitsData.length + 1).padStart(3, '0')}`,
        property: formData.get('property'),
        client: formData.get('client'),
        dateTime: dateTime,
        agent: formData.get('agent'),
        status: formData.get('status'),
        feedback: '-'
    };

    siteVisitsData.unshift(newVisit);
    renderVisitsTable();
    closeModal('scheduleVisitModal');
    
    alert('Site visit scheduled successfully!');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    renderVisitsTable();
    setupEventListeners();
});