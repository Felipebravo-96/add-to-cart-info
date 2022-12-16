import React from "react";
import { useProduct } from "vtex.product-context";
import { useOrderForm } from "vtex.order-manager/OrderForm";
import ButtonGroup from "./ButtonGroup";
import { generateBlockClass } from "@vtex/css-handles";
import styles from "./styles.css"

//import ProductGroup from "./ProductGroup";


const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {

    const container = generateBlockClass(styles.container, blockClass),
        continaer__item = generateBlockClass(styles.container__item, blockClass)
    const productInfo = useProduct()
    const { orderForm: { items, totalizers } } = useOrderForm()
    console.log("productInfo:", productInfo)


    return (
        <div className={container}>
            {/* <ProductGroup products={items}/> */}
            {
                items.map((item: any, index: number) => {
                    console.log(item);
                    return (

                        <div key={index} className={continaer__item}>
                            <div>
                                <img src={item.imageUrls.at1x} />
                            </div>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.id}</p>
                                <p>${item.price / 100}</p>
                                <p>Cant: {item.quantity}</p>
                            </div>
                        </div>
                    )
                })
            }
            <div>
                <p>Tenemos {items.length} items en tu compra</p>
                <p>
                    {
                        totalizers[0]?.value ?
                            `Total: ${totalizers[0]?.value / 100}` :
                            "Total: Por calcular"
                    }
                </p>
            </div>
            <ButtonGroup />
        </div>
    )
}

export default AddToCartInfo