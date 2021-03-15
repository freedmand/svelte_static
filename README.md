# Svelte Static

A template for building static content with [Svelte](https://svelte.dev/). Replace `TODO`s to fill out the template.

## Commands

* `npm install`: install packages
* `npm run dev`: spin up a hot-reloading dev server to preview the content
* `npm run build`: build the production bundle in `public/`
* `npm run compress-images`: run a script that combs through image files in `images/` and optimizes them, outputting the compressed assets in `public/assets/images`. The image compressions settings can be tweaked in `resize_images.js` (defaults to height 500). The script will output file names along with resized dimensions to the terminal

## Development

The site content lives in `src/Index.svelte`. You can import other Svelte modules and use CSS or SASS. The content is rendered, minified, and written to a static file in `src/index.js`.
