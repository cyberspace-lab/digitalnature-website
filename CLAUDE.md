# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Digital Nature research project website built with Astro and Vue.js. The site focuses on research about the impact of digital forests on psychological well-being, exploring virtual reality as a potential solution for forest bathing experiences.

## Architecture

### Dual Structure
The project has a dual structure with both root-level and `astro-nature/` subdirectory containing similar codebases:
- **Root level**: Contains legacy Gatsby.js files and shared assets
- **`astro-nature/`**: Current active Astro.js project directory

**Work primarily in the `astro-nature/` directory for active development.**

### Technology Stack
- **Framework**: Astro 5.x with Vue 3.x integration
- **Styling**: SCSS with custom variables and utility classes
- **Content Management**: Astro Content Collections with Zod schema validation
- **Build Tool**: Vite
- **Type Safety**: TypeScript with strict configuration

### Key Directories
- `astro-nature/src/pages/`: Route-based pages (index, about, blog, publications, team)
- `astro-nature/src/components/`: Vue and Astro components
- `astro-nature/src/content/`: Content collections (pages, posts, publications, team)
- `astro-nature/src/layouts/`: Layout components (MainLayout.astro)
- `astro-nature/src/styles/`: SCSS stylesheets with theme variables
- `astro-nature/src/assets/`: Images, icons, and static assets

## Development Commands

All commands should be run from the `astro-nature/` directory:

```bash
cd astro-nature

# Development server
npm run dev
# or
npm run start

# Production build
npm run build

# Preview production build
npm run preview

# Astro CLI commands
npm run astro
```

**Note**: The project is now functional and builds successfully. The main React dependencies have been removed and replaced with Vue/HTML equivalents.

## Content Collections Schema

The project uses three main content collections defined in `content.config.ts`:

1. **Publications**: Research papers with title, date, authors, and optional link
2. **Pages**: General content pages with title and optional featured image  
3. **Team**: Team member profiles with description and optional link/image

All collections use the `'content'` type and Zod schema validation.

## Component Architecture

### Vue Components
- `Header.vue`: Main site header with navigation
- `Navigation.vue`: Site navigation menu
- `HomeHero.vue`: Hero section with grid layout
- `BlogCard.vue`, `PublicationCard.vue`, `TeamMemberCard.vue`: Content display cards
- `AboutContent.vue`: About page content component

### Astro Components
- `MainLayout.astro`: Base layout with meta tags, header, and footer
- `Footer.astro`: Site footer
- `Welcome.astro`: Welcome section component

## Styling System

### SCSS Architecture
- `global.scss`: Main stylesheet imports
- `_theme-variables.scss`: CSS custom properties for colors and spacing
- `_defaults.scss`: Base element styles and resets
- `_utility.scss`: Utility classes
- `lib/`: Third-party and specialized stylesheets (Prism, CSS Grid utilities)

### Style Conventions
- Components use scoped `<style lang="scss">` blocks
- CSS custom properties for theming (`var(--primary-color)`, `var(--background)`)
- Responsive design with mobile-first approach
- Grid-based layouts for content sections

## Asset Management

### Image Handling
- Use Astro's `Image` component from `astro:assets` for optimized images
- Featured images stored in `src/assets/` directory
- Decorative SVG ornaments in `src/assets/ornaments/`
- Team photos and logos in respective subdirectories

### Asset Paths
- Use relative imports for assets in components: `import image from '../assets/image.png'`
- Reference static assets in templates with `/src/assets/` paths

## Key Features

### Content-Driven Design
- Markdown-based content with frontmatter
- Automatic page generation from content collections
- Schema validation ensures content consistency

### Research Focus
- Publications showcase with academic paper listings
- Team member profiles with research backgrounds
- Project goals and methodology presentation
- Forest bathing and VR research content

## Development Guidelines

### File Organization
- Keep Vue components in `src/components/`
- Use Astro components for layout and static content
- Store content in appropriate collection directories
- Maintain consistent naming conventions (kebab-case for files)

### Styling Best Practices
- Leverage existing theme variables for consistency
- Use component-scoped styles when possible
- Follow mobile-first responsive design patterns
- Maintain semantic HTML structure

### Content Management
- Follow established schema patterns for new content
- Use descriptive filenames for content files
- Include required frontmatter fields
- Optimize images before adding to assets