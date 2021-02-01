import goBack from './goBack.mjs';
import renderFileList from './renderFileList.mjs';
import readDir from './readDir.js';

export default function setOnload() {
	window.addEventListener('load', async () => {
		const dir = await readDir(lastDir);
		renderFileList(dir);

		goBackBtn.onclick = goBack;

		onkeydown = (e) => {
			if (e.altKey && e.key == 'ArrowLeft') {
				goBack();
			}
		};
	});
}
