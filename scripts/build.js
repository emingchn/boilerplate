var sass = require('node-sass');

var task_name = process.argv[2],
    task_args = process.argv.slice(3);

var tasks = {
  'js': buildJS,
  'css': buildCSS,
  'html': buildHTML,
  'assets': buildAssets,
  'all': buildAll
};

function buildJS() {
  console.log('Building js...', arguments);
}

function buildCSS() {
  console.log('Building css...', arguments);
  sass.render({
    file: "src/styles/index.scss",
    includePaths: ["src"],
    outFile: "src/app.css"
  });
}

function buildHTML() {
  console.log('Building html...', arguments);
}

function buildAssets() {
  console.log('Building assets...', arguments);
}

function buildAll() {
  console.log('Building...', arguments);
}

return tasks[task_name].apply({}, task_args);