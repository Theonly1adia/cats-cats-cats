import React from 'react';
import CatDetails from './CatDetails';

export default function CatCard ({ cat }) {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md'>
            <img src= {cat.image_link} alt={cat.name} className='w-full h-48 object-cover rounded-md'/>
            <CatDetails name={cat.name} description={cat.description}/>
        </div>
    );
}