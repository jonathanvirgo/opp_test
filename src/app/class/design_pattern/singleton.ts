export class singleton {
  private singleton1 : singleton;
  private gia_tri = 6;
  constructor() {
    this.gia_tri = this.gia_tri + 1;
  }
  get_gia_tri(): singleton {
    console.log("khoi tao",this.singleton1);
    if (this.singleton1 == null) {
      this.singleton1 =  new singleton();
    }
    return this.singleton1;
  }
}
