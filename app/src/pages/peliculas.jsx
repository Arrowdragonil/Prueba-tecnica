import { useState } from "react";
import { EffectF } from "../components/EffectF";
import { NavLink } from 'react-router-dom'



const Peliculas = () => {
     let peli = {
        title:"",
        description:"",
        programType:"",
        images:""

    } 

const [newPeli, setNewPeli] = useState({peli});

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [programType, setProgramType] = useState("");
const [images, setImage] = useState("");

const createPeli = (ev) => {
    ev.preventDefault();

    console.log(title, description, programType(), images);
    setNewPeli({
        title: title,
        description: description,
        programType: programType,
        images: images
    })
    console.log(newPeli)
}
    return (
        <>
            <EffectF />
            {/* <div className="home">
        <h2><NavLink to="home"><h3>home</h3></NavLink></h2>
    </div> */}
        </>
    );}
    
    


export default Peliculas;