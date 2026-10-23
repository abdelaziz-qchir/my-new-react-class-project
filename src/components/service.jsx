import { useEffect, useState } from "react";

function Service() {
    const [apiProducts, setApiProduct] = useState([])

    useEffect(() => {
        async function Charger() {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            setApiProduct(data.products)
        }

        Charger()
    }, [])

    return (
        <div className="service">
            {
                apiProducts.map(item => <h3 key={item.id} >{item.title}</h3>)
            }
        </div>
    )
}

export default Service;