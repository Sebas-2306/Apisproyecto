import { useState, useEffect } from "react";
import {
    crearCategoria,
    actualizarCategoria
} from "../../services/categoriaService";
import Swal from "sweetalert2";

function CategoriaForm({
    onCategoriaCreada,
    categoriaSeleccionada,
    limpiarSeleccion
}) {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    useEffect(() => {

        if (categoriaSeleccionada) {
            setNombre(categoriaSeleccionada.nombre);
            setDescripcion(categoriaSeleccionada.descripcion || "");
        }

    }, [categoriaSeleccionada]);

    const guardarCategoria = async (e) => {

        e.preventDefault();

        try {

            if (categoriaSeleccionada) {

                await actualizarCategoria(
                    categoriaSeleccionada.id_categoria,
                    {
                        nombre,
                        descripcion
                    }
                );

                Swal.fire({
                    icon: "success",
                    title: "Categoría actualizada",
                    timer: 1500,
                    showConfirmButton: false
                });

                limpiarSeleccion();

            } else {

                await crearCategoria({
                    nombre,
                    descripcion
                });

                Swal.fire({
                    icon: "success",
                    title: "Categoría registrada",
                    timer: 1500,
                    showConfirmButton: false
                });

            }

            setNombre("");
            setDescripcion("");

            onCategoriaCreada();

        } catch (error) {

            console.error(error);

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No fue posible guardar la categoría."
            });

        }

    };

    return (

        <form onSubmit={guardarCategoria}>

            <div className="mb-3">

                <label className="form-label">
                    Nombre
                </label>

                <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />

            </div>

            <div className="mb-3">

                <label className="form-label">
                    Descripción
                </label>

                <textarea
                    className="form-control"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

            </div>

            <button className="btn btn-success">

                {categoriaSeleccionada ? "Actualizar" : "Guardar"}

            </button>

        </form>

    );

}

export default CategoriaForm;