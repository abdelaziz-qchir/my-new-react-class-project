import Data from "../data/data.js";
import Card from "../components/item-card.jsx"
import { useContext } from "react";
import { AppContext } from "./useContext.jsx";

function Acceuil() {
        const {addToCart, addToFavorite} = useContext(AppContext)
    
    return(
        <div className="acceuil">
        { Data.map((item) =>( <Card key={item.id} item={item} addToCart={addToCart} addToFavorite={addToFavorite} />))}
        </div>
    )
}

export default Acceuil;