# CodeFlare AI Journey - API Reference

## 📋 Table of Contents

1. [Component API](#component-api)
2. [Hooks API](#hooks-api)
3. [Utility Functions](#utility-functions)
4. [Type Definitions](#type-definitions)
5. [Configuration Files](#configuration-files)

---

## 🧩 Component API

### Layout Components

#### `Layout`
Main layout wrapper for all pages.

```typescript
interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element
```

**Props:**
- `children` - Content to be wrapped in the layout

**Usage:**
```tsx
<Layout>
  <YourPageContent />
</Layout>
```

#### `Navigation`
Main navigation component with responsive behavior.

```typescript
function Navigation(): JSX.Element
```

**Features:**
- Responsive mobile menu
- Active link highlighting
- Theme toggle integration
- Framer Motion animations

**Internal State:**
- `isOpen: boolean` - Mobile menu state

#### `Footer`
Site footer with links and information.

```typescript
function Footer(): JSX.Element
```

**Features:**
- Social media links
- Navigation links
- Newsletter signup integration

### Home Components

#### `Hero`
Landing page hero section.

```typescript
function Hero(): JSX.Element
```

**Features:**
- Animated text with stagger effects
- Call-to-action buttons
- Responsive typography
- Background effects

#### `FeaturedContent`
Showcases featured blog posts and resources.

```typescript
function FeaturedContent(): JSX.Element
```

**Features:**
- Card-based layout
- Hover animations
- External link integration
- Responsive grid

#### `TipOfTheDay`
Interactive daily tip component.

```typescript
function TipOfTheDay(): JSX.Element
```

**Internal State:**
- `currentTip: number` - Current tip index
- `isVisible: boolean` - Component visibility

**Features:**
- Randomized tip selection
- Local storage persistence
- Smooth transitions

#### `WhatYoullLearn`
Learning outcomes section.

```typescript
function WhatYoullLearn(): JSX.Element
```

**Features:**
- Icon-based feature list
- Responsive grid layout
- Hover effects

### UI Components (Custom)

#### `LiquidButton`
Animated button with liquid wave effect.

```typescript
interface LiquidButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'accent' | 'secondary';
}

function LiquidButton(props: LiquidButtonProps): JSX.Element
```

**Props:**
- `children` - Button content
- `className` - Additional CSS classes
- `onClick` - Click handler
- `variant` - Color variant

#### `GlowBorderButton`
Button with animated glowing border.

```typescript
interface GlowBorderButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function GlowBorderButton(props: GlowBorderButtonProps): JSX.Element
```

#### `PulseButton`
Button with pulsing shadow animation.

```typescript
interface PulseButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  color?: 'accent' | 'primary' | 'tip-green';
}

function PulseButton(props: PulseButtonProps): JSX.Element
```

#### `MorphButton`
Button with shape morphing animation.

```typescript
interface MorphButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function MorphButton(props: MorphButtonProps): JSX.Element
```

#### `ThemeToggle`
Theme switching component.

```typescript
function ThemeToggle(): JSX.Element
```

**Features:**
- Three-way toggle: light → dark → system
- Icon-based UI with tooltips
- LocalStorage integration

#### `ThemeDropdown`
Alternative dropdown theme selector.

```typescript
function ThemeDropdown(): JSX.Element
```

### Common Components

#### `ScrollToTop`
Floating scroll-to-top button.

```typescript
function ScrollToTop(): JSX.Element
```

**Internal State:**
- `isVisible: boolean` - Button visibility based on scroll

**Features:**
- Auto-hide/show on scroll
- Smooth scroll animation
- Accessibility compliant

---

## 🔧 Hooks API

### `useTheme`
Theme management hook.

```typescript
type Theme = 'dark' | 'light' | 'system'

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

function useTheme(): ThemeProviderState
```

**Returns:**
- `theme` - Current theme setting
- `setTheme` - Function to change theme

**Usage:**
```tsx
const { theme, setTheme } = useTheme();

// Get current theme
console.log(theme); // 'light' | 'dark' | 'system'

// Change theme
setTheme('dark');
```

**Provider:**
```typescript
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

function ThemeProvider(props: ThemeProviderProps): JSX.Element
```

### `useMobile`
Mobile device detection hook.

```typescript
function useMobile(): boolean
```

**Returns:**
- `boolean` - True if screen width < 768px

**Usage:**
```tsx
const isMobile = useMobile();

return (
  <div>
    {isMobile ? <MobileComponent /> : <DesktopComponent />}
  </div>
);
```

### `useToast`
Toast notification system hook.

```typescript
interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
}

function useToast(): {
  toast: (toast: Omit<Toast, 'id'>) => void;
  dismiss: (toastId?: string) => void;
  toasts: Toast[];
}
```

**Usage:**
```tsx
const { toast } = useToast();

// Success toast
toast({
  title: "Success!",
  description: "Your action was completed.",
});

// Error toast
toast({
  variant: "destructive",
  title: "Error!",
  description: "Something went wrong.",
});
```

---

## 🔨 Utility Functions

### `cn` (Class Names)
Utility for merging CSS classes with Tailwind.

```typescript
function cn(...inputs: ClassValue[]): string
```

**Usage:**
```tsx
const className = cn(
  'base-class',
  condition && 'conditional-class',
  { 'object-key': condition },
  variableClass
);

// Example
const buttonClass = cn(
  'px-4 py-2 rounded',
  variant === 'primary' && 'bg-blue-500',
  disabled && 'opacity-50'
);
```

### Blog Utilities

#### `getAllPosts`
Fetch all blog posts from markdown files.

```typescript
function getAllPosts(): Promise<BlogPost[]>
```

**Returns:**
- `Promise<BlogPost[]>` - Array of parsed blog posts

**Usage:**
```tsx
const posts = await getAllPosts();
```

#### `parseFrontmatter`
Parse frontmatter from markdown content (internal).

```typescript
function parseFrontmatter(
  raw: string, 
  filePath: string
): Promise<BlogPost>
```

---

## 📝 Type Definitions

### Core Types

#### `BlogPost`
Blog post data structure.

```typescript
interface BlogPost {
  slug: string;        // URL-friendly identifier
  title: string;       // Post title
  date: string;        // Publication date (YYYY-MM-DD)
  category: string;    // Post category
  readTime: string;    // Estimated reading time
  featured: boolean;   // Whether post is featured
  content: string;     // Rendered HTML content
}
```

#### `Theme`
Theme options.

```typescript
type Theme = 'dark' | 'light' | 'system'
```

#### `ButtonVariant`
Button color variants.

```typescript
type ButtonVariant = 'primary' | 'accent' | 'secondary'
```

### Component Props Types

#### `LayoutProps`
```typescript
interface LayoutProps {
  children: ReactNode;
}
```

#### `CustomButtonProps`
Base interface for custom buttons.

```typescript
interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
```

---

## ⚙️ Configuration Files

### `tailwind.config.ts`
Tailwind CSS configuration with custom theme.

```typescript
export default {
  // Content paths for Tailwind scanning
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  
  // Theme configuration
  theme: {
    extend: {
      colors: {
        // CSS custom property integration
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        // ... extensive color system
      },
      
      // Custom animations
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        // ...
      },
      
      // Custom keyframes
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        // ...
      }
    }
  }
}
```

### `vite.config.ts`
Vite configuration with plugins and optimizations.

```typescript
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      protocolImports: true,
    }),
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  optimizeDeps: {
    include: ['buffer', 'react-router-dom'],
  },
})
```

### `components.json`
shadcn/ui configuration.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### `tsconfig.json`
TypeScript configuration.

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

---

## 📚 Usage Examples

### Creating a New Page
```tsx
// src/pages/NewPage.tsx
import Layout from '@/components/layout/Layout';

const NewPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">New Page</h1>
        <p>Your content here...</p>
      </div>
    </Layout>
  );
};

export default NewPage;
```

### Adding a New Blog Post
```markdown
<!-- src/content/blog/new-post.md -->
---
title: "My New Blog Post"
date: "2025-01-11"
category: "Tutorial"
readTime: "5 min read"
featured: true
slug: "new-post"
---

# Your Blog Content

Write your blog post content here in Markdown...
```

### Using Custom Buttons
```tsx
import { LiquidButton, GlowBorderButton } from '@/components/ui/uiverse-buttons';

const MyComponent = () => {
  return (
    <div className="space-x-4">
      <LiquidButton 
        variant="primary"
        onClick={() => console.log('Liquid clicked!')}
      >
        Liquid Button
      </LiquidButton>
      
      <GlowBorderButton onClick={() => console.log('Glow clicked!')}>
        Glow Button
      </GlowBorderButton>
    </div>
  );
};
```

### Theme Integration
```tsx
import { useTheme } from '@/hooks/useTheme';

const ThemeAwareComponent = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className={theme === 'dark' ? 'text-white' : 'text-black'}>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>
        Switch to Dark
      </button>
    </div>
  );
};
```

---

## 🔧 Development Notes

### Adding New Components
1. Create component in appropriate directory (`src/components/`)
2. Export from main component file
3. Add prop types and documentation
4. Include in this API reference

### Adding New Utilities
1. Add to `src/lib/utils.ts` or create new utility file
2. Export function with proper TypeScript types
3. Add JSDoc comments for documentation

### Adding New Hooks
1. Create in `src/hooks/` directory
2. Follow naming convention `use[HookName].tsx`
3. Provide proper TypeScript interfaces
4. Document usage examples

---

*This API reference is maintained alongside the main documentation and should be updated when components or APIs change.*
