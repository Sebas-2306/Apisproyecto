import axios from "axios";

// URL base de la API Flask
const API_URL = "http://127.0.0.1:5000/api/categorias";

/**
 * Obtiene todas las categorías.
 */
export const obtenerCategorias = () => axios.get(API_URL);

/**
 * Obtiene una categoría por su ID.
 */
export const obtenerCategoria = (id) => axios.get(`${API_URL}/${id}`);

/**
 * Crea una nueva categoría.
 */
export const crearCategoria = (categoria) => axios.post(API_URL, categoria);

/**
 * Actualiza una categoría.
 */
export const actualizarCategoria = (id, categoria) =>
    axios.put(`${API_URL}/${id}`, categoria);

/**
 * Elimina una categoría.
 */
export const eliminarCategoria = (id) =>
    axios.delete(`${API_URL}/${id}`);