# Business-Consultancy

A front-end website for a business consultancy, built with React. It presents the consultancy's services, collaborations, colleges, events, blogs and contact information.

Live site: https://slv-webtech.github.io/Business-Consultancy/

## Features

- Components for Home, About Us, Services, Collaborations, Colleges, Events, Blogs and statistics (numbers) sections
- Terms and Privacy Policy content
- Contact form that submits via a `fetch` POST request to an external form-handling endpoint
- Styled with Tailwind CSS utility classes and Material UI components

## Tech Stack

- React (Create React App / react-scripts)
- Tailwind CSS
- Material UI (`@mui/material`) with Emotion and styled-components
- Headless UI, Heroicons, Font Awesome, animate.css
- Carousels: react-slick, slick-carousel, react-slideshow-image
- Hosting and deployment: GitHub Pages. A GitHub Actions workflow (`.github/workflows/ci-deploy.yml`) builds every push and pull request with `CI=true` (lint warnings fail the build) and, on a push to `master`, publishes `build/` to the `gh-pages` branch that Pages serves; `npm run deploy` still does the same by hand. Tests are not part of CI yet: the only test is the default Create React App one and it currently fails to import `App.js`.

This is a client-side application: there is no backend or server code in this repository.

## Getting Started

1. Clone the repository: `git clone https://github.com/Slv-WebTech/Business-Consultancy.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start` (opens http://localhost:3000)

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the app in development mode |
| `npm run build` | Create a production build in the `build` folder |
| `npm test` | Run the Create React App test runner |
| `npm run deploy` | Build and publish the `build` folder to the `gh-pages` branch (GitHub Pages) |

## Project Structure

```
public/              index.html, manifest.json, Images/
src/
  index.js           Application entry point
  App.js             Main page composition and contact form
  Home.js
  consultancy/       AboutUs, Blogs, Collaborations, Colleges, Events,
                     Footer, Home, Navbar, Number, Services, Terms, privacy
tailwind.config.js   Tailwind CSS configuration
```
