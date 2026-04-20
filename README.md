# NightCipher

A desktop encryption app built with Tauri. The frontend communicates with a local Node.js server that handles the cipher logic.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Rust](https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white)
![Tauri](https://img.shields.io/badge/Tauri-24C8D8?style=flat-square&logo=tauri&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Desktop shell | Tauri 2 (Rust) |
| Frontend | HTML, CSS, JavaScript |
| Local server | Node.js + Express |
| Database | SQLite (via PocketBase config) |

---

## Getting Started

### Prerequisites

- Node.js
- Rust
- C++ build tools

### Install dependencies

```bash
cd NightCipher
npm install
cd server && npm install && cd ..
```

### Run in development

```bash
npm run tauri dev
```

---

## Project context

Personal project — exploring encryption concepts through a desktop application.

**Author:** Simone Rossi
