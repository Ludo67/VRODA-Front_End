export class Product{ 
    public constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }
  }
  