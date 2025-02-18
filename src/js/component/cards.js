import React, {useEffect , useContext, useActionState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useLinkClickHandler } from "react-router-dom";
import { Context } from "../store/appContext.js"


export const CardPeople = (props) => {

    const { store, actions } = useContext(Context);

    return(
                
        <div className="card" style={{ width: '18rem' }}>
            <img src={rigoImage} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title"> {props.name} </h5>
            <p className="card-text"> Gender: {props.gender} </p>
            <p className="card-text"> Hair Color: {props.hair_color} </p>
            <p className="card-text"> Eye-Color: {props.eye_color} </p>
            
            <div className="d-flex justify-content-between">

            <Link to={"/people/"+ props.uid} className="btn btn-primary">Learn More! </Link>

           <button type="button" className="btn btn-outline-danger" onClick ={()=> actions.fav_People_Clic(props.name)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385C2.68 9.511 5.92 12.81 8 15c2.08-2.19 5.32-5.49 6.286-7.562.955-1.885.837-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z"/>
                </svg>
           </button>
            </div>

            </div>
        </div>
    );  
};

export const CardPlanets = (props) => {

    const { store, actions } = useContext(Context);

    return(
                
        <div className="card" style={{ width: '18rem' }}>
            <img src={rigoImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> {props.name} </h5>
                <p className="card-text"> Population: {props.population} </p>
                <p className="card-text"> Terrain: {props.terrain} </p>
                
           
           
           <div className="d-flex justify-content-between">
                <Link to={"/planets/"+ props.uid} className="btn btn-primary">Learn More! </Link>

                <button onClick={() => actions.fav_Planets_Clic(props.name)} className="btn btn-outline-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385C2.68 9.511 5.92 12.81 8 15c2.08-2.19 5.32-5.49 6.286-7.562.955-1.885.837-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z"/>
                    </svg>
                </button>
            </div>

            </div>
        </div>
    );  
};


