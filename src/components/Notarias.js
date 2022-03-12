// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Notarias from "../notaria.json"



const Showbombero = () => {
    // const url = 'https://bogota-laburbano.opendatasoft.com/api/datasets/1.0/search/?q='
    const [bombero, setBombero] = useState({});



    useEffect(() => {

        axios.get('https://bogota-laburbano.opendatasoft.com/api/datasets/1.0/search/?q=')
            .then(res => {
                setBombero({

                    CODIBOM: res.data.datasets[0].fields


                })
            })



    }, []);

    console.log(bombero.CODIBOM)

    return (
        <div className='alvaro'>
            {
                bombero.CODIBOM?.map(dataset => (
                    <ul className='bombero'>
                        <li key={dataset.name} >
                            <h1> COD ESTACIÓN DE BOMBERO: {dataset.name}</h1>


                        </li>

                        {/* <h1> EMPRESA: {dataset.fields[3]?.name}</h1> */}
                        {/* <h1> COD ERP: {dataset.fields[4]?.name}</h1> */}
                    </ul>
                ))
            }
            {/* <p>Hola mundo</p>
            <h1> COD ESTACIÓN DE BOMBERO: {bombero?.datasets[0].fields[1].name}</h1>
            <h1> EMPRESA: {bombero.datasets[0].fields[3].name}</h1>
            <h1> COD ERP: {bombero.datasets[0].fields[4].name}</h1> */}

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