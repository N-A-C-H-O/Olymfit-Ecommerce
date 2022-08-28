import { useEffect, useState } from "react";
import { promiseProductos } from "../../helper/helper";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});

    const obtenerProducto = async () => {
        try {
            const data = await promiseProductos();
            setProducto(data.find((producto) => producto.id === 1));
        } catch (error) {
            console.log(`Error al intentar conectar con el servidor ${error}`);
        }
    }

    useEffect(() => {
        obtenerProducto()
    },[]);

    return(
        <ItemDetail item={producto}/>
    );
}