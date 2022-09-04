import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { promiseProductos } from "../../helper/helper";
import { SpinnerComp } from "../Spinner/Spinner";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
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

    return (
        <>
            {
                loading ? <SpinnerComp/> : <ItemList items= {productos}/>
            }
        </>
    )
}