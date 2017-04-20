var browserSync = require("browser-sync").create();

browserSync.init({
    port: process.argv[2] || 3000,
    server: "./src",
    files: ["./src/app.js", "./src/app.css", "./src/index.html"]
});

browserSync.reload("*.html");
