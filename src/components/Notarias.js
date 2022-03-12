// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Notarias from "../notaria.json"


const Showbombero = () => {

    const [bombero, setBombero] = useState({});

    useEffect(() => {
        axios
            .get('https://bogota-laburbano.opendatasoft.com/api/datasets/1.0/search/?q=')
            .then((res) => {
                setBombero(res.data)
            })
    }, []);
    console.log(bombero)

    return (
        <div className='bombero'>
            <p>Hola mundo</p>
            <h1> COD ESTACIÓN DE BOMBERO: {bombero.codestacbom?.objectid}</h1>
            <h1> EMPRESA: {bombero.fields?.empresa}</h1>
            <h1> COD ERP: {bombero.fields?.coderp}</h1>

        </div>
    );




    // return (
    //     <div>
    //         {Notarias.map(notaria => (
    //             <p key={notaria.fields.notnomnot}> {notaria.fields.notnomnot} </p>

    //         ))}
    //     </div>
    // );
};

export default Showbombero;