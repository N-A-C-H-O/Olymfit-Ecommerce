import './NoPage.css';
import { FaRegSadTear } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

export const NoPage = () => {
    document.title = "OlymFit - 404";

    return(
        <div className='nopage-container'>
            <p>Oops! <i className='nopage-icon'><FaRegSadTear/></i></p>
            <h3>404</h3>
            <p>Lo sentimos, no pudimos encontrar la página que estabas buscando.</p>
            <LinkContainer to='/'>
                <button className='btn btn-dark p-2'>Volver</button>
            </LinkContainer>
        </div>
    );
}