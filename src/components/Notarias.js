// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Notarias from "../notaria.json"


const ShowNotaria = () => {

    const [notaria, setNotaria] = useState({});

    useEffect(() => {
        axios
            .get('https://bogota-laburbano.opendatasoft.com/api/datasets/1.0/search/?q=')
            .then((res) => {
                setNotaria(res.data)
            })
    }, []);
    console.log(notaria)

    return (
        <div>
            <p>Hola mundo</p>
            <h1>{notaria.fields?.empresa}</h1>
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

export default ShowNotaria;