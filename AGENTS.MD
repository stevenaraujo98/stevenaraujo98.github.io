# AGENTS.md

## Project Overview

This is a personal website for Steven Araujo. It is a static site built with Astro and Tailwind CSS. It has a blog, a store, and a CV page.

## Environment

<!-- - Node.js version: 20.x
- npm version: 10.x
- Astro version: 2.x
- Tailwind CSS version: 3.x -->

## Project Strucutre

``` bash
├── src/
│   ├── components/
│   │   ├── cs/
│   │   │   ├── TimeLine
│   │   ├── BaseHead.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── HorizontalCard.jsx
│   │   └── SideBar.jsx
│   ├── content/
│   │   ├── blog/
│   │   │   ├── post1.md
│   │   │   ├── post2.md
│   │   │   └── post3.md
│   │   ├── store/
│   │   │   ├── item1.md
│   │   │   ├── item2.md
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │   └── PostLayout.astro
│   └── pages/
│   │   ├── blog/
│   │   │   ├── [...page].astro
│   │   │   ├── [slug].astro
│   │   └── cv.astro
│   │   └── index.astro
│   │   └── projects.astro
│   │   └── rss.xml.js
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   └── social-image.png
│   └── sprofile.jpg
│   └── social_img.webp
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
└── tsconfig.json
```

## Instructions

ALways, not matter what, use camelCase for variable names, function names, and file names.

## Repository expectations

- Run `npm install` to install dependencies
- Run `npm run dev` to start the development server
- Run `npm run build` to build the project
- Run `npm run lint` to lint the project
- Run `npm run test` to test the project
