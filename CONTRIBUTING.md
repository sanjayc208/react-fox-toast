# Contributing to React Fox Toast

Thank you for considering contributing to **React Fox Toast**! 🚀 Your contributions help improve this library for everyone. Please follow these guidelines to ensure a smooth collaboration.

## 📌 How to Contribute

### 1️⃣ Reporting Bugs 🐛

If you find a bug, please open an issue with:

- A clear **title** describing the issue.
- Steps to **reproduce** the problem.
- Expected vs. actual behavior.
- Screenshots or code snippets (if applicable).

### 2️⃣ Suggesting Features 💡

Have an idea for a new feature? Create a **Feature Request** issue and include or **Create a new Discussion** :

- A brief **description** of the feature.
- Why it would be useful.
- Any possible implementation ideas.

### 3️⃣ Submitting a Pull Request (PR) 🔥

To contribute code, follow these steps:

1. **Fork** this repository.
2. **Clone** your forked repo:
   ```sh
   git clone https://github.com/sanjayc208/react-fox-toast.git
   ```
3. **Create a new branch** for your changes:
   ```sh
   git checkout -b feature/my-new-feature
   ```
4. **Make your changes** and commit them using [Conventional Commits](https://www.conventionalcommits.org/):
   ```sh
   git commit -m "feat: add custom duration option"
   ```
5. **Push your branch** and create a pull request:
   ```sh
   git push origin feature/my-new-feature
   ```
6. Open a **Pull Request** from your fork to the `master` branch.

## 🛠 Development Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run the development server:
   ```sh
   npm run dev
   ```

### 🔍 Testing Locally

If you want to test changes locally within the website, modify the dependency in `website/package.json`:

```json
"react-fox-toast": "file:../"
```

Then, install dependencies:

```sh
npm install
```

To run the website locally:

```sh
cd website/
npm install
npm run dev
```

This will start the website, allowing you to verify if everything is working as expected.

## ✅ Code Guidelines

- Follow **ESLint** and **Prettier** rules.
- Write **clear, modular, and well-documented** code.
- Ensure **Doing some manual testing in webstie** for any changes.

## 🤝 Community Guidelines

- Be respectful and kind to others.
- Keep discussions constructive and professional.
- Help others if you can!

---

**🚀 Let’s build an awesome toast notification library together!**
