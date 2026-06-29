import pymysql
from config import Config


def obtener_conexion():
    """
    Crea y devuelve una conexión con la base de datos MySQL.
    """

    return pymysql.connect(
        host=Config.DB_HOST,
        user=Config.DB_USER,
        password="SEBAS#2306",
        database=Config.DB_NAME,
        port=Config.DB_PORT,
        cursorclass=pymysql.cursors.DictCursor
    )