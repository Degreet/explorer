import renderAddressbar from './renderAddressbar.mjs';

export default function renderFileList(dir) {
	fileList.innerHTML = dir.map(buildFileForList).join('');
	renderAddressbar();
}

function buildFileForList(data) {
	return `
		<li data-path="${data.path}" data-type="${data.type}">
			${data.path.replace(/\\/g, '')}
		</li>
	`;
}
