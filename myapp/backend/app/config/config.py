class AuthConfig:
    """Authorization configuration."""
    SECRET_KEY = 'secret'

class DBConfig:
    """Database configuration."""
    HOST = 'localhost'
    PORT = 27017
    DB = 'teamroster'
    URL = 'mongodb://' + HOST + ':' + PORT + '/' + DB