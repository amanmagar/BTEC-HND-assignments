const utils = {
    useRouters: async(app, dir) => {
    const path = require('path');
    const fs = require("fs");
    const { promisify } = require("util");
    const readDir = promisify(fs.readdir);
    const dirPath = path.join(dir);
    const routers = await readDir(dirPath);
    Promise.all(
     routers.map(router => {
      const routes = require(path.join(dirPath, router));
      app.use(routes);
    })
  );
 }
}

module.exports = utils;