import Cl_becado from "./Cl_becado.js";

let estudiante1 = new Cl_becado("Mary", 132, 8);
let estudiante2 = new Cl_becado("Alirio", 315, 35);

let salida = document.getElementById("Salida");

let mostrarResultado = (becado) => {
    let promedio = becado.calcularPromedio().toFixed(2);
    let mensaje = becado.mensajeBeca(); 

    return `
        <p>Nombre del estudiante: ${becado.nombre}</p>
        <p>Acumulado de notas: ${becado.acumuladoNotas}</p>
        <p>Cantidad de materias: ${becado.cantidadMaterias}</p>
        <p>Nota promedio: ${promedio}</p>
        <p>${mensaje}</p>
        <hr> <!-- Línea horizontal para separar los estudiantes -->
    `;
};

salida.innerHTML = `
    ${mostrarResultado(estudiante1)}
    ${mostrarResultado(estudiante2)}
`;
