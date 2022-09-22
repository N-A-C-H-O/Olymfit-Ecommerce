import './Footer.css';
import { BsFacebook, BsInstagram, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

export const Footer = () => {
    return(
        <footer>
            <div className='footer-container'>
                <div className='footer-section'>
                    <h4>Categorías</h4>
                    <div className='footer-section-content footer-links'>
                        <p>Privacidad</p>
                        <p>Devoluciones</p>
                        <p>Contacto</p>
                    </div>
                </div>
                <div className='footer-section'>
                    <h4>Contacto</h4>
                    <div className='footer-section-content footer-contact'>
                        <p><i><BsWhatsapp/></i>+542049581029</p>
                        <p><i><BsTelephoneFill/></i>2049581029</p>
                        <p><i><MdMail/></i>olymfit@tienda.com</p>
                        <p><i><FaMapMarkerAlt/></i>Av. Caseros 2140, C1264AAO CABA</p>
                    </div>
                </div>
                <div className='footer-section'>
                    <h4>Sigamos conectados</h4>
                    <div className='footer-section-content footer-social'>
                        <a href='https:/instagram.com'><i><BsInstagram /></i></a>
                        <a href='https:/facebook.com'><i><BsFacebook/></i></a>
                        <a href='https:/whatsapp.com'><i><BsWhatsapp/></i></a>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>
                    &copy; Copyright Olymfit - 2022. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}