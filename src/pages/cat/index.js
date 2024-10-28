import React, { useState, useEffect } from "react";
import Header from "./CatHeader";
import CatImage from "./CatImage";
import CatDetails from "./CatDetails";
import CatHeader from "./CatHeader";



export default function Cat() {
   const [catData, setCat] = useState (null);
   

   useEffect(() => {
    fetch('https://cats-cats-cats-demo.deno.dev/cats/birman')
        .then(response =>  response.json())
        .then(data => {
            setCat (data);
            console.log(data);
        })
        .catch(error => console.error("Error fetching cat data:", error));
    }, []);

    if (!catData){
        return <p>Loading...</p>;
    }

    return (
        <div className="bg-blue-200 min-h-screen">
            <CatHeader/>
        <div className="my-6">
            <CatImage catData={catData}/>
        </div>
            <CatDetails catData={catData}/>
        </div>
    );
}
