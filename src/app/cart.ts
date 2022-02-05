export class Cart{ 
    public constructor(init?: Partial<Cart>) {
        Object.assign(this, init);
    }
  }