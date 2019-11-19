export abstract class Animal{
    private name : String;
    protected color: String;
    constructor (name : String, color : String){
        this.name = name;
        this.color = color;
    };
    set_name(name : String){
        this.name = name;
    };
    set_color(color : String){
        this.color = color;
    };
    abstract voice();
    get_name(){
        return this.name
    }
}

export class Cat extends Animal{
    voice(){
        console.log("Kêu ")
    };
    constructor (name : String, color : String){
        super(name, color);
    };
}

export class Dog extends Animal{
    voice(){
        console.log("Cho ",this.color);
    };
    constructor (name : String, color : String){
        super(name, color);
    };
}