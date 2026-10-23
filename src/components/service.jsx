import { useEffect, useState } from "react";
import ApiCard from "../components/api-card.jsx"

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
                 apiProducts.map((item) => (<ApiCard key={item.id} item={item} />)) 
            }
        </div>
    )
}

export default Service;