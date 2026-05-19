# Week 10 CI/CD Tutorial Submission

## Part 1: GitHub Repository Setup

Project folder created: `portfolio-ci-cd`

Commands used locally:

```powershell
npm create vite@latest portfolio-ci-cd -- --template react
cd portfolio-ci-cd
npm install
```

Repository setup proof:

![Local git commit](./screenshots/git-commit.png)

![GitHub repository created](./screenshots/github-repo-created.png)

![GitHub repository after push](./screenshots/github-repo-after-push.png)

Current status:

- [x] GitHub repository created in the browser
- [x] Local git repository initialized and committed
- [x] Remote URL configured to the GitHub repository
- [x] CLI push completed to `origin/main`

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

Local workflow and build evidence:

![Workflow file](./screenshots/ci-workflow-file.png)

![Build log](./screenshots/build-log.png)

Pending external screenshots:

- [ ] GitHub Actions failed build run
- [ ] GitHub Actions successful build run

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

This submission file includes every screenshot I could generate locally from this environment. The remaining GitHub Actions and Vercel screenshots depend on getting the project contents onto GitHub and then deploying from that repository.