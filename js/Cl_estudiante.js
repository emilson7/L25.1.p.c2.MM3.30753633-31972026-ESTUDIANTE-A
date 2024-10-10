export default class Cl_estudiante {
    constructor(nombre, acumuladoNotas, cantidadMaterias) {
        this.nombre = nombre;
        this.acumuladoNotas = acumuladoNotas;
        this.cantidadMaterias = cantidadMaterias;
    }

    calcularPromedio() {
        if (this.cantidadMaterias > 0) {
            return this.acumuladoNotas / this.cantidadMaterias;
        }
        return 0;
    }
}
