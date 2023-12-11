const vscode = require('vscode');
const fs = require("fs");

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

	console.log('Congratulations, your extension "generator_c_project" is now active!');
	
	let disposable = vscode.commands.registerCommand('test.helloWorld', function () {

		vscode.window.showInformationMessage('Hello World from test!');
		
	});


	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
