import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { SpinnerComp } from "../Spinner/Spinner";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    
    const [loading,setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const query = doc(db, "items", itemId);
                const response = await getDoc(query);
                const data = {
                    ...response.data(),
                    id: response.id
                }
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.log(`Error al intentar conectar con el servidor ${error}`);
            }
        }

        getProduct()
    },[itemId]);

    return(
        loading ? <SpinnerComp/> : <ItemDetail item={product}/>
    );
}