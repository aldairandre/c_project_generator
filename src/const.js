const os = require("os");
const intl = require("intl");

const urlRepo = "https://github.com/aldairandre/c_template_for_vscode.git";

const nameRepo = "c_template_for_vscode";

const typeOS = os.platform();

const locale = intl.DateTimeFormat().resolvedOptions().locale;

module.exports = {
  urlRepo,
  nameRepo,
  typeOS,
  locale
};
