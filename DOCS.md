# Documentation Setup

This project uses TypeDoc to automatically generate documentation from TypeScript code and comments.

## Available Scripts

- **`npm run docs`** - Generate documentation (output goes to `./docs` folder)
- **`npm run docs:watch`** - Generate documentation and watch for changes
- **`npm run docs:serve`** - Generate docs and serve them locally on port 3001

## Usage

### Generate Documentation
```bash
npm run docs
```

### Serve Documentation Locally
```bash
npm run docs:serve
```
This will generate the docs and automatically open them in your browser at `http://localhost:3001`.

### Watch Mode (Development)
```bash
npm run docs:watch
```
This will regenerate documentation automatically when you modify your TypeScript files.

## Writing Documentation Comments

TypeDoc uses JSDoc-style comments to generate documentation. Here are some examples:

```typescript
/**
 * A React component that displays user information
 * @param props - The component properties
 * @param props.name - The user's name
 * @param props.email - The user's email address
 * @returns JSX element representing the user info
 * 
 * @example
 * ```tsx
 * <UserInfo name="John Doe" email="john@example.com" />
 * ```
 */
export function UserInfo({ name, email }: UserInfoProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

/**
 * Properties for the UserInfo component
 */
interface UserInfoProps {
  /** The user's display name */
  name: string;
  /** The user's email address */
  email: string;
}
```

## Configuration

The TypeDoc configuration is stored in `typedoc.json`. Key settings include:

- **Entry Points**: `./src` (scans all TypeScript files in src)
- **Output Directory**: `./docs`
- **Theme**: Default TypeDoc theme
- **Exclusions**: Test files, build files, and node_modules are excluded

## Deployment

The generated documentation is in the `./docs` folder and can be:
- Served statically from any web server
- Deployed to GitHub Pages, Netlify, or similar services
- Integrated into CI/CD pipelines for automatic updates
