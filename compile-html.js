const Markdown = require('markdown-to-html').GithubMarkdown;
const fs = require('fs');
const path = require('path');

const targetDir = 'public';

const options = {
    stylesheet: '../github-markdown.css',
    userName: 'BlueKraken'
};

const writeHtmlFromMarkDown = (fileName) => {
    let md = new Markdown();
    md.bufmax = 2048;

    console.log(`Transforming ${fileName}`);
    
    md.render(fileName, options, (err) => {
        console.log(`Rendering ${fileName}`);
        if (err) {
            console.error('>>>' + err);
            process.exit();
        }
        
        const targetFileName = fileName.replace('md', 'html');
        const targetPath = path.join(targetDir, targetFileName);
        
        // Agrega clase necesaria para aplicar estilos
        md.html = md.html.replace('<body>', '<body class="markdown-body">');
        
        fs.writeFile(targetPath, md.html , (error) => {
            if (error) {
                console.error(`Error writing ${fileName}`, error);
                process.exit();
            }
            console.log(`Saved ${fileName}!\n`);
        });
    });
}

const dirName = 'Typescript';

fs.readdir(dirName, {}, (error, files) => {
    console.log(`Reading directory ${dirName}`);
    if (error) {
        console.error(`Error at reading directory ${dirName}`, error);
        process.exit();
    }

    files.forEach(fileName => {
        const fullName = path.join(dirName, fileName);
        writeHtmlFromMarkDown(fullName)
    });
});
