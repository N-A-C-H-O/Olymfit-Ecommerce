import "./Checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

export const Checkout = () => {

    const sendOrder = (e) => {
        e.preventDefault();
    }


    return(
        <form onSubmit={sendOrder}>
            <div className="form-section">
                <label>Nombre</label>
                <input type="text" placeholder="Nombre" />
            </div>
            <div className="form-section">
                <label>Apellido</label>
                <input type="text" placeholder="Apellido"/>
            </div>
            <div className="form-section">
                <label>Email</label>
                <input type="text" placeholder="Correo electrónico"/>
            </div>
            <div className="form-section">
                <label>Teléfono</label>
                <input type="text" placeholder="Número de teléfono"/>
            </div>
            <button className="btn d-block mt-5">Finalizar compra</button>
        </form>
    )
}