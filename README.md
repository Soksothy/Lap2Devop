# Lab 1: CI/CD Pipeline with Node.js and GitHub Actions

A simple Node.js Express application with automated testing, linting, code coverage, and continuous deployment.

## Features

- Express.js web server
- Automated testing with Mocha and Chai
- Code linting with ESLint
- Code coverage reporting with NYC
- GitHub Actions CI/CD pipeline
- Automated deployment to Render

## Prerequisites

- Node.js v16+
- Yarn package manager
- GitHub account

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/lastname-firstname-lab1.git
cd lastname-firstname-lab1

# Install dependencies
yarn install
```

## Running Locally

```bash
# Start the server
yarn start

# Run tests
yarn test

# Run tests with coverage
yarn test:coverage

# Lint code
yarn lint
```

Visit http://localhost:3000 to see the application.

## CI/CD Pipeline

The GitHub Actions workflow automatically:
1. Runs on push to main and pull requests
2. Tests on Node.js 16.x and 18.x
3. Lints code with ESLint
4. Runs tests with Mocha
5. Generates code coverage reports
6. Uploads coverage artifacts
7. Deploys to Render (on main branch only)

## Deployment Setup

### Render Deployment

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Configure the service:
   - **Build Command**: `yarn install`
   - **Start Command**: `yarn start`
4. Get your deploy hook URL from Render Dashboard
5. Add it to GitHub Secrets as `RENDER_DEPLOY_HOOK_URL`:
   - Go to Settings > Secrets and variables > Actions
   - Click "New repository secret"
   - Name: `RENDER_DEPLOY_HOOK_URL`
   - Value: Your Render deploy hook URL

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── test/
│   └── test.js             # Mocha tests
├── app.js                  # Express application
├── server.js               # Server entry point
├── eslint.config.js        # ESLint configuration
├── .nycrc                  # NYC coverage configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Code Coverage

Coverage reports are generated in the `coverage/` directory. Open `coverage/index.html` in a browser to view detailed coverage information.

## License

MIT
