import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";


//Cuando se de clic en boton diriguira a esta lugar...../////

export const People = (props) => {

    const { store, actions } = useContext(Context);
    const params = useParams();
     console.log(params);
    
    const[character, setCharacter]=useState ({})


    useEffect(()=>{
        fetch("https://swapi.dev/api/people/"+params.people_id)
        .then((response)=>response.json())
        .then((data)=> setCharacter(data)  )
         },[])

    return (
        <div className="jumbotron">

            <div className="row">
                <div className="col-4 p-1">
                    <img src={rigoImage} className="img-fluid w-40" alt=""/>
                    
                </div>

                <div className="col-4 p-1">
                    <h1 className="display-4">{character.name}</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam
                    </p>        

                </div>
                <div className="col-4 p-1">
                    <p>
                    </p>        

                </div>
            </div>

            <div>
            <hr className="my-12" />

            <table className="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Birth Year</th>
                        <th scope="col">Height</th>
                        <th scope="col">Skin Color</th>
                        <th scope="col">Eye Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        
                        <td>{character.name}</td>
                        <td>{character.birth_year}</td>
                        <td>{character.gender}</td>
                        <td>{character.height}</td>
                        <td>{character.skin_color}</td>
                        </tr>
                                             
                    </tbody>
            </table>
            </div>

            <Link to="/">
                 <span className="btn btn-primary btn-lg" href="#" role="button">  Back home </span>
            </Link>

        </div>
    );
};

People.propTypes = {
    match: PropTypes.object
};
