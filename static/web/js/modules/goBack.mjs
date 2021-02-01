import readDir from './readDir.js';
import renderFileList from './renderFileList.mjs';

export default async function goBack() {
	lastDir = lastDir.replace(lastOpenedFolders[0], '');
	lastOpenedFolders.shift();

	const dir = await readDir(lastDir);
	renderFileList(dir);
}
