import './modules/readDir.js';
import './modules/renderFileList.mjs';
import setOnload from './modules/onload.mjs';

window.lastOpenedFolders = [];
window.lastDir = 'C:/';

setOnload();
