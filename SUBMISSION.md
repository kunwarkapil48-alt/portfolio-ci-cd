# Week 10 CI/CD Tutorial Submission

## Part 1: GitHub Repository Setup

Project folder created: `portfolio-ci-cd`

Commands used locally:

```powershell
npm create vite@latest portfolio-ci-cd -- --template react
cd portfolio-ci-cd
npm install
```

Required screenshots for this part:

- [ ] GitHub repository created
- [ ] VS Code terminal showing initial git commands

## Part 2: Create Portfolio

Required sections completed in the React app:

- Home
- About
- Skills
- Projects
- Contact

Local app screenshot:

![Portfolio home](./screenshots/portfolio-home.png)

## Part 3: GitHub Actions CI Workflow

Workflow file created at `.github/workflows/ci.yml`.

Expected behavior:

- On every push to `main`, GitHub Actions installs dependencies and runs `npm run build`.
- On pull requests to `main`, the same build validation runs.

Required screenshots for this part:

- [ ] Workflow YAML file open in VS Code
- [ ] GitHub Actions failed build run
- [ ] GitHub Actions successful build run
- [ ] Build logs screenshot

## Part 4: Hosting on Vercel

Recommended Vercel settings:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Required screenshots for this part:

- [ ] Vercel import/setup page
- [ ] Vercel deployment/dashboard page
- [ ] Domain URL page
- [ ] Live website home page

## Notes

This submission file is prepared and linked to the local screenshots I can generate from this machine. GitHub and Vercel screenshots require access to your GitHub and Vercel accounts.