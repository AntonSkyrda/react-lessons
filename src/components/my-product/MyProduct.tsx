import type {FC} from "react";
import type {IProduct} from "../../models/Products.ts";

type ProductPropsType = {
    product: IProduct
}

export const MyProduct: FC<ProductPropsType> = ({product}) => {
    return (
        <div>
            <h2>{product.title}. {product.price} uah</h2>
            <img src={product.image} alt={product.title}/>
        </div>
    );
};