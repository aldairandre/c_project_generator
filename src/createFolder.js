const downloadRepository = require("./downloadRepository");

const vscode = require("vscode");
const {projectFolder,typeOS,locale} = require("./const")


const createProjectFolder = async () => {
  const input = await vscode.window.showInputBox("Qual é o nome deseja dar ao seu projecto?");
  const terminal = vscode.window.createTerminal()
  terminal.name = input
  

  if(typeOS === "linux"){
    
    if(locale === "en") {
      terminal.sendText(`mkdir /home/$USER/Documents/${projectFolder.en}`)
    }else if(locale === "pt"){
      terminal.sendText(`mkdir /home/$USER/Documentos/${projectFolder.pt}`)
    }
    
  }else if(typeOS === "win32") {
    if(locale === "en") {
      terminal.sendText(`mkdir C:\'$USER\'Documents\'${projectFolder.en}`)
    }else if(locale === "pt"){
      terminal.sendText(`mkdir C:\'%USERNAME%\'Documents\'${projectFolder.pt}`)
    }
  } else {
    vscode.window.showInformationMessage(typeOS)
  }

  downloadRepository()


  vscode.window.showInformationMessage(typeOS)
};

module.exports = createProjectFolder;
