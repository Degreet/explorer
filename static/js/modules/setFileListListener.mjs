import readDir from './readDir.js';
import renderFileList from './renderFileList.mjs';

export default function setFileListListener() {
	fileList.onclick = async (e) => {
		if (e.target.tagName == 'LI') {
			if (e.target.dataset.type == 'folder') {
				lastOpenedFolders.unshift(e.target.dataset.path);
				lastDir += lastOpenedFolders[0];

				const dir = await readDir(lastDir);
				renderFileList(dir);
			} else {
				const path = lastDir + e.target.dataset.path;
				eel.open_file(path);
			}
		}
	};
}
