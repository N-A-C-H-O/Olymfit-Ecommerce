import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({items}) => {
    
    return(
        <div className="container-cards">
            {
                items.map((item) => <Item key={item.id} item={item}/>)
            }
        </div>
    )
}
