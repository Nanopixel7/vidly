const os = require("os");

function log(req, res, next) {
  console.log(`User '${os.hostname}' entered "${req.url}" page`);
  next();
}

module.exports = log;