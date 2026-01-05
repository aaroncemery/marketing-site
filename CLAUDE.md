# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Turborepo monorepo with multiple applications and packages. Use these commands from the project root:

```bash
# Install dependencies
pnpm install

# Development (starts all apps in watch mode)
pnpm dev

# Build all packages and apps
pnpm build

# Lint all projects
pnpm lint

# Type checking
pnpm check-types

# Format code
pnpm format
```

### Sanity Studio Specific Commands

For the Sanity studio (`apps/studio`):

```bash
# Generate TypeScript types after schema changes
cd apps/studio
pnpm typegen

# Deploy studio
pnpm deploy
```

### Single App Development

To work on a specific app:

```bash
# Web app only
cd apps/web && pnpm dev

# Studio only
cd apps/studio && pnpm dev
```

## Architecture Overview

This is a **Turborepo monorepo** with the following structure:

### Applications (`apps/`)

- **`web/`** - Next.js 15 frontend with React 19, Tailwind CSS 4, and Sanity integration
- **`studio/`** - Sanity Studio CMS with personalization plugin and custom schema
- **`views-studio/`** - Additional Sanity studio instance
- **`sanity-functions/`** - Sanity serverless functions
- **`sanity-apps/personalization-app/`** - Custom Sanity personalization application

### Packages (`packages/`)

- **`@repo/ui`** - Shared React component library
- **`@repo/eslint-config`** - Shared ESLint configuration
- **`@repo/typescript-config`** - Shared TypeScript configuration

## Code Conventions

### File Naming

- **MUST use kebab-case** for all file names (e.g., `user-profile.tsx`, not `userProfile.tsx`)
- Use `.tsx` for React components, `.ts` for utilities
- All file names must be lowercase with hyphens

### Frontend (apps/web)

- Prefer `grid` over `flex` unless working with simple two-element layouts
- Use semantic HTML elements
- Use `SanityImage` component for Sanity-sourced images when available
- Use `Buttons.tsx` resolver for button components unless specified otherwise

### Sanity Studio (apps/studio)

- Always use `defineField`, `defineType`, and `defineArrayMember` from Sanity
- Include appropriate icons using lucide-react or @sanity/icons
- Always include `description`, `name`, `title`, and `type` for fields
- Organize schema files in `/schemaTypes/` with subdirectories: `blocks/`, `definitions/`, `documents/`
- After schema changes, run: `pnpm typegen`

### Common Sanity Field Templates

Use these standard field definitions:

```typescript
// Eyebrow
defineField({
  name: "eyebrow",
  title: "Eyebrow",
  description: "The smaller text that sits above the title to provide context",
  type: "string",
});

// Title with heading level toggle
defineField({
  name: "isHeadingOne",
  title: "Is it a <h1>?",
  type: "boolean",
  description: "By default the title is a <h2> tag. Toggle for <h1>",
  initialValue: false,
});

// Image with alt text
defineField({
  name: "image",
  title: "Image",
  type: "image",
  fields: [
    defineField({
      name: "alt",
      type: "string",
      title: "Alt Text",
      description: "Important for accessibility and SEO",
    }),
  ],
});
```

### GROQ Queries

- Import `defineQuery` and `groq` from `next-sanity`
- Use camelCase with Query suffix (e.g., `getAllBlogPostsQuery`)
- Define reusable fragments with underscore prefix (e.g., `_richText`)
- Always use explicit type filtering (`_type == "x"`)

## Internationalization

When specifically working on internationalization, replace:

- `left/right` → `start/end`
- `ml/mr` → `ms/me`
- `pl/pr` → `ps/pe`
- `text-left/text-right` → `text-start/text-end`

## Key Dependencies

- **Next.js 15** with React 19 and Turbopack
- **Sanity** with visual editing and personalization
- **Tailwind CSS 4**
- **TypeScript** throughout
- **Turborepo** for monorepo management

## Git Hooks & Quality

- Husky configured for pre-commit hooks
- Lint-staged runs prettier and eslint on commit
- Conventional commits enforced with commitlint
