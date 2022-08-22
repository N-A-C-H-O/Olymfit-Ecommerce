import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = (props) => {

    const agregarCarrito = (items) => {
        alert(`Sumaste ${items} productos nuevos a tu carrito`)
    }

    return (
        <>
            <h2 className="greeting text-center my-5">{ props.greeting }</h2>
            <ItemCount initial={1} stock={5} onAdd={agregarCarrito}  />
        </>
    )
}