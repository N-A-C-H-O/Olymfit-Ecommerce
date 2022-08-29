import { useEffect, useState } from "react";
import { promiseProductos } from "../../helper/helper";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { SpinnerComp } from "../Spinner/Spinner";

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading,setLoading] = useState(true);

    const obtenerProducto = async () => {
        try {
            const data = await promiseProductos();
            setProducto(data.find((producto) => producto.id === 1));
            setLoading(false);
        } catch (error) {
            console.log(`Error al intentar conectar con el servidor ${error}`);
        }
    }

    useEffect(() => {
        obtenerProducto()
    },[]);

    return(
        loading ? <SpinnerComp/> : <ItemDetail item={producto}/>
    );
}