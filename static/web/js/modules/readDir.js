export default async function readDir(path) {
	return await eel.read_directory(path)();
}
