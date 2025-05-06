<p align="center">
  <a href="https://app.netlify.com/sites/skansen/deploys">
    <img src="https://api.netlify.com/api/v1/badges/8cfb0876-28da-414f-93e6-9c66de1f0aed/deploy-status" alt="Netlify Status" />
  </a>
  <a href="https://github.com/skxnsen/portfolio/actions/workflows/ci.yml">
    <img src="https://github.com/skxnsen/portfolio/actions/workflows/ci.yml/badge.svg" alt="Playwright and Netlify Deployment" />
  </a>
  <a href="https://github.com/skxnsen/portfolio/actions/workflows/osv-scanner.yml">
    <img src="https://github.com/skxnsen/portfolio/actions/workflows/osv-scanner.yml/badge.svg" alt="OSV-Scanner" />
  </a>
</p>


# Angular App

A modern Angular application portfolio built with [Angular CLI](https://angular.io/cli).

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/skxnsen/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
yarn install
```

### Run the dev server

```bash
# Start the development server
ng serve
```

Then open [http://localhost:4200](http://localhost:4200) in your browser.

## 🧪 Testing

```bash
# Playwright CLI
npx playwright test tests # Headless mode by default
npx playwright test tests --ui # UI mode
```

## 📁 Project Core Structure

```
angular-app/
├── src/
│   ├── app/            # Application logic
│   ├── assets/         # Static files
│   └── environments/   # Environment configs
├── angular.json        # CLI config
├── package.json        # Project metadata & scripts
└── README.md
```

## ✅ TODO

- [X] Responsive navigation component for mobile viewports
- [X] Setup environment variables handling  
- [ ] Implement lazy loading for feature modules  
- [ ] Improve unit test coverage
- [X] Improve UI test coverage with Playwright NodeJS
- [X] Add CI/CD GitHub Actions pipeline
- [ ] Dockerize the application  
- [ ] Add documentation for components & services
- [ ] Add day mode UI with toggle switch to header component
- [ ] Accessability labels and tags
- [ ] SEO optimization


## 📄 License

MIT
