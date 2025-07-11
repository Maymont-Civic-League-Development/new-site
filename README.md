# MCL Website

A modern website for the Maymont Civic League built with Astro and managed through Decap CMS.

## Features

- Modern, responsive design with nature-inspired theme
- Content management through Decap CMS
- Event management
- Meeting notes archive
- Contact forms
- Blog-style content

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Start the Decap CMS local backend:
   ```bash
   npm run cms
   ```

3. Access the CMS at: `http://localhost:8081/admin/`

### Content Management

The site uses Decap CMS for content management. You can:

- **Events**: Create and manage upcoming events
- **Meeting Notes**: Archive meeting notes and discussions
- **Pages**: Edit static page content

#### CMS Collections

1. **Events** (`src/content/events/`)
   - Title, date, time, location
   - Category and description
   - Featured images and registration URLs

2. **Meeting Notes** (`src/content/meeting-notes/`)
   - Meeting title and date
   - Attendees list
   - Key discussion points
   - Action items and next steps

3. **Pages** (`src/content/pages/`)
   - Home page content
   - About page content
   - Static page management

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## File Structure

```
src/
├── content/           # CMS content
│   ├── events/       # Event files
│   ├── meeting-notes/ # Meeting notes
│   └── pages/        # Static pages
├── layouts/          # Astro layouts
└── pages/           # Astro pages

public/
├── admin/           # Decap CMS files
│   ├── config.yml   # CMS configuration
│   └── index.html   # CMS admin page
└── images/          # Static images
    └── uploads/     # CMS uploaded images
```

## CMS Configuration

The Decap CMS is configured in `public/admin/config.yml` with:

- Git-based backend for version control
- Local backend for development
- Media uploads to `public/images/uploads/`
- Structured content collections

## Deployment

The site can be deployed to any static hosting service (Netlify, Vercel, etc.). For production use with Decap CMS:

1. Set up Git Gateway authentication
2. Configure environment variables
3. Deploy the built site

## Contributing

1. Make changes through the CMS or edit files directly
2. Commit changes to version control
3. Deploy updates

## License

This project is licensed under the MIT License.

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
