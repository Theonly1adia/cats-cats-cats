export default function CatImage(props) {
    /* const imgUrl = props.catData.image_link; */

    const img = props.image_link
    return (
    <div className="flex justify-center items center">
        <img src={props.catData.image_link} alt="Cat" className="w-1/2 max-w-xs h-auto border-4 border-gray-500 rounded large"/>
        </div>
    );
}