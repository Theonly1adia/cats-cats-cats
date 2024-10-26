export default function CatImage(props) {
    const imgUrl = props.catData.image_link;
    return <img src={props.catData.image_link} alt="Cat"/>
}