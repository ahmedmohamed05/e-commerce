# E-commerce Watch Store

A modern e-commerce application built with React, TypeScript, Vite, and Tailwind CSS. This application allows users to browse and filter watches by various criteria.

## Features

- Responsive design
- Product filtering by category, brand, price, and rating
- Shopping cart functionality
- Product details page
- Clean and modern UI with Tailwind CSS

## Technologies Used

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- React Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmedmohamed05/e-commerce.git
   ```

2. Navigate to the project directory:
   ```bash
   cd e-commerce
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Deployment

This application is deployed to GitHub Pages. To deploy your own version:

1. Update the `homepage` field in `package.json` to match your repository name:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

2. Install gh-pages if you haven't already:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add the following scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Project Structure

- `/src/components` - Reusable UI components
- `/src/context` - React context providers
- `/src/pages` - Page components
- `/src/types` - TypeScript type definitions
- `/src/utils` - Utility functions
- `/public` - Static assets

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
