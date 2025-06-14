import NavBar from '../componentes/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; import Layout from './Layout';
import './App.css';


function App() {
    const mascotas = [
        {
            nombre: 'Destructor de mundos',
            descripcion: 'Un gato y creo que el mundo me pertenece.',
            imagen: 'data:image/jpeg;base64,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',
        },
        {
            nombre: 'Rayo veloz',
            descripcion: 'Un perro loco que quiero destruirte la casa',
            imagen: 'data:image/jpeg;base64,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',
        },
        {
            nombre: 'Burbujas',
            descripcion: 'Una pez y hago bug bug ',
            imagen: 'https://www.fishipedia.es/wp-content/uploads/2016/01/poisson_rouge-2.jpg',
        },
    ];

    return (
        <>
            <NavBar />
            <div style={{ padding: '20px' }}>
                <h2>Bienvenido a mi página web sobre mis Mascotas  Desafio dos</h2>
                <hr />
                <p>Esta simple aplicación fue creada con React donde puedes Patrocinar a mis mascotas </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {mascotas.map((mascota, index) => (
                    <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                        <img
                            src={mascota.imagen}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{mascota.nombre}</h5>
                            <p className="card-text">{mascota.descripcion}</p>
                            <a href="#" className="btn btn-primary">Patrocinar </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
