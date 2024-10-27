import React, { useState, useEffect } from "react";
import CatImage from "./CatImage";
import CatDetails from "./CatDetails"
console.log(catData);


export default function Cat() {
   const [catData, setCat] = useState (null);
   

   useEffect(() => {
    fetch('https://cats-cats-cats-demo.deno.dev/cats/abyssinian')
        .then(response =>  response.json())
        .then(data => {
            setCat (data);
        })
        .catch(error => console.error("Error fetching cat data:", error));
    }, []);
    if (!catData){
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>
            Hi, I'm a cat.
            </h1>
            <CatImage catData={catData}/>
            <CatDetails catData={catData}/>
        </div>
    );
}
