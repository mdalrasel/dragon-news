import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} =useParams()
    console.log(id)
    return (
        <div>
            <h3>Category News :{id}</h3>
        </div>
    );
};

export default CategoryNews;