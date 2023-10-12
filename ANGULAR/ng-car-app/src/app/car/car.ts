export class car{
    id: number;
    name: string;
    year: number;
    type: string;
    km: number;
    price: number;
    picture: string;
    category: string [];
    created: Date;

    constructor(
    
    name: string = 'Entrer un véhicule...',
    year: number = 1980,
    type: string = 'essence',
    km: number = 100,
    price: number = 10000,
    picture: string = '',
    category: string[] = ['collection'],
    created: Date = new Date()

    ){   
    
    this.name = name;
    this.year = year;
    this.type = type;
    this.km = km;
    this.price = price;
    this.picture = picture;
    this.category = category;
    this.created = created;
  }

}