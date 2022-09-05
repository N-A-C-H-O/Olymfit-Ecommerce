import { LinkContainer } from "react-router-bootstrap";
import "./NoPage.css";
import { FaRegSadTear } from "react-icons/fa";

export const NoPage = () => {
    return(
        <div className="nopage-container">
            <p>Oops! <i className="nopage-icon"><FaRegSadTear /></i></p>
            <h3>404</h3>
            <p>Lo sentimos, no pudimos encontrar la página que estabas buscando.</p>
            <LinkContainer to="/">
                <button className="btn btn-dark">Volver al inicio</button>
            </LinkContainer>
        </div>
    )
}