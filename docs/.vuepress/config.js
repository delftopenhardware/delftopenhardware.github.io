const sidebarArray = require("hardocs/src/buildSidebar");



// configure these modules if you
module.exports = {
    title: "Name your project",
    //description : "use for meta descriptitrueon",
    dest: "public",
    base: "/delftoh/",
    config: (md) => {
        md.options.linkify = sidebarArray;
    },
    themeConfig: {
        sidebar: sidebarArray
    }
};

//check for sidebar
console.log(sidebarArray);