export interface ProductEntity{
    productId: string;
    categoryId: number;
    quantity: number;
    title: string;
    price: number;
    description: string;
    
}

export class ProductEntityClass{
    product_id!: string;
    category_id!: number;
    quantity!: number;
    title!: string;
    price!: number;
    description!: string;
    public constructor(product_id:string, category_id:number, quantity:number,
                 title:string, price:number, description:string){
                    this.product_id= product_id;
                    this.category_id = category_id;
                    this.quantity = quantity;
                    this.title = title;
                    this.price = price;
                    this.description = description;
                }

}

