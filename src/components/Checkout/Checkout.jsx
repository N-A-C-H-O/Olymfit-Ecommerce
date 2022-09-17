import "./Checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Checkout = () => {
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [email,setEmail] = useState("");
    const [tel,setTel] = useState("");

    const [validForm, setValidForm] = useState({
        name: false,
        surname: false,
        email: false,
        tel: false
    });

    const validName = () => {
        const regex = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        regex.test(name) ? setValidForm({ ...validForm, name: true }) : setValidForm({ ...validForm, name: false });
    }

    const validSurname = () => {
        const regex = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        regex.test(surname) ? setValidForm({ ...validForm, surname: true }) : setValidForm({ ...validForm, surname: false });
    }

    const validEmail = () => {
        const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        regex.test(email) ? setValidForm({ ...validForm, email: true }) : setValidForm({ ...validForm, email: false });
    }

    const validTel = () => {
        const regex = /^[0-9]+$/;
        regex.test(tel) ? setValidForm({ ...validForm, tel: true }) : setValidForm({ ...validForm, tel: false });
    }

    const errorNotif = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    
    const successNotif = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const sendOrder = (e) => {
        e.preventDefault();
        if (validForm.name && validForm.surname && validForm.email && validForm.tel) {
            successNotif('Datos enviados correctamente!')
        } else {
            errorNotif('Sus datos son incorrectos. Por favor, rellene el formulario.')
        }
    }

    
    return(
        <>
            <form onSubmit={sendOrder}>
                <div className="form-section">
                    <label>Nombre</label>
                    <input onKeyUp={validName} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre"/>
                    {
                        validForm.name ? <span><AiFillCheckCircle/></span> : <span><MdError/></span>
                    } 
                </div>
                <div className="form-section">
                    <label>Apellido</label>
                    <input onKeyUp={validSurname} onChange={(e) => setSurname(e.target.value)} type="text" placeholder="Apellido"/>
                    {
                        validForm.surname ? <span><AiFillCheckCircle/></span> : <span><MdError/></span>
                    } 
                </div>
                <div className="form-section">
                    <label>Email</label>
                    <input onKeyUp={validEmail} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Correo electrónico"/>
                    {
                        validForm.email ? <span><AiFillCheckCircle/></span> : <span><MdError/></span>
                    } 
                </div>
                <div className="form-section">
                    <label>Teléfono</label>
                    <input onKeyUp={validTel} onChange={(e) => setTel(e.target.value)} type="text" placeholder="Número de teléfono" maxLength={15}/>
                    {
                        validForm.tel ? <span><AiFillCheckCircle/></span> : <span><MdError/></span>
                    } 
                </div>
                <button className="btn d-block mt-5">Finalizar compra</button>
            </form>
            <ToastContainer/>
        </>
    )
}