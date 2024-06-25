# Angular News App

This is a simple news application built with Angular, using the NewsAPI to fetch the latest news headlines. The application allows users to browse top headlines, filter news by category, search for news articles, and paginate through results.

## Features

- Display top headlines from NewsAPI.
- Filter news articles by category.
- Search for specific news articles.
- Pagination to navigate through different pages of news articles.
- Responsive and attractive UI using Tailwind CSS.

## Prerequisites

- Node.js and npm installed on your machine.
- Angular CLI installed globally via npm.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/manthanank/news-app-angular.git
    cd news-app-angular
    ```

2. **Install the dependencies**:

    ```bash
    npm install
    ```

3. **Set up the environment**:

    - Create a file named `environment.ts` in the `src/environments` directory.
    - Add your NewsAPI key to the environment file:

    ```typescript
    // src/environments/environment.ts
    export const environment = {
      production: false,
      newsApiKey: 'YOUR_NEWSAPI_KEY'
    };
    ```

4. **Start the development server**:

    ```bash
    ng serve
    ```

5. **Open the application**:

    Open your browser and navigate to `http://localhost:4200`.

## Using Tailwind CSS

To include Tailwind CSS in your Angular project, follow these steps:

1. **Install Tailwind CSS**:

    ```bash
    npm install tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```

2. **Configure Tailwind**:

    Update `tailwind.config.js`:

    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{html,ts}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

3. **Update Angular styles**:

    Add the following imports to `src/styles.css`:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    Ensure `src/styles.css` is included in the `styles` array in `angular.json`:

    ```json
    "styles": [
      "src/styles.css"
    ]
    ```

## Running Tests

Run unit tests via Angular CLI:

```bash
ng test
```

## Deployment

To build the project for production, run:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

---
