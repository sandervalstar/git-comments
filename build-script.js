const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files =[
    // './dist/inline.bundle.js',
    './dist/git-comments/runtime.js',
    './dist/git-comments/polyfills.js',
    './dist/git-comments/main.js'
  ]

  await fs.ensureDir('elements')

  await concat(files, 'elements/git-comments.js')
  console.info('Angular Elements created successfully!')

})()
