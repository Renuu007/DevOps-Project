// DevOps Demo App JavaScript
class DevOpsDemo {
    constructor() {
        this.taskCounter = 4;
        this.versionHistory = [
            { version: '1.0.0', date: '2024-01-15', changes: 'Initial release with basic features' },
            { version: '1.1.0', date: '2024-01-16', changes: 'Added task management and version history' },
            { version: '1.2.0', date: '2024-01-17', changes: 'Enhanced UI and added Git workflow demo' }
        ];
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateVersion();
        this.displayVersionHistory();
    }

    bindEvents() {
        document.getElementById('addTask').addEventListener('click', () => this.addTask());
        document.getElementById('clearTasks').addEventListener('click', () => this.clearTasks());
    }

    addTask() {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('div');
        newTask.className = 'task-item';
        newTask.innerHTML = `
            <span class="task-text">New task ${this.taskCounter}</span>
            <span class="task-status pending">⏳</span>
        `;
        taskList.appendChild(newTask);
        this.taskCounter++;
        
        // Add animation
        newTask.style.opacity = '0';
        newTask.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            newTask.style.transition = 'all 0.3s ease';
            newTask.style.opacity = '1';
            newTask.style.transform = 'translateX(0)';
        }, 100);
    }

    clearTasks() {
        const taskList = document.getElementById('taskList');
        const tasks = taskList.querySelectorAll('.task-item');
        
        tasks.forEach((task, index) => {
            setTimeout(() => {
                task.style.transition = 'all 0.3s ease';
                task.style.opacity = '0';
                task.style.transform = 'translateX(20px)';
                setTimeout(() => task.remove(), 300);
            }, index * 100);
        });
        
        this.taskCounter = 1;
    }

    updateVersion() {
        const versionElement = document.getElementById('version');
        if (versionElement) {
            versionElement.textContent = '1.2.0';
        }
    }

    displayVersionHistory() {
        const versionSection = document.createElement('section');
        versionSection.className = 'version-section';
        versionSection.innerHTML = `
            <h2>Version History</h2>
            <div class="version-timeline">
                ${this.versionHistory.map(v => `
                    <div class="version-item">
                        <div class="version-badge">v${v.version}</div>
                        <div class="version-details">
                            <div class="version-date">${v.date}</div>
                            <div class="version-changes">${v.changes}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        const main = document.querySelector('main');
        if (main) {
            main.appendChild(versionSection);
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DevOpsDemo();

    // Add some interactive effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Add Git workflow simulation
    const simulateGitWorkflow = () => {
        console.log('🔄 Simulating Git workflow...');
        console.log('📝 Creating feature branch...');
        console.log('💾 Committing changes...');
        console.log('🔀 Merging to dev branch...');
        console.log('🚀 Deploying to production...');
    };

    // Add a button to simulate Git workflow
    const demoSection = document.querySelector('.demo-section');
    if (demoSection) {
        const gitButton = document.createElement('button');
        gitButton.className = 'btn btn-git';
        gitButton.textContent = '🚀 Simulate Git Workflow';
        gitButton.addEventListener('click', simulateGitWorkflow);
        
        const controls = demoSection.querySelector('.demo-controls');
        if (controls) {
            controls.appendChild(gitButton);
        }
    }
});

// Console welcome message for developers
console.log('🚀 DevOps Demo App Loaded!');
console.log('Check out the Git workflow and branching strategy!');
console.log('Current branch: feature/enhancement');
