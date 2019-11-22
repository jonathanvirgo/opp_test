export enum VAT_LIEU{Plastic = 'Plastic', Wood = 'Wood'}
export class Furniture_Factory{
    private constructor(){}
    static getFactory(vat_lieu : VAT_LIEU) : Furniture_Abstract_Factory{
        switch(vat_lieu){
            case 'Plastic': {return new Plastic_Factory()}
            case 'Wood': {return new Wood_Factory()}
        }
    }
}

export abstract class Furniture_Abstract_Factory{
    abstract createChair();
    abstract createTable();
}

class Plastic_Factory extends Furniture_Abstract_Factory {
    createChair() {
        return new Plastic_Chair();
    }    
    createTable() {
        return new Plastic_Table();
    }
}

class Wood_Factory extends Furniture_Abstract_Factory{
    createChair() {
        return new Wood_Chair();
    }    
    createTable() {
        return new Wood_Table();
    }
}

export interface Chair {
    create()
}
export interface Table {
    create()
}

class Plastic_Chair implements Chair{
    create() {
         return "Chế tạo ghế nhựa";
    }
}
class Wood_Chair implements Chair{
    create() {
        return "Chế tạo ghế gỗ";
    }
}

class Plastic_Table implements Table{
    create() {
        return "Chế tạo bàn nhựa";
    }
}
class Wood_Table implements Table{
    create(){
        return "Chế tạo bàn gỗ";
    }
}
