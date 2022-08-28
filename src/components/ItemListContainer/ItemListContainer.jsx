import { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import { promiseProductos } from "../../helper/helper";
import { SpinnerComp } from "../Spinner/Spinner"

export const ItemListContainer = (props) => {
    const [productos,setProductos] = useState([]);
    const [loading,setLoading] = useState(true);

    const obtenerProductos = async () => {
        try {
            const data = await promiseProductos();
            setProductos(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obtenerProductos();
    },[]);

    const agregarCarrito = (items) => {
        alert(`Sumaste ${items} productos nuevos a tu carrito`)
    }

    return (
        <>
            <h2 className="greeting text-center my-5">{ props.greeting }</h2>
            <ItemCount initial={1} stock={5} onAdd={agregarCarrito}  />
            <hr/>
            {
                loading ? <SpinnerComp /> : <ItemList items={productos}/>
            }
        </>
    )
}