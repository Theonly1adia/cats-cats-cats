import React, { useState, useEffect } from "react";
import CatCard from "./CatCard";
import CatHeader from "./CatHeader";

export default function MoreCats() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch("https://cats-cats-cats-demo.deno.dev/cats/bur?multi_cat=true")
        .then((response) => response.json())
        .then((data) => setCats(data))
        .catch((error) => console.error("Error fetching multiple cats data:", error));
    }, []);

    if (cats.length === 0) {
        return <p>Loading...</p>;
    }


        return (
            <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> 
                {cats.map((cat,index)=>(
                    <CatCard key={index} cat={cat}/>
                    
                )
            )}
            </div>
        );
    /* return (
        <div className="bg-blue-50 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Meet More Cats</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cats.map((cat, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                        <img src={cat.image_link} alt={cat.breed} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-xl font-semibold">{cat.breed}</h2>
                        <p>{cat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    ); */
}