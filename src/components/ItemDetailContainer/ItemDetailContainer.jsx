import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { promiseProductos } from "../../helper/helper";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { SpinnerComp } from "../Spinner/Spinner";


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    
    const [loading,setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        const obtenerProducto = async () => {
            try {
                const data = await promiseProductos();
                const itemParam = data.find((producto) => producto.id.toString() === itemId)
                setProducto(itemParam);
                setLoading(false);
            } catch (error) {
                console.log(`Error al intentar conectar con el servidor ${error}`);
            }
        }

        obtenerProducto()
    },[itemId]);

    return(
        loading ? <SpinnerComp/> : <ItemDetail item={producto}/>
    );
}