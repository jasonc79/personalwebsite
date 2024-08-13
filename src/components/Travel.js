import React from "react";
import 'react-slideshow-image/dist/styles.css';
import img8 from '../images/DSC_2479.JPG';
import img1 from '../images/DSC_2645.JPG';
import img9 from '../images/DSC_2660.JPG';
import img2 from '../images/DSC_2788.JPG';
import img5 from '../images/DSC_2830.JPG';
import img3 from '../images/DSC_3013.JPG';
import img7 from '../images/DSC_3319.JPG';
import img6 from '../images/DSC_3336.JPG';
import img4 from '../images/DSC_3881.JPG';
import './Travel.css';
// function onNameChange(event) {
//     this.setState({name: event.target.value})
// }
// function onEmailChange(event) {
//     this.setState({email: event.target.value})
// }
// function onMessageChange(event) {
//     this.setState({message: event.target.value})
// }
// function handleSubmit(event) {
// }

const Travel = () => {
    const images = [
        {src: img1, text:"Victoria Square in Birmingham UK"},
        {src: img2, text:"First Exchange Trip in Cardiff"},
        {src: img3, text:"Shambles in York"},
        {src: img4, text:"Ice Caves in Iceland"},
        {src: img5, text:"Random Street in York with Friends"},
        {src: img6, text:"Viewpoint in Edinburgh"},
        {src: img7, text:"Group photo in Edinburgh"},
        {src: img8, text:"London"},
        {src: img9, text:"Viewpoint in Birmingham UK"}
    ];
    return (
    <>
        <div className='travel-container'>
            <h1 className='travel-title'> I've been to 20 countries so far... </h1>
            <div className='grid-travel-container'>
            {images.map((e, index) => (
            <div key={index} className={`grid-travel-item grid-travel-item-${index+1}`}>
                <div className='image-container'>
                        <img className={`img img-${index + 1}`} src={e.src}>
                        </img>
                        <div className="overlay">
                            <div className="text">{e.text}</div>
                        </div>
                </div>
            </div>
            ))}
            </div>
        </div>
    </>
    );
};
export default Travel;
