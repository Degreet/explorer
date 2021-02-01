def setup_eel(eel):
	eel.init("static")
	eel.start("index.html", size=(500, 500))
	return eel