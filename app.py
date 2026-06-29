from flask import Flask, render_template, request, redirect, url_for, flash
from database import obtener_conexion

app = Flask(__name__)
app.secret_key = "inventario_sena_2026"

@app.route("/")
def inicio():
    return render_template("pages/index.html")


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

    cursor.close()
    conexion.close()

    return render_template(
        "categorias/listar.html",
        categorias=categorias
    )


@app.route("/categorias/nueva")
def nueva_categoria():
    return render_template("categorias/nueva.html")


@app.route("/categorias/guardar", methods=["POST"])
def guardar_categoria():

    nombre = request.form["nombre"]
    descripcion = request.form["descripcion"]

    conexion = obtener_conexion()
    cursor = conexion.cursor()

    cursor.execute("""
        INSERT INTO categorias (nombre, descripcion)
        VALUES (%s, %s)
    """, (nombre, descripcion))

    conexion.commit()

    cursor.close()
    conexion.close()
    flash("Categoría registrada correctamente.", "success")
    return redirect(url_for("listar_categorias"))


if __name__ == "__main__":
    app.run(debug=True)