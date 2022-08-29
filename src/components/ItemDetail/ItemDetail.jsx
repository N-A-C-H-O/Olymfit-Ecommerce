import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({item}) => {
    return(
        <div className="detail-container">
            <img src={item.image} className="detail-img" alt="Imagen" />
            <div className="detail-content">
                <h2 className="detail-content__name">{item.name}</h2>
                <p className="detail-content__description">{item.description}</p>
                <p className="detail-content__price">${item.price}</p>
                <ItemCount initial={1} stock={item.stock}/>
            </div>
        </div>
    );
}