const sidebarArray = require("hardocs/src/buildSidebar");



// configure these modules if you
module.exports = {
    title: "Delft Open Hardware website",
    //description : "use for meta descriptitrueon",
    dest: "public",
    base: "/",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
      ],
    extend: '@vuepress/theme-default',
    config: (md) => {
        md.options.linkify = sidebarArray;
    },
    themeConfig: {
        logo:'/logo.png',
        sidebar: sidebarArray
    }
};

//check for sidebar
console.log(sidebarArray);
