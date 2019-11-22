import { Component, OnInit } from '@angular/core';
import { singleton } from '../../class/design_pattern/singleton';
import { BankFactory, Bank, BankType } from '../../class/design_pattern/factory_pattern';
import { Furniture_Factory, VAT_LIEU, Furniture_Abstract_Factory, Chair, Table} from '../../class/design_pattern/abstract_factory_pattern';
@Component({
  selector: 'app-design-pattern',
  templateUrl: './design-pattern.component.html',
  styleUrls: ['./design-pattern.component.scss']
})
export class DesignPatternComponent implements OnInit {
  single = new singleton();
  bank : Bank;
  factory: Furniture_Abstract_Factory;
  constructor() { }

  ngOnInit() {
    this.bank = BankFactory.getBank(BankType.VietcomBank);
    this.factory = Furniture_Factory.getFactory(VAT_LIEU.Plastic);

    console.log("Singleton 1",this.single.get_gia_tri());
    let single2 = new singleton();
    console.log("Singleton 2",single2.get_gia_tri());
    console.log("Factory",this.bank);
    let ghe = this.factory.createChair();
    let ban = this.factory.createTable();
    console.log("Abstract Factory", ban.create(), ghe.create());
  }

}
