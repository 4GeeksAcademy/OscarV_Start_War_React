import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [planet, setPlanet] = useState({});

  useEffect(() => { 
    fetch("https://swapi.dev/api/planets/"+ params.planet_id)
      .then((response) => response.json())
      .then((data)=> setPlanet(data)  )
        },[])

  return (

    <div className="jumbotron">

    
        <div className="row">

                  <div className="col-4 p-1">
                    <img src={rigoImage} className="img-fluid w-50" alt="" />
                  </div>

                  <div className="col-4 p-1">
                      <h1 className="display-4">{planet.name}</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                        Praesent libero. Sed cursus ante dapibus diam.
                      </p>
                  </div>

                  <div className="col-4 p-1">
                              <p></p>
                  </div>
        </div>

                  <hr className="my-12" />
      
                <table className="table table-borderless">
                      <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Climate</th>
                            <th scope="col">Population</th>
                            <th scope="col">Orbital Period</th>
                            <th scope="col">Rotation Period</th>
                            <th scope="col">Diameter</th>
                          </tr>
                      </thead>
                      <tbody>
                            <tr>
                              <td>{planet.name}</td>
                              <td>{planet.climate}</td>
                              <td>{planet.population}</td>
                              <td>{planet.orbital_period}</td>
                              <td>{planet.rotation_period}</td>
                              <td>{planet.diameter}</td>
                            </tr>
                      </tbody>
                </table>

                <Link to="/">
                  <span className="btn btn-primary btn-lg" role="button">Back home</span>
                </Link>
   
    </div>
  );
};

Planets.propTypes = {
    match: PropTypes.object
};
