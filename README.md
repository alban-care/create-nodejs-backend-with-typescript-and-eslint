# Créér un backend Node.js avec TypeScript et ESLint

## Prérequis

- Node.js
- npm ou yarn ou pnpm

## Étape 1 : Initialisation du projet

1. Créer un dossier pour le projet
2. Ouvrir le terminal et se placer dans le dossier
3. Initialiser le nouveau projet Node.js avec `npm init` ou `yarn init` ou `pnpm init` et suivez les instructions pour définir les détails du projet.

```json
// exemple de sortie du fichier package.json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "server.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

## Étape 2 : Installation des dépendances

Installez les dépendances nécessaires en exécutant une des commandes suivantes :

```bash
npm install express typescript ts-node eslint @types/express --save-dev
```

ou

```bash
yarn add express typescript ts-node eslint @types/express --dev
```

ou

```bash
pnpm add express typescript ts-node eslint @types/express --save-dev
```

> Les dépendences TypeScript pour ESlint seront installées automatiquement à la configuration du fichier `.eslintrc.json`

## Étape 3 : Configuration de TypeScript

1. Exécutez la commande `npx tsc --init` pour générer un fichier de configuration `tsconfig.json` pour TypeScript.
2. Ouvrez le fichier `tsconfig.json` et ajustez les options selon vos besoins. Par exemple, vous pouvez spécifier le dossier de sortie pour les fichiers transpilés, le niveau de compatibilité ECMAScript, etc.

```json
// exemple de sortie du fichier tsconfig.json
{
  "compilerOptions": {
    "target": "ES6" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "module": "commonjs" /* Specify what module code is generated. */,
    "rootDir": "./src" /* Specify the root folder within your source files. */,
    "outDir": "./dist" /* Specify an output folder for all emitted files. */,
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
}
```

## Étape 4 : Configuration d'ESLint

1. Exécutez la commande `npx eslint --init` pour générer un fichier de configuration `.eslintrc.json` pour ESLint.
2. Répondez aux questions pour configurer ESLint selon vos préférences.

```json
// exemple de sortie du fichier .eslintrc.json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {}
}
```

> A la fin de la configuration d'ESLint, les dépendences TypeScript pour ESlint seront installées automatiquement.

## Étape 5 : Création du serveur

1. Créer un fichier `server.ts` dans le dossier `src` et ajoutez le code suivant :

```typescript
import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/api", async (_req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: `Welcome to the API! Endpoints available at http://localhost:${port}/api/`,
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
```

## Étape 6 : Finalisation du fichier package.json avec l'ajout de Scripts

Ouvrez le fichier `package.json` et ajoutez les scripts suivants dans la section "scripts" :

```json
  "scripts": {
    "build": "tsc -p .",
    "watch": "node --watch dist/server.js",
    "dev": "npm run build & npm run watch",
    "start": "node build/server.js",
    "lint": "eslint --ext .ts .",
    "lint:fix": "eslint --ext .ts . --fix"
  },
```

## Étape 7 : Lancement du serveur

1. Pour lancer le serveur en mode développement, exécutez la commande `npm run dev` ou `yarn dev` ou `pnpm dev`.
   Le server Express démarrera sur le port 3000 et sera automatiquement rechargé à chaque modification du code source.
2. Pour lancer le serveur en mode production, exécutez la commande `npm start` ou `yarn start` ou `pnpm start`.
   Le server Express démarrera sur le port 3000.
3. Pour lancer le linter ESLint, exécutez la commande `npm run lint` ou `yarn lint` ou `pnpm lint`.
   Cela vérifiera le code TypeScript conformément aux règles définies dans votre configuration ESLint et affichera les erreurs et les avertissements.
4. Pour lancer le linter ESLint et corriger automatiquement les erreurs, exécutez la commande `npm run lint:fix` ou `yarn lint:fix` ou `pnpm lint:fix`.
   Cela vérifiera le code TypeScript conformément aux règles définies dans votre configuration ESLint et affichera les erreurs et les avertissements. Les erreurs qui peuvent être corrigées automatiquement seront corrigées.

Enjoy !
