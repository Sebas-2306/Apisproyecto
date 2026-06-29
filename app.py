from flask import Flask, render_template
from routes.categoria_routes import categoria_bp

app = Flask(__name__)

app.secret_key = "inventario_sena_2026"

app.register_blueprint(categoria_bp)


@app.route("/")
def inicio():
    return render_template("pages/index.html")


if __name__ == "__main__":
    app.run(debug=True)
    