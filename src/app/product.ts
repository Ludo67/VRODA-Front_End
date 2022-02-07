export interface ProductEntity{
    productId: string;
    categoryId: number;
    quantity: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

export class ProductEntityClass{
    productId!: string;
    categoryId!: number;
    quantity!: number;
    title!: string;
    price!: number;
    description!: string;
    image!: string;
    public constructor(productId:string, categoryId:number, quantity:number,
                 title:string, price:number, description:string,image: string){
                    this.productId= productId;
                    this.categoryId = categoryId;
                    this.quantity = quantity;
                    this.title = title;
                    this.price = price;
                    this.description = description;
                    this.image = image;
                }

}

