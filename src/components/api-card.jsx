


function ApiCard({ item }) {

    return (
        <div className="Api-Card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price} DH</p>
            <p>{item.stock}</p>
            <p>{item.category}</p>
        </div>
    )
}
export default ApiCard;