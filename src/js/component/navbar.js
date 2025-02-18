import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"
import React, {useEffect , useState, useContext, useActionState} from "react";
import StarWars from "../../img/Star-Wars.jpg";

export const Navbar = () => {

		const { store, actions } = useContext(Context);

		console.log("Estado actual del store:", store);

	return (
		<nav className="navbar navbar-light bg-light mb-3">

			<div>
				<Link to="/">
				<img src={StarWars} className="card-img-top" alt="logo" style={{ width: "90px", height: "50px" }} />
				</Link>
			</div>

			<div className="ml-auto">

			
				
				<div className="dropdown">
					<button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown"
					 aria-expanded="false">
					Favorites ({(store.fav_People?.length || 0) + (store.fav_Planets?.length || 0)})
					</button>
					<ul className="dropdown-menu">
						{store.fav_People.map((item, index) => (
							<li key={index} className="d-flex justify-content-between align-items-center">
								<p className="m-0">{item}</p>
								<button 
									className="btn btn-sm btn-danger ms-2" 
									onClick={() => actions.fav_People_Clic(item)}>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
									<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
									</svg>
								</button>
							</li>
						))}

						{store.fav_Planets.map((item, index) => (
							<li key={index} className="d-flex justify-content-between align-items-center">
								<p className="m-0">{item}</p>
								<button 
									className="btn btn-sm btn-danger ms-2" 
									onClick={() => actions.fav_Planets_Clic(item)}>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
									<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
									</svg>
								</button>
							</li>
						))}
					</ul>
				</div>


			</div>
		</nav>
	);
};
