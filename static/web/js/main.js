import './modules/readDir.js';
import './modules/renderFileList.mjs';
import setup from './modules/onload.mjs';

(async () => {
	window.username = await eel.get_username()();
	window.lastOpenedFolders = [];
	window.lastDir = `C:/Users/${username}/Desktop`;
	setup();
})();
