<h1 align="center">Task Manager</h1>

<p align="center">
    A community-driven, open-source task management application.
</p>

<!-- ABOUT THE PROJECT -->

## About Task Manager

**Task Manager** is a community-driven, fully open-source task management application designed to help users efficiently organize and manage their tasks.

It is **100% MIT-licensed**, with no proprietary "Enterprise Edition" features. It is designed for individuals and self-hosters who want full control over their task management without commercial dependencies.

### What Does Task Manager Offer?

- **Unlimited Tasks** — Add as many tasks as you need.
- **Edit Tasks** — Easily edit and update your tasks.
- **Dashboard** — Get a comprehensive overview of your tasks from a centralized dashboard.
- **Detailed Task View** — Select a task to view and manage its details.

### Live Link

[Task Manager](https://anjal-vonnue.github.io/Phase1-Week4/day-5/)

### Built With

- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)

## TypeScript Features Used

- **Path Aliases** — Used path aliases to simplify and organize module imports.
- **Type-Only Imports** — Used `import type` for importing TypeScript types.
- **Type Annotations** — Added types to functions and variables for better type safety.
- **Discriminated Unions** — Used discriminated unions to model related types safely.
- **Interfaces and Type Aliases** — Used interfaces and type aliases to define and structure data types.
- **Generics** — Used generics to create reusable and type-safe components.

## Folder Structure

```
day-5/
├── coverage/
├── css/
│   └── style.css
├── dist/
├── js/
│   ├── components/
│   │   ├── button.ts
│   │   ├── card.ts
│   │   └── modal.ts
│   │
│   ├── pages/
│   │   ├── detail.ts
│   │   ├── error.ts
│   │   ├── home.test.ts
│   │   ├── home.ts
│   │   ├── list.test.ts
│   │   ├── list.ts
│   │   └── settings.ts
│   │
│   ├── router/
│   │   ├── router.test.ts
│   │   └── router.ts
│   │
│   ├── store/
│   │   ├── reducer.ts
│   │   ├── store.test.ts
│   │   ├── store.ts
│   ├── test/
│   │   ├── apiClient.test.ts
│   │   ├── ApiClient.ts
│   │   ├── queue.test.ts
│   │   └── Queue.ts
│   ├── types/
│   │   └── taskTypes.ts
│   └── main.ts
│
├── node_modules/
├── index.html
├── MIGRATION.md
├── package-lock.json
├── package.json
├── RESOURCE.md
├── tsconfig.json
├── vitest.config.ts
├── .gitignore
└── README.md
```

<!-- GETTING STARTED -->

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

Make sure you have the following installed before running the project:

- **Node.js** (Version >= 18.x)
- **TypeScript compiler (`tsc`)**
- **`serve` package** — Used to serve the project locally.

## Development

### Setup

Follow these steps to set up the project locally.

1. **Clone the repository**

   ```sh
   git clone git@github.com:anjal-vonnue/Phase1-Week5.git
   ```

   > If you are on Windows, run the following command in Git Bash with admin privileges:
   > `git clone -c core.symlinks=true https://github.com/anjal-vonnue/Phase1-Week5.git`

2. Navigate to the project directory

   ```sh
   cd day-5
   ```

3. Install the dependencies

   ```sh
   npm install
   ```

4. Start the project locally

   ```sh
   serve -s .
   ```

5. Open the application
   Open `http://localhost:3000` in your browser.

## Testing

The project uses Vitest for testing. After installing all the dependencies, you can run the following commands:

```sh
# Run the test suite
npm run test

# Generate and view the test coverage report
npm run coverage
```

## How to Type Check

Use the following commands to check your TypeScript code for type errors:

```sh
# Run a one-time type check without generating JavaScript output files
npx tsc --noEmit

# Run TypeScript in watch mode to continuously check for errors as you save changes
npx tsc --noEmit --watch
```
