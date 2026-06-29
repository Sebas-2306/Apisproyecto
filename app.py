from flask import Flask, render_template
from database import obtener_conexion

app = Flask(__name__)
@app.route("/categorias")
def listar_categorias():

    conexion = obtener_conexion()

    cursor = conexion.cursor()

    cursor.execute("""
        SELECT *
        FROM categorias
        ORDER BY nombre
    """)

    categorias = cursor.fetchall()
    print("catergorias")

    cursor.close()
    conexion.close()
    
    return render_template(
        "categorias/listar.html",
        categorias=categorias
    )

@app.route("/")
def inicio():
    return render_template("pages/index.html")

if __name__ == "__main__":
    app.run(debug=True)