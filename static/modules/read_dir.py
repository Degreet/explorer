import pathlib
import os

def read_dir(currentDirectory, currentPattern="*"):
	currentDirectory = pathlib.Path(currentDirectory)
	folders = []
	files = []

	for currentFile in currentDirectory.glob(currentPattern):
		if os.path.isfile(currentFile):
			files.append({
				"path": str(currentFile).replace(str(currentDirectory), ""),
				"type": "file"
			})
		else:
			folders.append({
				"path": str(currentFile).replace(str(currentDirectory), ""),
				"type": "folder"
			})

	result = folders + files
	return result