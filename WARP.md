# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

CodeFlare AI Journey is a modern React-based blog and portfolio website created by Rayan to document his coding journey. It's built with React 18, TypeScript, Vite, and uses shadcn/ui components with Tailwind CSS for styling.

**Key Purpose**: Personal coding blog showcasing learning experiences, failures, and growth as a developer, with a focus on helping beginner developers.

## Development Commands

### Essential Commands
```powershell
# Start development server (hot reload on localhost:5173)
npm run dev
# or
bun run dev

# Production build (outputs to dist/)
npm run build
# or  
bun run build

# Lint code with ESLint
npm run lint

# Preview production build locally
npm run preview

# Generate TypeDoc documentation
npm run docs

# Serve documentation locally on port 3001
npm run docs:serve
```

### Single Test/Component Development
Since this project doesn't have automated tests, use the development server with hot reload:
```powershell
# Focus on specific component - navigate to relevant page in browser
npm run dev
# Then navigate to specific routes like /blog, /journey, /flop-zone
```

### Content Management
```powershell
# Blog posts are in src/content/blog/*.md
# Add new blog post by creating markdown file with frontmatter:
# ---
# title: "Post Title"
# date: "YYYY-MM-DD" 
# category: "Category"
# readTime: "X min read"
# featured: boolean
# slug: "url-slug"
# ---
```

## Architecture and Code Structure

### High-Level Architecture
This is a **Single Page Application (SPA)** with the following key architectural patterns:

**Frontend Stack**: React 18 + TypeScript + Vite for build tooling
**State Management**: React Context (Theme) + TanStack Query for server state
**Routing**: React Router with file-based page components
**Styling**: Tailwind CSS with shadcn/ui component library + CSS custom properties for theming
**Content**: Static markdown files with frontmatter, processed at build time
**Animation**: Framer Motion for complex animations and transitions

### Component Architecture
The project follows a **hierarchical component structure**:

```
src/
├── components/
│   ├── layout/        # Layout components (Navigation, Footer, Layout wrapper)
│   ├── home/          # Homepage-specific sections (Hero, Tips, Featured)
│   ├── ui/            # Reusable shadcn/ui components + custom animated components
│   └── common/        # Shared utilities (ScrollToTop, Newsletter)
├── pages/             # Route components (Index, Blog, Journey, etc.)
├── hooks/             # Custom React hooks (useTheme, useMobile, useToast)
├── lib/               # Utilities (blog content processing, general utils)
└── content/blog/      # Markdown blog posts with YAML frontmatter
```

### Key Architectural Patterns

**1. Layout Pattern**: All pages wrap content in `<Layout>` component which provides consistent Navigation, Footer, and ScrollToTop functionality.

**2. Theme System**: Comprehensive dark/light/system theme using React Context + CSS custom properties. The theme state persists in localStorage with key `codeflare-theme`.

**3. Content Management**: Static markdown files are processed at build time using Vite's `import.meta.glob()` and front-matter parsing. Blog posts are loaded eagerly and cached.

**4. Component Composition**: Heavy use of composition over inheritance. Components accept `children` and use `className` props for customization.

**5. Type Safety**: Strict TypeScript with proper interfaces for all props, especially `BlogPost` interface for content structure.

### Router Structure
```typescript
// Routes defined in App.tsx
/ → Index (Homepage)
/journey → Journey (Learning story)
/blog → Blog (Post listing) 
/posts/:slug → BlogPost (Individual post)
/flop-zone → FlopZone (Failed projects)
/subscribe → Subscribe (Newsletter)
/* → NotFound (404 handler)
```

### State Management Strategy
- **Global Theme State**: React Context via `useTheme()` hook
- **Component State**: useState for local UI state
- **Server State**: TanStack Query (though currently unused, setup for future API calls)
- **Toast Notifications**: Custom hook `useToast()` with shadcn/ui integration

### Build and Development Architecture

**Vite Configuration**: 
- Uses Node.js polyfills for browser compatibility (`vite-plugin-node-polyfills`)
- Path alias `@/` points to `src/` directory
- Optimizes dependencies including React Router and Buffer polyfill

**TypeScript Setup**: 
- Strict mode enabled with separate configs for app (`tsconfig.app.json`) and Node (`tsconfig.node.json`)
- ESLint enforces code quality with React hooks rules

**Styling Architecture**:
- CSS custom properties in `index.css` define theme variables
- Tailwind extends with custom colors, animations, and utility classes
- Component-specific styles use Tailwind classes with `cn()` utility for conditional styling

### Content Processing Pipeline
1. Markdown files in `src/content/blog/` contain YAML frontmatter
2. `lib/blog.ts` uses `import.meta.glob()` to load all `.md` files at build time
3. Front-matter library extracts metadata, Marked.js converts markdown to HTML
4. Posts are sorted by date and cached for routing

## Key Development Guidelines

### Component Development
- Use functional components with TypeScript interfaces for props
- Follow the pattern: `interface ComponentProps { ... }` then `const Component = ({ props }: ComponentProps) => { ... }`
- Export default at bottom of file
- Use `@/` path aliases for imports from src/

### Styling Guidelines
- Use Tailwind CSS classes, leverage `cn()` utility for conditional classes
- Custom animations are defined in `tailwind.config.ts` and can be used as `animate-{name}`
- Theme-aware styling uses CSS custom properties like `hsl(var(--primary))`
- Custom colors include brand-specific colors like `tip-green`, `flop-red`

### State and Props
- Use TypeScript interfaces, avoid `any` types
- Prefer composition over prop drilling - use Context for global state
- Component props should be destructured in function parameters
- Use optional props with default values where appropriate

### Content Management
- Blog posts require proper frontmatter with all fields: `title`, `date`, `category`, `readTime`, `featured`, `slug`
- Markdown content supports full syntax including code blocks
- Featured posts appear in homepage FeaturedContent section

### Performance Considerations
- Components use lazy loading where appropriate (though not currently implemented)
- Images should be optimized and placed in `public/` directory
- Framer Motion animations are optimized for 60fps

## Project-Specific Context

### Brand Identity
- **CodeFlare by Rayan**: Personal brand focused on authentic learning experiences  
- **Color Scheme**: Primary blues, accent corals, tip-green for success, flop-red for failures
- **Tone**: Honest, beginner-friendly, encouraging failure as learning

### Unique Features
- **Tip of the Day**: Rotating coding tips with local storage persistence
- **Flop Zone**: Honest showcase of failed projects with lessons learned
- **Journey Tracking**: Personal coding story from first steps to AI development
- **Custom Animations**: Uiverse.io-inspired button effects and transitions

### Content Strategy
- Blog posts focus on real experiences, practical tips, honest failures
- All content aimed at beginner developers 
- Categories include: Learning, Tutorial, Experience, Failure
- ReadTime estimation included in all posts

This codebase represents a modern, well-architected React application with strong TypeScript practices, comprehensive theming, and a focus on developer experience and maintainability.
