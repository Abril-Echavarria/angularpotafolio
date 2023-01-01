export class Proyecto {
    id!: number;
    titulo: string;
    descripcion:string;
    fechai:string;
    fechaf:string;
    img: string;


    constructor(titulo:string, descripcion:string, fechai:string, fechaf:string, img:string){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechai= fechai;
        this.fechaf= fechaf;
        this.img = img;
    }

}
