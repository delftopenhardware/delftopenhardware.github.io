const sidebarArray = require("hardocs/src/buildSidebar");

// configure these modules if you
module.exports = {
  title: "Delft Open Hardware website",
  //description : "use for meta descriptitrueon",
  dest: "public",
  base: "/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  extend: "@vuepress/theme-default",
  config: md => {
    md.options.linkify = sidebarArray;
  },
  themeConfig: {
    logo: "/logo.png",
    sidebar: sidebarArray,
    // if your docs are in a different repo from your main project:
    docsRepo: "https://gitlab.com/go-commons/delftopenhardware/delftoh",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "develop",
    // defaults to false, set to true to enable
    editLinks: true,
   
    editLinkText: "Help us improve this page!"
  }
};

//check for sidebar
console.log(sidebarArray);
