import setFileListListener from './setFileListListener.mjs';

export default function renderFileList(dir) {
	fileList.innerHTML = dir.map(buildFileForList).join('');
	setFileListListener();
}

function buildFileForList(data) {
	return `
		<li data-path="${data.path}" data-type="${data.type}">${data.path}</li>
	`;
}
