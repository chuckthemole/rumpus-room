# Rumpus-Room / roulettech-take-home

## Written by: Charles Thomas

## Application Features and Use
- **User Interactions:** Users can create, view, like, and delete comments.

## Tech Stack
- **Database:** MySQL
- **Backend:** Django
- **Frontend:** React, Bulma
- **Deployment:** AWS EC2, AWS RDS (MySQL), AWS S3

## Using Webpack for Bundling and Compiling the Frontend

Rumpus-Room leverages Webpack to streamline the development and deployment of our frontend. Webpack takes all of our JavaScript, CSS, and other resources, and bundles them into optimized files for efficient loading and execution in the browser.

### Key Features:
- **Module Bundling**: Webpack automatically identifies and bundles modules, ensuring dependencies are managed and code is efficiently organized.
- **Asset Management**: Handles assets like images and fonts with ease, optimizing them for better performance.
- **Hot Module Replacement**: Enables a smoother development experience by updating modules in the browser without a full refresh.
- **Code Splitting**: Dynamically loads parts of the application to improve load times and performance.

### Setup and Usage:
1. **Installation**: Ensure Webpack and its dependencies are installed via npm:
    ```bash
    npm install --save-dev webpack webpack-cli webpack-dev-server
    ```

2. **Configuration**: Webpack configuration is managed through the `webpack.config.js` file located in `config/dev/`, `config/beta/`, and `config/live/` respectively. This file defines entry points, output paths, loaders, plugins, and more.

3. **Running Webpack**:
    - **Development Mode**: For development, use the following command to start the server:
      ```bash
      npm run start
      ```
    - **Production Build**: For production, create a bundle using:
      ```bash
      npm run build
      ```

## Future Work
