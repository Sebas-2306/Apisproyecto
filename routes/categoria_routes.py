from flask import Blueprint, render_template
from database import obtener_conexion

categoria_bp = Blueprint("categoria", __name__)

@categoria_bp.route("/categorias")
def listar_categorias():

    conexion = obtener_conexion()

    cursor = conexion.cursor()

    cursor.execute("""
        SELECT *
        FROM categorias
        ORDER BY nombre
    """)

    categorias = cursor.fetchall()

    cursor.close()
    conexion.close()

    return render_template(
        "categorias/listar.html",
        categorias=categorias
    )
print("catergorias")