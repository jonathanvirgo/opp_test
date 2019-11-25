import { Component, OnInit } from '@angular/core';
import { singleton } from '../../class/design_pattern/singleton';
import { BankFactory, Bank, BankType } from '../../class/design_pattern/factory_pattern';
import { Furniture_Factory, VAT_LIEU, Furniture_Abstract_Factory, Chair, Table} from '../../class/design_pattern/abstract_factory_pattern';
import { Shape, ShapeFactory, hinh_chu_nhat, hinh_tron, hinh_vuong} from '../../class/design_pattern/factory'; 
import { BankAccount, BankAccountBuilder} from '../../class/design_pattern/builder';
import { PrinterController } from '../../class/design_pattern/facade';

@Component({
  selector: 'app-design-pattern',
  templateUrl: './design-pattern.component.html',
  styleUrls: ['./design-pattern.component.scss']
})
export class DesignPatternComponent implements OnInit {
  single = new singleton();
  bank : Bank;
  factory: Furniture_Abstract_Factory;
  hinh : Shape;
  tai_khoan : BankAccount;
  fn_in : PrinterController;
  constructor() { }

  ngOnInit() {
    // this.bank = BankFactory.getBank(BankType.VietcomBank);
    // this.factory = Furniture_Factory.getFactory(VAT_LIEU.Plastic);
    // console.log("Singleton 1",this.single.get_gia_tri());
    // let single2 = new singleton();
    // console.log("Singleton 2",single2.get_gia_tri());
    // console.log("Factory",this.bank);
    // let ghe = this.factory.createChair();
    // let ban = this.factory.createTable();
    // console.log("Abstract Factory", ban.create(), ghe.create());

    this.hinh = ShapeFactory.get_hinh("hinh_tron");
    console.log("hinh",this.hinh.draw());
    this.tai_khoan = new BankAccountBuilder().setOwner("Homer").setBalance("100000").setInterestRate("2.5").build();
    console.log("Builder", this.tai_khoan.showInfo());
    this.fn_in = new PrinterController()
    console.log("Facada",this.fn_in.Print());
  }

}
