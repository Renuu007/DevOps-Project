# DevOps Project

## Objective
Manage a DevOps project using Git best practices.

## Tools
- Git
- GitHub

## Branching Strategy
- main: production-ready code
- dev: integration branch
- feature/*: short-lived feature branches from dev

## Workflow
1. Branch from dev into feature/<name>
2. Commit small, focused changes
3. Open PR: feature/* -> dev
4. After validation, open PR: dev -> main
5. Tag releases on main

## Contributing
- Use conventional commits (e.g., feat:, fix:, docs:, chore:)
- Write clear PR descriptions and link issues

## Documentation
See docs/tasks.md for task logs.

## License
MIT
