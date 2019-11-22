export interface Bank{
    getBankName() : string;
}

class TPBank implements Bank{
    getBankName(): string {
        return "TPBank"
    }
}
class VietcomBank implements Bank{
    getBankName(): string {
       return "VietcomBank"
    }
}
export enum BankType{VietcomBank = 'VietcomBank',TPBank = 'TPBank'}
export class BankFactory{
     private constructor(){};
     static getBank(bank_type : BankType):Bank{
        switch (bank_type){
            case 'TPBank':{ return new TPBank()};
            case 'VietcomBank': { return new VietcomBank()}
        }
     }
}