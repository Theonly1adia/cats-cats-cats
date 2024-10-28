
export default function CatDetails({catData}) {
    return (
        <div>
            <h2 className="text-center text-5xl my-3">{catData.name} Cat</h2>
            <div className="font-bold text-black text-center">
                <p>{catData.children_friendly < 5 ? "Not Great with Kids" : "Great with Kids"}</p>
                <p>{catData.playfullness  <6 ? "Not very Playful" : "Very Playful"}</p>
                <p>{catData.other_pets_friendly <5 ? "Does Not Get Along with other Pets" : "Great with other Pets"}</p>
            </div>
        </div>
    );
}