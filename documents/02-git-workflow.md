# 🔄 Git Workflow Documentation

## 📋 Overview

This document details the Git workflow, branching strategy, and version control practices implemented in the DevOps Project. It covers the complete development lifecycle from feature development to production deployment.

## 🌿 Branching Strategy

### Branch Structure
```
main (production)
├── dev (development)
│   ├── feature/enhancement
│   ├── feature/docs-update
│   └── feature/[feature-name]
└── hotfix/[hotfix-name] (if needed)
```

### Branch Purposes

#### 🚀 Main Branch
- **Purpose:** Production-ready code
- **Protection:** No direct commits allowed
- **Updates:** Only through merge requests from dev branch
- **Deployment:** Automatically deploys to production

#### 🔧 Dev Branch
- **Purpose:** Integration and testing
- **Protection:** No direct commits from feature branches
- **Updates:** Through merge requests from feature branches
- **Testing:** Automated CI/CD pipeline runs here

#### 🌱 Feature Branches
- **Purpose:** Individual feature development
- **Naming:** `feature/[feature-name]` (e.g., `feature/enhancement`)
- **Lifecycle:** Created → Developed → Merged → Deleted
- **Isolation:** Each feature is developed independently

## 🔄 Git Workflow Process

### 1. Feature Development Workflow

```bash
# Start from dev branch
git checkout dev
git pull origin dev

# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature description"

# Push feature branch
git push origin feature/new-feature

# Create Pull Request to dev branch
# After approval and merge, delete feature branch
```

### 2. Development Integration Workflow

```bash
# Switch to dev branch
git checkout dev
git pull origin dev

# Merge feature branch
git merge feature/new-feature

# Push to remote dev
git push origin dev

# Delete local feature branch
git branch -d feature/new-feature
```

### 3. Production Release Workflow

```bash
# Switch to main branch
git checkout main
git pull origin main

# Merge dev branch
git merge dev

# Create version tag
git tag -a v1.2.0 -m "Release version 1.2.0"

# Push main and tags
git push origin main
git push origin --tags
```

## 📝 Commit Message Convention

### Conventional Commits Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types
- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation changes
- **style:** Code style changes (formatting, etc.)
- **refactor:** Code refactoring
- **test:** Adding or updating tests
- **chore:** Maintenance tasks

### Examples
```bash
git commit -m "feat: add version history display"
git commit -m "fix: resolve merge conflict in script.js"
git commit -m "docs: update README with new features"
git commit -m "style: improve button hover effects"
git commit -m "refactor: restructure JavaScript class methods"
```

## 🔀 Merge Strategies

### Merge Types

#### 1. Fast-Forward Merge
- **When:** No divergent changes
- **Result:** Linear history
- **Command:** `git merge feature/branch`

#### 2. Three-Way Merge
- **When:** Divergent changes exist
- **Result:** Merge commit created
- **Command:** `git merge feature/branch`

#### 3. Squash Merge
- **When:** Want to combine all commits into one
- **Result:** Single commit with all changes
- **Command:** `git merge --squash feature/branch`

### Merge Conflict Resolution

#### Common Conflict Scenarios
1. **File Modified in Both Branches**
2. **File Deleted in One Branch, Modified in Another**
3. **File Added in Both Branches with Different Content**

#### Resolution Process
```bash
# Check conflict status
git status

# Open conflicted files and resolve manually
# Look for conflict markers: <<<<<<<, =======, >>>>>>>

# After resolution, add resolved files
git add .

# Complete the merge
git commit -m "merge: resolve conflicts in feature integration"
```

## 🏷️ Version Tagging

### Semantic Versioning
```
v<major>.<minor>.<patch>
```

- **Major:** Breaking changes
- **Minor:** New features (backward compatible)
- **Patch:** Bug fixes (backward compatible)

### Tag Creation
```bash
# Annotated tag
git tag -a v1.2.0 -m "Release version 1.2.0"

# Lightweight tag
git tag v1.2.0

# Push tags to remote
git push origin --tags
```

### Tag Management
```bash
# List all tags
git tag -l

# Show tag details
git show v1.2.0

# Delete local tag
git tag -d v1.2.0

# Delete remote tag
git push origin --delete v1.2.0
```

## 🚫 Git Best Practices

### Do's ✅
- Use descriptive branch names
- Write clear commit messages
- Pull latest changes before creating branches
- Test code before committing
- Use conventional commit format
- Tag releases with semantic versions

### Don'ts ❌
- Commit directly to main/dev branches
- Use vague commit messages
- Leave feature branches open indefinitely
- Force push to shared branches
- Ignore merge conflicts
- Commit incomplete features

## 🔧 Git Configuration

### Essential Configurations
```bash
# Set user identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default branch
git config --global init.defaultBranch main

# Set merge tool
git config --global merge.tool vscode

# Set editor
git config --global core.editor "code --wait"
```

### Aliases for Common Commits
```bash
# Add to .gitconfig
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = !gitk
```

## 📊 Workflow Metrics

### Current Project Status
- **Total Commits:** Multiple semantic commits
- **Branches:** 3 active branches (main, dev, feature)
- **Tags:** 1 release tag (v1.2.0)
- **Merge Conflicts:** Successfully resolved
- **Pull Requests:** Ready for implementation

### Workflow Efficiency
- **Feature Development:** Isolated and parallel
- **Integration:** Automated through CI/CD
- **Deployment:** Automated to GitHub Pages
- **Rollback:** Available through Git history

## 🚀 Advanced Workflow Features

### Git Hooks
- **Pre-commit:** Code formatting and linting
- **Pre-push:** Running tests before push
- **Post-merge:** Automated dependency updates

### Branch Protection Rules
- **Main Branch:** Require pull request reviews
- **Dev Branch:** Require status checks to pass
- **Feature Branches:** No restrictions

### Automated Workflows
- **CI/CD Pipeline:** Automated testing and deployment
- **Code Quality:** Automated code review tools
- **Security Scanning:** Automated vulnerability detection

## 📚 Related Documentation

- [CI/CD Pipeline Documentation](./03-cicd-pipeline.md)
- [Development Guidelines](./05-development-guidelines.md)
- [Main Project README](../README.md)

---

**Last Updated:** Current session  
**Document Version:** 1.0.0  
**Next Review:** After implementing advanced Git features
