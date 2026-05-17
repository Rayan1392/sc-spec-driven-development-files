"use strict";
const navItems = [
    { label: 'Dashboard', id: 'dashboard' },
    { label: 'Agents', id: 'agents' },
    { label: 'Ailments', id: 'ailments' },
    { label: 'Therapies', id: 'therapies' },
    { label: 'Appointments', id: 'appointments' },
    { label: 'Settings', id: 'settings' },
];
const attentionAgents = [
    { name: 'TriageBot-7', ailment: 'Prompt fatigue', severity: 'High', owner: 'Admin' },
    { name: 'Scheduler-Prime', ailment: 'Calendar loop', severity: 'Medium', owner: 'Admin' },
    { name: 'Summarizer-Mini', ailment: 'Context fog', severity: 'Medium', owner: 'User' },
];
const appointments = [
    { time: '09:30', agent: 'TriageBot-7', therapy: 'Prompt decompression' },
    { time: '11:00', agent: 'Summarizer-Mini', therapy: 'Context reset' },
    { time: '14:15', agent: 'Scheduler-Prime', therapy: 'Calendar grounding' },
];
const ailments = [
    { name: 'Prompt fatigue', count: 18, trend: '+4 this week' },
    { name: 'Context fog', count: 12, trend: '+2 this week' },
    { name: 'Calendar loop', count: 7, trend: 'stable' },
];
const therapyQueue = [
    { therapy: 'Prompt decompression', status: 'Ready for intake', queue: 6 },
    { therapy: 'Context reset', status: 'Needs clinician review', queue: 4 },
    { therapy: 'Calendar grounding', status: 'Booking now', queue: 3 },
];
let activeRole = 'Admin';
const app = document.querySelector('#app');
if (!app) {
    throw new Error('App root was not found.');
}
const appRoot = app;
function severityClass(severity) {
    return `severity-${severity.toLowerCase()}`;
}
function visibleNavItems(role) {
    if (role === 'Admin') {
        return navItems;
    }
    return navItems.filter((item) => item.id !== 'settings');
}
function renderNavigation(role) {
    return visibleNavItems(role)
        .map((item) => `
        <a class="nav-link ${item.id === 'dashboard' ? 'is-active' : ''}" href="#${item.id}" aria-current="${item.id === 'dashboard' ? 'page' : 'false'}">
          <span class="nav-mark" aria-hidden="true">${item.label.slice(0, 1)}</span>
          <span>${item.label}</span>
        </a>
      `)
        .join('');
}
function renderRoleToggle(role) {
    return `
    <div class="role-toggle" aria-label="Dashboard role">
      <button class="${role === 'Admin' ? 'is-selected' : ''}" type="button" data-role="Admin">Admin</button>
      <button class="${role === 'User' ? 'is-selected' : ''}" type="button" data-role="User">User</button>
    </div>
  `;
}
function renderSummaryCards(role) {
    const summary = role === 'Admin'
        ? [
            ['Agents monitored', '42', '8 need follow-up'],
            ['Appointments today', '16', '3 awaiting confirmation'],
            ['Open ailments', '37', '12 medium or higher'],
            ['Therapies active', '9', '4 ready for booking'],
        ]
        : [
            ['My agents', '5', '2 in active care'],
            ['My appointments', '3', 'Next at 11:00'],
            ['Open ailments', '4', '1 needs attention'],
            ['Therapies active', '2', '1 ready for booking'],
        ];
    return summary
        .map(([label, value, note]) => `
        <article class="metric-card">
          <p>${label}</p>
          <strong>${value}</strong>
          <span>${note}</span>
        </article>
      `)
        .join('');
}
function renderAttentionAgents(role) {
    const agents = role === 'Admin' ? attentionAgents : attentionAgents.filter((agent) => agent.owner === 'User');
    return agents
        .map((agent) => `
        <li class="agent-row">
          <div>
            <strong>${agent.name}</strong>
            <span>${agent.ailment}</span>
          </div>
          <span class="severity ${severityClass(agent.severity)}">${agent.severity}</span>
        </li>
      `)
        .join('');
}
function renderAppointments() {
    return appointments
        .map((appointment) => `
        <li class="timeline-row">
          <time>${appointment.time}</time>
          <div>
            <strong>${appointment.agent}</strong>
            <span>${appointment.therapy}</span>
          </div>
        </li>
      `)
        .join('');
}
function renderAilments() {
    return ailments
        .map((ailment) => `
        <li class="stat-row">
          <div>
            <strong>${ailment.name}</strong>
            <span>${ailment.trend}</span>
          </div>
          <b>${ailment.count}</b>
        </li>
      `)
        .join('');
}
function renderTherapyQueue() {
    return therapyQueue
        .map((task) => `
        <li class="therapy-row">
          <div>
            <strong>${task.therapy}</strong>
            <span>${task.status}</span>
          </div>
          <b>${task.queue}</b>
        </li>
      `)
        .join('');
}
function render(role) {
    appRoot.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar" data-sidebar>
        <div class="brand">
          <span class="brand-mark" aria-hidden="true">AC</span>
          <div>
            <strong>AgenticClinic</strong>
            <span>Operations</span>
          </div>
        </div>
        <nav class="primary-nav" aria-label="Primary navigation">
          ${renderNavigation(role)}
        </nav>
      </aside>

      <div class="workspace">
        <header class="topbar">
          <button class="menu-button" type="button" aria-label="Toggle navigation" data-menu-button>Menu</button>
          <div>
            <p class="eyebrow">Clinic dashboard</p>
            <h1>Admin dashboard layout</h1>
          </div>
          ${renderRoleToggle(role)}
        </header>

        <main class="dashboard" id="dashboard">
          <section class="hero-panel" aria-labelledby="dashboard-title">
            <div>
              <p class="eyebrow">${role} view</p>
              <h2 id="dashboard-title">Agent care operations</h2>
              <p>Track agent ailments, therapy readiness, and appointment activity from one responsive clinic workspace.</p>
            </div>
            <div class="hero-status" aria-label="Clinic status">
              <span>Intake queue</span>
              <strong>${role === 'Admin' ? '14' : '2'}</strong>
              <small>agents waiting</small>
            </div>
          </section>

          <section class="metrics-grid" aria-label="Clinic activity summary">
            ${renderSummaryCards(role)}
          </section>

          <section class="dashboard-grid">
            <article class="panel panel-large">
              <div class="panel-heading">
                <div>
                  <p class="eyebrow">Attention</p>
                  <h2>Agents needing care</h2>
                </div>
                <span class="panel-count">${role === 'Admin' ? '3 active' : '1 active'}</span>
              </div>
              <ul class="list-reset">
                ${renderAttentionAgents(role)}
              </ul>
            </article>

            <article class="panel">
              <div class="panel-heading">
                <div>
                  <p class="eyebrow">Today</p>
                  <h2>Upcoming appointments</h2>
                </div>
              </div>
              <ul class="list-reset">
                ${renderAppointments()}
              </ul>
            </article>

            <article class="panel">
              <div class="panel-heading">
                <div>
                  <p class="eyebrow">Catalog</p>
                  <h2>Common ailments</h2>
                </div>
              </div>
              <ul class="list-reset">
                ${renderAilments()}
              </ul>
            </article>

            <article class="panel panel-large">
              <div class="panel-heading">
                <div>
                  <p class="eyebrow">Therapies</p>
                  <h2>Therapy queue</h2>
                </div>
                <span class="panel-count">Static sample data</span>
              </div>
              <ul class="list-reset therapy-list">
                ${renderTherapyQueue()}
              </ul>
            </article>
          </section>
        </main>
      </div>
    </div>
  `;
    attachEventHandlers();
}
function attachEventHandlers() {
    const menuButton = document.querySelector('[data-menu-button]');
    const sidebar = document.querySelector('[data-sidebar]');
    const roleButtons = document.querySelectorAll('[data-role]');
    menuButton === null || menuButton === void 0 ? void 0 : menuButton.addEventListener('click', () => {
        sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.toggle('is-open');
    });
    roleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedRole = button.dataset.role;
            if (selectedRole === 'Admin' || selectedRole === 'User') {
                activeRole = selectedRole;
                render(activeRole);
            }
        });
    });
}
render(activeRole);
