import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { SpinnerComp } from "../Spinner/Spinner";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
    const [products,setProducts] = useState([]);

    const [loading,setLoading] = useState(true);

    const { categoryId } = useParams();

    
    useEffect(() => {
        const getProducts = async () => {
            try {
                const query = collection(db,"items");
                const response = await getDocs(query);
                const docs = response.docs;
                const data = docs.map(doc => {
                    return {
                        ...doc.data(), id: doc.id
                    }
                });
                if (categoryId === undefined) {
                    setProducts(data);
                } else {
                    const categoryFilter = data.filter((item) => item.categoria === categoryId);
                    setProducts(categoryFilter);
                }
                setLoading(false);
            } catch (error) {
                console.log(`Error al intentar conectar con el servidor ${error}`);
            }
        }
        getProducts()
    },[categoryId]);

    return (
        <>
            {
                loading ? <SpinnerComp/> : <ItemList items= {products}/>
            }
        </>
    )
}