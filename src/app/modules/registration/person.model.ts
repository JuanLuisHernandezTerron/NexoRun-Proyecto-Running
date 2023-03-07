/**
 * @class Person
 * Contiene los datos del formulario para registrar una persona
 */

export class Person{
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public fechaNacimiento: Date,
        public dni: string,
        public size: string,
        public direccionCasa?: string,
        public runningClub?:string
    ){}
}
