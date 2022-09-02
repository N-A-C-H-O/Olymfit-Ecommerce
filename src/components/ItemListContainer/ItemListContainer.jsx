import { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import { promiseProductos } from "../../helper/helper";
import { SpinnerComp } from "../Spinner/Spinner";
import { useParams } from "react-router-dom";


export const ItemListContainer = (props) => {
    const [productos,setProductos] = useState([]);

    const [loading,setLoading] = useState(true);

    const { categoryId } = useParams();

    
    useEffect(() => {
        setLoading(true)
        const obtenerProductos = async () => {
            try {
                const data = await promiseProductos();
                if (categoryId === undefined) {
                    setProductos(data);
                } else {
                    const filtradoCategoria = data.filter((item) => item.categoria === categoryId);
                    setProductos(filtradoCategoria);
                }
                setLoading(false);
            } catch (error) {
                console.log(`Error al intentar conectar con el servidor ${error}`);
            }
        }
        obtenerProductos()
    },[categoryId]);


    const agregarCarrito = (items) => {
        alert(`Sumaste ${items} productos nuevos a tu carrito`);
    }

    return (
        <>
            <h2 className="greeting text-center my-5">{ props.greeting }</h2>
            <ItemCount initial={1} stock={5} onAdd={agregarCarrito}  />
            <hr/>
            {
                loading ? <SpinnerComp/> : <ItemList items= {productos}/>
            }
        </>
    )
}