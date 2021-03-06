import React from 'react';
import Planet from './Planet.js';

const PlanetList = ({ planets }) => {
	
		return (
			<div>

				{
				planets.map((planet, i) => {
					return (
						<Planet
							
							key={i}
							name={planets[i].name}
							climate={planets[i].climate}
							population={planets[i].population}
							
							/>
						);
				})

			}
			</div>
	);
}




export default PlanetList;
