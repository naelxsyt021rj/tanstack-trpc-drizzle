# tanstack-trpc-drizzle 🚀

![GitHub Repo stars](https://img.shields.io/github/stars/naelxsyt021rj/tanstack-trpc-drizzle?style=social) ![GitHub forks](https://img.shields.io/github/forks/naelxsyt021rj/tanstack-trpc-drizzle?style=social) ![GitHub issues](https://img.shields.io/github/issues/naelxsyt021rj/tanstack-trpc-drizzle) ![GitHub license](https://img.shields.io/github/license/naelxsyt021rj/tanstack-trpc-drizzle)

Welcome to the **tanstack-trpc-drizzle** repository! This is a starter template designed to help you kickstart your project using the TanStack ecosystem. This template integrates several powerful tools and libraries, including Bun, Biome, Lefthook, Tailwind, React Query, tRPC, Drizzle, and Better Auth. 

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Introduction

The **tanstack-trpc-drizzle** template aims to provide a solid foundation for building modern web applications. It combines the latest technologies to streamline your development process. Whether you're creating a simple application or a complex system, this template can serve as a strong starting point.

## Features

- **Fast Setup**: Quickly get started with a pre-configured environment.
- **Modern Stack**: Utilizes the latest tools and libraries.
- **Responsive Design**: Built with Tailwind CSS for a modern, responsive UI.
- **Type Safety**: Leverage TypeScript for better development experience.
- **Robust Data Handling**: Integrates React Query and tRPC for efficient data fetching.
- **Database Management**: Use Drizzle ORM for seamless database interactions.
- **Better Auth**: Implements secure authentication methods.

## Technologies Used

This project utilizes the following technologies:

- **Bun**: A modern JavaScript runtime that is fast and efficient.
- **Biome**: A code formatter and linter that enhances code quality.
- **Lefthook**: A Git hook manager that ensures code quality before commits.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React**: A JavaScript library for building user interfaces.
- **React Query**: A data-fetching library for React applications.
- **tRPC**: A TypeScript RPC framework that simplifies API development.
- **Drizzle ORM**: A type-safe ORM for interacting with databases.
- **Better Auth**: A library for implementing secure authentication.

## Getting Started

To get started with the **tanstack-trpc-drizzle** template, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/naelxsyt021rj/tanstack-trpc-drizzle.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd tanstack-trpc-drizzle
   ```

3. **Install Dependencies**:
   ```bash
   bun install
   ```

4. **Run the Development Server**:
   ```bash
   bun run dev
   ```

5. **Open Your Browser**: Visit `http://localhost:3000` to see your application in action.

You can also download and execute the latest release from [here](https://github.com/naelxsyt021rj/tanstack-trpc-drizzle/releases).

## Project Structure

Here’s a brief overview of the project structure:

```
tanstack-trpc-drizzle/
├── public/              # Static assets
├── src/                 # Source files
│   ├── components/      # React components
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Page components
│   ├── styles/          # Tailwind CSS styles
│   └── utils/           # Utility functions
├── .env                 # Environment variables
├── bun.lockb            # Bun lock file
└── package.json         # Project metadata and dependencies
```

## Usage

Once your development server is running, you can start modifying the source files. The project is set up to automatically reload on changes, so you can see your updates in real-time.

### Adding New Components

To add a new component, create a new file in the `src/components/` directory. For example:

```jsx
// src/components/MyComponent.jsx
import React from 'react';

const MyComponent = () => {
  return <div>Hello, World!</div>;
};

export default MyComponent;
```

### Fetching Data

Use React Query and tRPC to fetch data. Here's a simple example:

```jsx
import { useQuery } from 'react-query';
import { trpc } from '../utils/trpc';

const DataFetchingComponent = () => {
  const { data, isLoading } = useQuery('getData', () => trpc.getData());

  if (isLoading) return <div>Loading...</div>;

  return <div>Data: {JSON.stringify(data)}</div>;
};
```

### Styling with Tailwind CSS

Tailwind CSS makes it easy to style your components. You can apply utility classes directly in your JSX:

```jsx
const StyledComponent = () => {
  return <div className="bg-blue-500 text-white p-4">Styled Component</div>;
};
```

## Contributing

We welcome contributions to this project! If you have suggestions or improvements, please feel free to open an issue or submit a pull request. 

### Steps to Contribute

1. **Fork the Repository**: Click the "Fork" button at the top right of the page.
2. **Create a Branch**: 
   ```bash
   git checkout -b feature/my-feature
   ```
3. **Make Your Changes**: Implement your feature or fix.
4. **Commit Your Changes**: 
   ```bash
   git commit -m "Add my feature"
   ```
5. **Push to Your Fork**: 
   ```bash
   git push origin feature/my-feature
   ```
6. **Open a Pull Request**: Go to the original repository and click "New Pull Request".

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links

For more information and to keep up with the latest updates, check the [Releases](https://github.com/naelxsyt021rj/tanstack-trpc-drizzle/releases) section.

Feel free to explore the repository and contribute to the project. Your feedback and contributions are greatly appreciated!