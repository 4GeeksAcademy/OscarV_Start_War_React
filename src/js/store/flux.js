const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [	],
			people:[],
			planets:[],
			fav_People:[],
			fav_Planets:[],
		},
		actions: {


			fav_People_Clic: (name) => {
				if (!name || name.trim() === "") return;  // el trim saca los valores vacios
			
				const store = getStore();
				if (store.fav_People.includes(name)) {
					setStore({
						fav_People: store.fav_People.filter((elemento) => elemento !== name)
					});
				} else {
					setStore({ fav_People: [...store.fav_People, name] });
				}
			},
			

			fav_Planets_Clic: (planetName) => {
				if (!planetName || planetName.trim() === "") return;  // el trim saca los valores vacios
			
				const store = getStore();
				if (store.fav_Planets.includes(planetName)) {
					setStore({
						fav_Planets: store.fav_Planets.filter((elemento) => elemento !== planetName)
					});
				} else {
					setStore({ fav_Planets: [...store.fav_Planets, planetName] });
				}
			},
			



			loadSomeDataPeople: () => {
				console.log("se cargo Apis Personajes....")
				fetch("https://swapi.dev/api/people")
				.then(response => response.json())
				.then(data => {
				setStore({ people: data.results }); 
				  })
			},

			loadSomeDataPlanets: () => {
				console.log("se cargo Apis Planets....")
				fetch("https://swapi.dev/api/planets")
				.then(response => response.json())
				.then(data => {
				setStore({ planets: data.results }); 
				  })
			},




			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
