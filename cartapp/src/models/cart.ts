import { ProductImage } from "./product-image";

export interface Cart{
    id:number;
    productId:number;
    userId:number;
    items:CartItem[]
}

export interface CartItem{
    cartId:number;
    productId:number;
    image:ProductImage;
    productName:string;
    productPrice:number;
    count:number;
}
