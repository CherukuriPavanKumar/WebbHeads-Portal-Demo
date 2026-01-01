// Sample Data
const dashboardData = {
    kpis: {
        totalLeads: 127,
        activeDeals: 18,
        followupsToday: 12,
        dealsClosed: 24,
        revenue: 2850000
    },

    actions: [
        { id: 1, title: 'Call Rajesh Kumar - High Priority', type: 'overdue', lead: 'Rajesh Kumar', time: '2 hours ago', priority: 'high' },
        { id: 2, title: 'Site visit with Priya Sharma', type: 'today', lead: 'Priya Sharma', time: 'Today 3:00 PM', priority: 'high' },
        { id: 3, title: 'Follow-up: Amit Patel - Budget Discussion', type: 'today', lead: 'Amit Patel', time: 'Today 5:00 PM', priority: 'medium' },
        { id: 4, title: 'Send property documents to Neha Gupta', type: 'overdue', lead: 'Neha Gupta', time: 'Yesterday', priority: 'high' },
        { id: 5, title: 'Schedule meeting with Vikram Singh', type: 'today', lead: 'Vikram Singh', time: 'Today 6:30 PM', priority: 'medium' },
        { id: 6, title: 'Property viewing confirmation - Anjali Mehta', type: 'upcoming', lead: 'Anjali Mehta', time: 'Tomorrow 11:00 AM', priority: 'low' }
    ],

    pipeline: [
        {
            stage: 'New Lead',
            leads: [
                { name: 'Rahul Verma', source: 'Website', budget: '₹45-55L', date: '2 hours ago' },
                { name: 'Sneha Reddy', source: 'Referral', budget: '₹60-70L', date: '5 hours ago' },
                { name: 'Karan Malhotra', source: 'Facebook', budget: '₹35-40L', date: '1 day ago' }
            ]
        },
        {
            stage: 'Contacted',
            leads: [
                { name: 'Pooja Desai', source: 'Walk-in', budget: '₹50-60L', date: '2 days ago' },
                { name: 'Arjun Nair', source: '99acres', budget: '₹75-85L', date: '3 days ago' },
                { name: 'Divya Iyer', source: 'MagicBricks', budget: '₹40-50L', date: '3 days ago' }
            ]
        },
        {
            stage: 'Site Visit Scheduled',
            leads: [
                { name: 'Sanjay Kapoor', source: 'Referral', budget: '₹90L-1Cr', date: '1 week ago' },
                { name: 'Meera Joshi', source: 'Website', budget: '₹55-65L', date: '1 week ago' }
            ]
        },
        {
            stage: 'Negotiation',
            leads: [
                { name: 'Ravi Shankar', source: 'Walk-in', budget: '₹80-90L', date: '2 weeks ago' },
                { name: 'Kavita Pillai', source: 'Housing.com', budget: '₹1-1.2Cr', date: '2 weeks ago' },
                { name: 'Suresh Kumar', source: 'Referral', budget: '₹65-75L', date: '3 weeks ago' }
            ]
        },
        {
            stage: 'Closed',
            leads: [
                { name: 'Deepak Agarwal', source: 'Referral', budget: '₹95L', date: '1 month ago' },
                { name: 'Lakshmi Narayanan', source: 'Website', budget: '₹1.1Cr', date: '1 month ago' }
            ]
        }
    ],

    siteVisits: [
        { property: 'Prestige Lakeside Habitat', client: 'Priya Sharma', time: 'Today 3:00 PM', agent: 'John Doe', status: 'scheduled' },
        { property: 'Sobha Dream Acres', client: 'Vikram Singh', time: 'Today 6:00 PM', agent: 'Sarah Johnson', status: 'scheduled' },
        { property: 'Brigade Orchards', client: 'Anjali Mehta', time: 'Tomorrow 11:00 AM', agent: 'John Doe', status: 'scheduled' },
        { property: 'Purva Venezia', client: 'Amit Patel', time: 'Yesterday 4:00 PM', agent: 'Mike Wilson', status: 'completed' }
    ],

    propertyStats: {
        activeListings: 47,
        soldThisMonth: 12,
        underNegotiation: 8,
        newListings: 5
    },

    followups: [
        { name: 'Rajesh Kumar', time: '2 hours overdue', avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0B5FFF&color=fff' },
        { name: 'Priya Sharma', time: 'Today 3:00 PM', avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=10B981&color=fff' },
        { name: 'Amit Patel', time: 'Today 5:00 PM', avatar: 'https://ui-avatars.com/api/?name=Amit+Patel&background=F59E0B&color=fff' },
        { name: 'Neha Gupta', time: 'Tomorrow 10:00 AM', avatar: 'https://ui-avatars.com/api/?name=Neha+Gupta&background=8B5CF6&color=fff' },
        { name: 'Vikram Singh', time: 'Tomorrow 2:00 PM', avatar: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=EF4444&color=fff' }
    ],

    analytics: {
        conversionRate: 32,
        avgResponseTime: 4.2,
        clientSatisfaction: 4.7
    },

    activities: [
        { type: 'lead', text: 'New lead assigned: Rahul Verma', time: '2 hours ago', icon: 'fa-user-plus' },
        { type: 'deal', text: 'Deal closed with Deepak Agarwal - ₹95L', time: '3 hours ago', icon: 'fa-handshake' },
        { type: 'visit', text: 'Site visit completed: Amit Patel', time: '5 hours ago', icon: 'fa-map-marker-alt' },
        { type: 'lead', text: 'Follow-up completed with Priya Sharma', time: '6 hours ago', icon: 'fa-phone' },
        { type: 'deal', text: 'Negotiation started with Ravi Shankar', time: '1 day ago', icon: 'fa-comments' },
        { type: 'visit', text: 'Site visit scheduled: Anjali Mehta', time: '1 day ago', icon: 'fa-calendar-check' }
    ],

    tasks: [
        { title: 'Prepare property presentation for Vikram Singh', due: 'Today 2:00 PM', priority: 'high' },
        { title: 'Update CRM with new lead details', due: 'Today 5:00 PM', priority: 'medium' },
        { title: 'Send contract to Kavita Pillai', due: 'Tomorrow', priority: 'high' },
        { title: 'Schedule team meeting', due: 'Tomorrow', priority: 'low' },
        { title: 'Review property documents', due: 'Dec 30', priority: 'medium' }
    ]
};

// Initialize Dashboard
function initDashboard() {
    renderKPIs();
    renderActions();
    renderPipeline();
    renderSiteVisits();
    renderPropertySnapshot();
    renderFollowups();
    renderAnalytics();
    renderActivityFeed();
    renderTasks();
    setupEventListeners();
}

// Render KPIs
function renderKPIs() {
    document.getElementById('totalLeads').textContent = dashboardData.kpis.totalLeads;
    document.getElementById('activeDeals').textContent = dashboardData.kpis.activeDeals;
    document.getElementById('followupsToday').textContent = dashboardData.kpis.followupsToday;
    document.getElementById('dealsClosed').textContent = dashboardData.kpis.dealsClosed;
    document.getElementById('revenue').textContent = `₹${(dashboardData.kpis.revenue / 100000).toFixed(1)}L`;
}

// Render Actions
function renderActions() {
    const container = document.getElementById('actionsGrid');
    container.innerHTML = dashboardData.actions.map(action => `
        <div class="action-item ${action.type}">
            <div class="action-title">
                <i class="fas fa-exclamation-circle"></i>
                ${action.title}
            </div>
            <div class="action-meta">
                <span><i class="fas fa-user"></i> ${action.lead}</span>
                <span><i class="fas fa-clock"></i> ${action.time}</span>
            </div>
        </div>
    `).join('');
}

// Render Pipeline
function renderPipeline() {
    const container = document.getElementById('kanbanBoard');
    container.innerHTML = dashboardData.pipeline.map(column => `
        <div class="kanban-column">
            <div class="kanban-header">
                <span>${column.stage}</span>
                <span class="kanban-count">${column.leads.length}</span>
            </div>
            ${column.leads.map(lead => `
                <div class="kanban-card">
                    <div class="card-name">${lead.name}</div>
                    <div class="card-info">
                        <span><i class="fas fa-tag"></i> ${lead.source}</span>
                        <span><i class="fas fa-rupee-sign"></i> ${lead.budget}</span>
                        <span><i class="fas fa-clock"></i> ${lead.date}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

// Render Site Visits
function renderSiteVisits() {
    const container = document.getElementById('siteVisitsList');
    container.innerHTML = dashboardData.siteVisits.map(visit => `
        <div class="visit-item">
            <div class="visit-icon">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="visit-details">
                <div class="visit-property">${visit.property}</div>
                <div class="visit-meta">
                    ${visit.client} • ${visit.time} • ${visit.agent}
                </div>
            </div>
            <span class="visit-status ${visit.status}">
                ${visit.status === 'scheduled' ? 'Scheduled' : 'Completed'}
            </span>
        </div>
    `).join('');
}

// Render Property Snapshot
function renderPropertySnapshot() {
    const container = document.getElementById('propertySnapshot');
    const stats = dashboardData.propertyStats;
    container.innerHTML = `
        <div class="snapshot-item">
            <div class="snapshot-value">${stats.activeListings}</div>
            <div class="snapshot-label">Active Listings</div>
        </div>
        <div class="snapshot-item">
            <div class="snapshot-value">${stats.soldThisMonth}</div>
            <div class="snapshot-label">Sold This Month</div>
        </div>
        <div class="snapshot-item">
            <div class="snapshot-value">${stats.underNegotiation}</div>
            <div class="snapshot-label">Under Negotiation</div>
        </div>
        <div class="snapshot-item">
            <div class="snapshot-value">${stats.newListings}</div>
            <div class="snapshot-label">New This Week</div>
        </div>
    `;
}

// Render Follow-ups
function renderFollowups() {
    const container = document.getElementById('followupsList');
    container.innerHTML = dashboardData.followups.map(followup => `
        <div class="followup-item">
            <img src="${followup.avatar}" alt="${followup.name}" class="followup-avatar">
            <div class="followup-details">
                <div class="followup-name">${followup.name}</div>
                <div class="followup-time">${followup.time}</div>
            </div>
            <button class="icon-btn">
                <i class="fas fa-phone"></i>
            </button>
        </div>
    `).join('');
}

// Render Analytics
function renderAnalytics() {
    const container = document.getElementById('analyticsContainer');
    const analytics = dashboardData.analytics;
    container.innerHTML = `
        <div>
            <div class="metric-row">
                <span class="metric-label">Lead Conversion Rate</span>
                <span class="metric-value">${analytics.conversionRate}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${analytics.conversionRate}%"></div>
            </div>
        </div>
        <div>
            <div class="metric-row">
                <span class="metric-label">Avg Response Time</span>
                <span class="metric-value">${analytics.avgResponseTime}h</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${(analytics.avgResponseTime / 24) * 100}%"></div>
            </div>
        </div>
        <div>
            <div class="metric-row">
                <span class="metric-label">Client Satisfaction</span>
                <span class="metric-value">${analytics.clientSatisfaction}/5.0</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${(analytics.clientSatisfaction / 5) * 100}%"></div>
            </div>
        </div>
    `;
}

// Render Activity Feed
function renderActivityFeed() {
    const container = document.getElementById('activityFeed');
    container.innerHTML = dashboardData.activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon ${activity.type}">
                <i class="fas ${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-text">${activity.text}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        </div>
    `).join('');
}

// Render Tasks
function renderTasks() {
    const container = document.getElementById('tasksList');
    container.innerHTML = dashboardData.tasks.map(task => `
        <div class="task-item">
            <div class="task-checkbox"></div>
            <div class="task-content">
                <div class="task-title">${task.title}</div>
                <div class="task-due">${task.due}</div>
            </div>
            <span class="priority-badge ${task.priority}">${task.priority}</span>
        </div>
    `).join('');
}

// Setup Event Listeners
function setupEventListeners() {
    // Menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar on outside click (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initDashboard);