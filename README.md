# react + vite + tailwndcss + bun

## プロジェクトの作成

```bash
# プロジェクト作成
bun create vite@latest any_project_name

# 対話での選択は次の二つ
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC

# プロジェクトに最低限のパッケージをインストール
cd any_project_name
bun install
bun update --latest
```

---

## React のパッケージを入れておく

```bash
bun add react-router-dom
```

---

## tailwind の導入と設定

css については tailwindcss を選択。

```bash
# tailwdind をインストール
bun add -D tailwindcss autoprefixer
# 設定ファイルを作成
bunx tailwindcss init
```

### vite.config.js

下記のように postcss 用の設定を追加する。

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// ↓ 【追加A】下記2行。
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ↓ 【追加B】css 設定オブジェクト
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
})
```

### tailwind.config.js

content 下の配列に、tailwindcss に参照させるファイル群を指定。

ここに指定したファイル上に文字列として登場した tailwind 用 class名が、ビルド時に css ファイルへ出力されることになる。

逆に、ここに指定していないファイルに tailwind 用 class 名をどれだけ記述しようとも、一切、反映されない。

```js
export default {
  // 【修正】: content 配列に要素を追加。
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // (以下略)
}
```

### src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### src/App.jsx

```jsx
export default function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
```

---

## 開発サーバーを起動

```bash
bun run dev
```

---


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
