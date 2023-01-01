export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    edad: number;
    sobremi: string;
    mini: string;
    foto: string;

    constructor(nombre:string, apellido:string, edad:number, sobremi:string, mini:string, foto:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sobremi = sobremi;
        this.mini = mini;
        this.foto = foto;
    }

}
