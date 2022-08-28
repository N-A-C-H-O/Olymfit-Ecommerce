import Producto1 from '../assets/images/producto1.jpg';
import Producto2 from '../assets/images/producto2.jpg';
import Producto3 from '../assets/images/producto3.jpg';
import Producto4 from '../assets/images/producto4.jpg';
import Producto5 from '../assets/images/producto5.jpg';
import Producto6 from '../assets/images/producto6.jpg';
import Producto7 from '../assets/images/producto7.jpg';
import Producto8 from '../assets/images/producto8.jpg';

const listaProductos = [
    {
        id: 1, 
        name: 'Remera Puma Train Aop',
        price: 2000,
        image: Producto1
    },
    {
        id: 2,
        name: 'Remera Puma Train Aop',
        price: 2000,
        image: Producto2
    },
    {
        id: 3,
        name: 'Remera adidas Aeroready Logo', 
        price: 2000, 
        image: Producto3
    },
    {
        id: 4, 
        name:'Remera Nike Sport Clash Superset Energy', 
        price: 2000, 
        image: Producto4
    },
    {
        id: 5, 
        name: 'Remera adidas Yoga Aeroready Motion', 
        price: 2000, 
        image: Producto5
    },
    {
        id: 6, 
        name: 'Remera adidas Designed 4 Training Heat.Rdy', 
        price: 2000, 
        image: Producto6
    },
    {
        id: 7, 
        name: 'Remera adidas Designed 4 Training Heat.Rdy', 
        price: 2000, 
        image: Producto7
    },
    {
        id: 8, 
        name: 'Remera adidas Fast Primeblue', 
        price: 2000, 
        image: Producto8
    },
];

export const promiseProductos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(listaProductos);
        },2000);
    });
}