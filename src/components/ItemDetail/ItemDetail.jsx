export const ItemDetail = ({item}) => {
    console.log(item)
    return(
        <div className="detail-container">
            <img src={item.image} className="detail-img" alt="Imagen" />
            <div className="detail-content">
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <p>{item.description}</p>
            </div>
        </div>
    );
}