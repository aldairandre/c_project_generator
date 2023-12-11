const vscode = require("vscode");
const { nameRepo, urlRepo,projectFolder,locale,typeOS } = require("./const");

const downloadRepository = () => {
  const terminal = vscode.window.createTerminal();

  terminal.name = nameRepo;

  if (typeOS === "linux") {
    if (locale === "en") {
      terminal.sendText(`git clone -b main ${urlRepo} /home/$USER/Documents/${projectFolder.en}`);
    } else if (locale === "pt") {
      terminal.sendText(`git clone -b main ${urlRepo} /home/$USER/Documentos/${projectFolder.pt}`);
    }
  } else if (typeOS === "win32") {
    if (locale === "en") {
      terminal.sendText(`git clone -b main ${urlRepo} C:\'$USER\'Documents\'${projectFolder.en}`);
    } else if (locale === "pt") {
      terminal.sendText(`git clone -b main ${urlRepo} C:\'%USERNAME%\'Documents\'${projectFolder.pt}`);
    }
  } else {
    vscode.window.showInformationMessage(typeOS);
  }

};

module.exports = downloadRepository;
