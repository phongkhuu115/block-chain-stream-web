const chokidar = require('chokidar');
const watcher = chokidar.watch('../live');
const path = require("path");
const request = require('request');
watcher.on('add', (filepath) => {
  let ext = path.parse(filepath).ext;
  let name = path.parse(filepath).name;
  if (ext === '.m3u8' && name !== 'index') {
    request.post({
      url: 'https://nt208-g4.site/v1/api/previewUp',
      form: {
        user_id: name
      },
    })
  }
});