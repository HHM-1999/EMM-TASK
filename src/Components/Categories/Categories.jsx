import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Banner from '../Banner/Banner';

const Categories = () => {

    const [cat, setCat] = useState([]);

    useEffect(() => {
        fetch('https://backoffice.daily-bangladesh.com/api/json/file/generateSpecial2.json')
            .then(res => res.json())
            .then(data => setCat(data.data));
    }, [])
    return (

        <div className='mt-5'>
             <Card cat={cat} />
             <Banner />
        </div>
    );
};

export default Categories;