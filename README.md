<h1 align="center">
  🎛️ DevDash 
</h1>

<p align="center">
  Developer dashboard focused on learning React appling best practices.
</p>

## 🚀 Run the app

- `npm install`: Install dependencies
- `cp .env.example .env`: Create the environment variables file based on the example template
- `vim .env`: Specify your GitHub Personal access token ([how to get it](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) -> [your tokens](https://github.com/settings/tokens) -> Enable `Repo.public_repo`)
- `vim src/devdash_config.ts`: Set the repository URLs you want to show on your *DevDash_*
- `npm start`: Run in dev mode on [localhost:3000](http://localhost:3000)
- `npm run build`: Generate production build

## ✅ Testing

### Unit tests

`npm run test`: Run unit tests with Jest and React Testing Library

### End-to-end tests

- `npm start`: Run in dev mode on [localhost:3000](http://localhost:3000)
- Run end-to-end tests with Cypress choosing one of the following options:
  - `npm run cy:open`: Open Cypress in dev mode
  - `npm run cy:run`: Execute Cypress in CLI

## 🔦 Linting

- `npm run lint`: Run linter
- `npm run lint:fix`: Fix lint issues
