/**
 * @class Evento
 * Contiene los datos de los eventos
 */

export class Event{
  constructor(
      public id: number,
      public name: string,
      public description: string,
      public place: string,
      public date: Date,
      public price: number
  ){}
}
