function extractFile(filePath){
    let file = filePath.split('\\');
    let fileInfo = file[file.length - 1];
    let splittedFiles = fileInfo.split('.');
    let extension = splittedFiles.pop();
    let fileName = splittedFiles;
    console.log(`File name: ${fileName.join('.')}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.bax.pptx')