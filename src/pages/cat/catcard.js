import React from 'react';

export default function CatCard ({image, name, description}) {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md'>
            <img src= {image} alt={name} className='w-full h-48 object-cover rounded-md'/>
            <h2 className='mt-4 text-xl font-semibold'>{name}</h2>
            <p className='mt-2 text-grey-600'>{description}</p>
        </div>
    );
}