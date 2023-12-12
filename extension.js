const { downloadRepository } = require("./src/downloadRepository");
const createFolder  = require("./src/createFolder");

const vscode = require("vscode");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**{
			"type": "npm",
			"script": "watch",
			"problemMatcher": "$ts-webpack-watch",
			"isBackground": true,
			"presentation": {
				"reveal": "never",
				"group": "watchers"
			},
			"group": {
				"kind": "build",
				"isDefault": true
			}
		}
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {

  let generatePtVersion = vscode.commands.registerCommand(
    "c-project-generator.criarProjectoC",
    createFolder
  );

	let generateEnVersion = vscode.commands.registerCommand(
    "c-project-generator.createCProject",
    createFolder
  );
	

  context.subscriptions.push(generatePtVersion,generateEnVersion);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
