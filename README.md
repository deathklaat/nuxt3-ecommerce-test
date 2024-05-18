# Nuxt3 E-commerce Demo Project (Work in Progress)
[Based on Free Community Figma](https://www.figma.com/file/eYT5Y0wnod1VX8D2g4ZVIx/Ecommerce-Web-UI-Kit-(Community)?type=design&node-id=92-229&mode=design)

# TODO
### Design
- [ ] Add screenshots
- [ ] Checkout page
- [ ] Payment result page: success / failure
- [ ] Auth page
- [ ] Profile pages (auth check middleware)
- [ ] Admin pages ? TBD

### Architecture
- [ ] Back-end storage: AppWrite or Express ?
- [ ] Auth AppWrite / Express + JWT ?
- [ ] Types refactoring depending on chosen backend implementation
- [ ] Search refactoring

### Functionality
- [ ] Localization support
- [ ] Move all texts to locales config
- [ ] Add mobile and tablet views for all pages (home page is already done)
- [ ] SEO / Structured data markup for demo

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
