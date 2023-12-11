const downloadRepository = require("./downloadRepository");

const vscode = require("vscode");
const {typeOS,locale} = require("./const")


const createProjectFolder = async () => {
  const input = await vscode.window.showInputBox("Qual é o nome deseja dar ao seu projecto?");
  const terminal = vscode.window.createTerminal()
  terminal.name = input
  

  if(typeOS === "linux"){
    
    if(locale === "en") {
      terminal.sendText(`mkdir /home/$USER/Documents/${input}`)
    }else if(locale === "pt"){
      terminal.sendText(`mkdir /home/$USER/Documentos/${input}`)
    }
    
  }else if(typeOS === "win32") {
    if(locale === "en") {
      terminal.sendText(`mkdir C:\'$USER\'Documents\'${input}`)
    }else if(locale === "pt"){
      terminal.sendText(`mkdir C:\'%USERNAME%\'Documents\'${input}`)
    }
  } else {
    vscode.window.showInformationMessage(typeOS)
  }

  downloadRepository(input)

};

module.exports = createProjectFolder;
