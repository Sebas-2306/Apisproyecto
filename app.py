from flask import Flask, render_template
from routes.categoria_routes import categoria_bp
from routes.producto_routes import producto_bp

from database import obtener_conexion
app = Flask(__name__)

app.secret_key = "inventario_sena_2026"

app.register_blueprint(categoria_bp)
app.register_blueprint(producto_bp)

@app.route("/")
def inicio():

    conexion = obtener_conexion()
    cursor = conexion.cursor()

    cursor.execute("SELECT COUNT(*) AS total FROM categorias WHERE estado='Activo'")
    total_categorias = cursor.fetchone()["total"]

    cursor.execute("SELECT COUNT(*) AS total FROM productos WHERE estado='Activo'")
    total_productos = cursor.fetchone()["total"]

    cursor.execute("SELECT COUNT(*) AS total FROM productos WHERE stock <= stock_minimo AND estado='Activo'")
    stock_bajo = cursor.fetchone()["total"]

    cursor.close()
    conexion.close()

    return render_template(
        "pages/index.html",
        total_categorias=total_categorias,
        total_productos=total_productos,
        stock_bajo=stock_bajo
    )

if __name__ == "__main__":
    app.run(debug=True)
