import React , {useEffect, useState, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {CardPeople, CardPlanets} from "../component/cards.js";
import { Context } from "../store/appContext.js"

export const Home = () => {

	const { store, actions } = useContext(Context);

	return(

	<div className="box">


		<div className="people">
				<h5>Characters</h5>
			
			<div className="row flex-row flex-nowrap" style={{overflowX:"auto"}}>

				{store.people.length > 0 ? (
				store.people.map((anyPeople) => (
				<CardPeople key={anyPeople.url}
				uid={anyPeople.url.replace('https://swapi.dev/api/people/','').replace('/','')} 
				name={anyPeople.name} gender={anyPeople.gender} hair_color ={anyPeople.hair_color}  eye_color = {anyPeople.eye_color}  />
				))
				) : (
				<p>Cargando...</p> // // si hay data entonces se ejecuta el map en caso contrario(:) se ejecuta el <p></p>//
				)}
			</div>
			
		</div>

		<div className="planets">
				<h5>Planets</h5>
			
			<div className="row flex-row flex-nowrap" style={{overflowX:"auto"}}>

				{store.planets.length > 0 ? (
				store.planets.map((anyPlanets) => (
				<CardPlanets key={anyPlanets.url}
				uid={anyPlanets.url.replace('https://swapi.dev/api/planets/','').replace('/','')}  
				name={anyPlanets.name} population={anyPlanets.population} terrain={anyPlanets.terrain} />
				))
				) : (
				<p>Cargando...</p> // // si hay data entonces se ejecuta el map en caso contrario(:) se ejecuta el <p></p>//
				)}
			</div>
		</div>


    </div>

);
};