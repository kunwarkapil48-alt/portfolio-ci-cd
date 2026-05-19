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

- [x] GitHub Actions failed build run

![Failed workflow run list](./screenshots/actions-failed-run.png)

![Failed workflow run detail](./screenshots/actions-failed-detail.png)

![Failed workflow build log](./screenshots/actions-failed-log.png)

- [x] GitHub Actions successful build run

![Successful workflow run list](./screenshots/actions-success-run.png)

![Successful workflow run detail](./screenshots/actions-success-detail.png)

![Successful workflow build log](./screenshots/actions-success-log.png)

## Part 4: Hosting on Vercel

Recommended Vercel settings:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Deployment result:

- Production alias: https://portfolio-ci-cd-pi.vercel.app
- Deployment URL: https://portfolio-ci-c6tdx270z-kunwarkapil48-3294s-projects.vercel.app

Required screenshots for this part:

- [x] Vercel import/setup page

![Vercel import setup](./screenshots/vercel-import-setup.png)

- [x] Vercel deployment/dashboard page

![Vercel deployment dashboard](./screenshots/vercel-deployment-dashboard.png)

- [x] Domain URL page

![Vercel domain page](./screenshots/vercel-domain-page.png)

- [x] Live website home page

![Vercel live website](./screenshots/vercel-live-site.png)

## Notes

This submission file now includes GitHub setup, portfolio, CI failure and success runs, and Vercel hosting evidence with a live production URL.