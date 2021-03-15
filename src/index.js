import Index from './Index.svelte';
const posthtml = require('posthtml');
const removeAttributes = require('posthtml-remove-attributes');
const fs = require('fs')

async function main() {
  const { head, html, css } = Index.render();

  const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  ${head}

  <style>
    ${css.code}
  </style>
</head>
<body>
  ${html}
</body>
</html>
`;

  const cleanedHtml = (await posthtml([
    removeAttributes([  // The only non-array argument is also possible
      'data-svelte',
    ])
  ]).process(fullHtml)).html;
  fs.writeFileSync("public/index.html", cleanedHtml);
}

main();
