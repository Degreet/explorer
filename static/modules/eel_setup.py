def setup_eel(eel):
    eel.init("static/web")
    eel.start("index.html", size=(1200, 550), host="localhost", port=8080)
    return eel
