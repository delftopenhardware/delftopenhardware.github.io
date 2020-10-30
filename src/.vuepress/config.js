const fs = require('fs')
const path = require('path')
const { buildContents, buildSidebar } = require('metacon')

// let contents = require('./contents.data.json')
// contents = contents.contents
// console.log(contents)
// let modules = buildSidebar(contents, path.join( __dirname, '../'))
// console.log(modules)


let dirPath = path.join(__dirname, '../')
let contents = buildContents(dirPath, path.join(process.cwd(), '/src/'))
console.log("where the contents file is: " + path.join(process.cwd(), '/src/'))
console.log(contents)
let modules = buildSidebar(contents, path.join(process.cwd(), '/src/'))
console.log(modules)



// configure these modules if you
module.exports = {
  title: "Delft Open Hardware",
  //description : "use for meta descriptitrueon",
  description: "We are a community dedicated to using, replicating, testing, developing and teaching open hardware concepts in Delft. Join our community and monthly events ",
  dest: "public",
  base: "/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  extend: "@vuepress/theme-default",
  // config: md => {
  //   md.options.linkify = modules;
  // },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/content/' },
      { text: 'Blog', link: '/blog/' },
    ],
    logo: "/logo.png",
    sidebar: modules,
    // if your docs are in a different repo from your main project:
    docsRepo: "https://gitlab.com/go-commons/delftopenhardware/delftoh",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "develop",
    // defaults to false, set to true to enable
    editLinks: true,

    editLinkText: "Help us improve this page!"
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ],
    '@vuepress/pwa',
    'vuepress-plugin-reading-time',
  ],
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
};


