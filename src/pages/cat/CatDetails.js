
export default function CatDetails({catData}) {
    return (
        <div>
            <h2>{catData.breed} Cat</h2>
            <p>Breed: {catData.breed}</p>
            <p>Playfullness: {catData.playfullness  <6 ? "Not very Playful" : "Very Playful"}</p>
        </div>
    );
}