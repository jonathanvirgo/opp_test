export class singleton {
    private static instance : singleton;
    private constructor() {
    }
    static get_instance(): singleton {
      if (this.instance == null) {
        this.instance =  new singleton();
      }
      return this.instance;
    }
  }
  