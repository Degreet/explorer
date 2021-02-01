import goBack from './goBack.mjs';
import renderFileList from './renderFileList.mjs';
import readDir from './readDir.js';
import setFileListListener from './setFileListListener.mjs';

export default function setOnload() {
	window.addEventListener('load', async () => {
		const dir = await readDir(lastDir);
		renderFileList(dir);
		setFileListListener();

		goBackBtn.onclick = goBack;

		onkeydown = (e) => {
			if (e.altKey && e.key == 'ArrowLeft') {
				goBack();
			}
		};
	});
}
