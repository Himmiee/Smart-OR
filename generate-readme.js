const fs = require("fs");
const path = require("path");

const ignoreDirs = ["node_modules", ".next", ".git", "dist", "out", "build"];

function getFolderTree(dir, indent = 0) {
  let tree = "";
  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach((item) => {
    if (ignoreDirs.includes(item.name)) return;

    const prefix = "│  ".repeat(indent) + "├── ";
    if (item.isDirectory()) {
      tree += `${prefix}${item.name}/\n`;
      tree += getFolderTree(path.join(dir, item.name), indent + 1);
    } else {
      tree += `${prefix}${item.name}\n`;
    }
  });

  return tree;
}

const projectName = "credicorp-web";
const version = "0.1.0";
const folderTree = getFolderTree(".", 0);

const readme = `\
<h1 align="center">Welcome to ${projectName} 👋</h1>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-${version}-blue.svg?cacheSeconds=2592000" />
</p>

> Credicorp – A modern web application built with Next.js, Tailwind CSS, shadcn/ui, and React Hook Form.

---

## ✨ Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 📁 Folder Structure

\`\`\`
${folderTree}
\`\`\`

---

## 🚀 Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Visit \`http://localhost:3000\` to view the app.

---

## 🧪 Useful Scripts

\`\`\`bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run lint      # Run ESLint
\`\`\`

---

`;

fs.writeFileSync("README.md", readme);
console.log("✅ README.md generated!");
