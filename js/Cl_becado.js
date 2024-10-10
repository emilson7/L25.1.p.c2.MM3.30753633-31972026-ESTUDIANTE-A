import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_becado extends Cl_estudiante {
    constructor(nombre, acumuladoNotas, cantidadMaterias) {
        super(nombre, acumuladoNotas, cantidadMaterias);
    }

   
    determinarBeca() {
        let promedio = this.calcularPromedio();
        if (promedio > 15) {
            return 30;
        } else if (promedio >= 10) {
            return 20; 
        } else {
            return 0; 
        }
    }

    mensajeBeca() {
        let beca = this.determinarBeca();
        if (beca > 0) {
            return `${this.nombre} recibe una beca de $${beca.toFixed(2)}.`;
        } else {
            return `${this.nombre} no le corresponde beca.`;
        }
    }
}
