// DevOps Demo App JavaScript
class DevOpsDemo {
    constructor() {
        this.taskCounter = 4;
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateVersion();
    }

    bindEvents() {
        document.getElementById('addTask').addEventListener('click', () => this.addTask());
        document.getElementById('clearTasks').addEventListener('click', () => this.clearTasks());
    }

    addTask() {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('div');
        newTask.className = 'task-item';
        
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = `New DevOps task ${this.taskCounter}`;
        
        const taskStatus = document.createElement('span');
        taskStatus.className = 'task-status completed';
        taskStatus.textContent = '✅';
        
        newTask.appendChild(taskText);
        newTask.appendChild(taskStatus);
        taskList.appendChild(newTask);
        
        this.taskCounter++;
        
        // Add animation
        newTask.style.opacity = '0';
        newTask.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            newTask.style.transition = 'all 0.3s ease';
            newTask.style.opacity = '1';
            newTask.style.transform = 'translateX(0)';
        }, 10);
    }

    clearTasks() {
        const taskList = document.getElementById('taskList');
        const tasks = taskList.querySelectorAll('.task-item');
        
        tasks.forEach((task, index) => {
            setTimeout(() => {
                task.style.transition = 'all 0.3s ease';
                task.style.opacity = '0';
                task.style.transform = 'translateX(20px)';
                setTimeout(() => {
                    task.remove();
                }, 300);
            }, index * 100);
        });
        
        this.taskCounter = 4;
    }

    updateVersion() {
        const versionElement = document.getElementById('version');
        if (versionElement) {
            // This could be dynamically updated based on Git tags
            versionElement.textContent = '1.0.0';
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
});

// Console welcome message for developers
console.log('🚀 DevOps Demo App Loaded!');
console.log('Check out the Git workflow and branching strategy!');
