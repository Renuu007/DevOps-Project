# 🚀 DevOps Project Demo

A comprehensive DevOps project demonstrating Git best practices, branching strategies, and CI/CD workflows.

## 📋 Project Overview

This project showcases essential DevOps practices including:
- **Version Control**: Git workflow with proper branching strategy
- **Collaboration**: Pull request workflow and code review process
- **Documentation**: Comprehensive project documentation
- **CI/CD Ready**: GitHub Actions workflow setup
- **Demo Web App**: Interactive web application for demonstration

## 🎯 Learning Objectives

By completing this project, you will understand:
1. Git branching strategy (main, dev, feature branches)
2. Pull request workflow and code review process
3. Proper repository documentation and README creation
4. Git tags and versioning
5. CI/CD pipeline setup with GitHub Actions

## 🏗️ Project Structure

```
DevOps-Project/
├── index.html          # Main web application
├── styles.css          # Application styling
├── script.js           # Interactive functionality
├── README.md           # Project documentation
├── .gitignore          # Git ignore rules
├── task1.txt           # Project requirements
└── .github/            # GitHub Actions workflows
    └── workflows/
        └── ci.yml      # CI/CD pipeline
```

## 🚀 Getting Started

### Prerequisites
- Git installed on your system
- GitHub account
- Basic knowledge of HTML, CSS, and JavaScript

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Renuu007/DevOps-Project.git
   cd DevOps-Project
   ```

2. Open `index.html` in your web browser to view the demo app

3. Explore the interactive features and project structure

## 🌿 Branching Strategy

This project follows a **Git Flow** branching strategy:

- **`main`**: Production-ready code
- **`dev`**: Development integration branch
- **`feature/*`**: Feature development branches
- **`hotfix/*`**: Critical bug fixes

### Branch Workflow
1. Create feature branch from `dev`
2. Develop and test your feature
3. Create pull request to merge into `dev`
4. After review, merge to `dev`
5. When ready for release, merge `dev` to `main`

## 🔄 Pull Request Workflow

1. **Fork** the repository (if contributing)
2. **Create** a feature branch
3. **Make** your changes
4. **Test** your changes
5. **Commit** with descriptive messages
6. **Push** to your branch
7. **Create** a pull request
8. **Review** and address feedback
9. **Merge** after approval

## 📝 Git Best Practices

### Commit Messages
Use conventional commit format:
```
type(scope): description

feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add tests
chore: maintenance tasks
```

### Branch Naming
- Feature: `feature/feature-name`
- Bug fix: `fix/bug-description`
- Hotfix: `hotfix/critical-fix`

## 🖥️ Essential Git Commands

### Repository Setup
```bash
git init                    # Initialize a new Git repository
git clone <url>            # Clone a repository from remote URL
git remote add origin <url> # Add remote origin to local repository
git remote -v              # View all remote repositories
```

### Basic Workflow
```bash
git status                 # Check the status of working directory
git add <file>             # Stage specific file for commit
git add .                  # Stage all changes for commit
git commit -m "message"    # Commit staged changes with message
git log                    # View commit history
git log --oneline          # View compact commit history
```

### Branching Commands
```bash
git branch                 # List all local branches
git branch -a              # List all branches (local and remote)
git branch <name>          # Create a new branch
git checkout <branch>      # Switch to specified branch
git checkout -b <name>     # Create and switch to new branch
git switch <branch>        # Modern way to switch branches
git switch -c <name>       # Create and switch to new branch
git merge <branch>         # Merge specified branch into current branch
git branch -d <branch>     # Delete local branch (if merged)
git branch -D <branch>     # Force delete local branch
```

### Remote Operations
```bash
git fetch                  # Download objects and refs from remote
git pull                   # Fetch and merge changes from remote
git push                   # Push local commits to remote
git push origin <branch>   # Push specific branch to remote
git push -u origin <branch> # Push and set upstream for branch
git push --tags            # Push all tags to remote
```

### Stashing and Reset
```bash
git stash                  # Temporarily save uncommitted changes
git stash list            # List all stashes
git stash pop             # Apply and remove most recent stash
git stash apply           # Apply stash without removing it
git reset --hard HEAD     # Reset working directory to last commit
git reset --soft HEAD~1   # Undo last commit, keep changes staged
git reset HEAD <file>     # Unstage specific file
```

### Information and History
```bash
git show <commit>          # Show details of specific commit
git diff                   # Show unstaged changes
git diff --staged          # Show staged changes
git diff <branch1>..<branch2> # Show differences between branches
git blame <file>           # Show who changed what in a file
git log --graph --oneline  # Show commit history with graph
```

### Tagging and Versioning
```bash
git tag                    # List all tags
git tag <name>             # Create lightweight tag
git tag -a <name> -m "message" # Create annotated tag
git tag -d <name>          # Delete local tag
git push origin --tags     # Push all tags to remote
git checkout <tag>         # Checkout specific tag (detached HEAD)
```

### Advanced Commands
```bash
git rebase <branch>        # Replay commits on top of another branch
git cherry-pick <commit>   # Apply specific commit to current branch
git bisect start           # Start binary search for bug
git bisect good <commit>   # Mark commit as good
git bisect bad <commit>    # Mark commit as bad
git submodule add <url>    # Add submodule to repository
git worktree add <path>    # Add working tree
```

### Configuration
```bash
git config --global user.name "Your Name"     # Set global username
git config --global user.email "email@example.com" # Set global email
git config --list          # List all configuration
git config user.name       # Get specific configuration value
```

## 🏷️ Versioning

This project uses [Semantic Versioning](https://semver.org/):
- **Major**: Breaking changes
- **Minor**: New features (backward compatible)
- **Patch**: Bug fixes (backward compatible)

## 🚀 CI/CD Pipeline

The project includes GitHub Actions workflow for:
- Automated testing
- Code quality checks
- Build verification
- Deployment readiness

## 🧪 Testing

To test the web application:
1. Open `index.html` in a web browser
2. Test interactive features (Add Task, Clear Tasks)
3. Verify responsive design on different screen sizes
4. Check browser console for developer messages

## 📚 Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created as part of DevOps learning project.

---

**Happy DevOps Learning! 🚀**
