from static.modules.read_dir import read_dir
from static.modules.eel_setup import setup_eel
import getpass
import eel
import os


@eel.expose
def read_directory(path):
    return read_dir(path)


@eel.expose
def open_file(path):
    return os.startfile(path)


@eel.expose
def get_username():
    return getpass.getuser()


setup_eel(eel)
