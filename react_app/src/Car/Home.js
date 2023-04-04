import { useState } from "react";
import Car from "./Car"
import 	CarList from "./CarList"

function Home() {
	const [Cars, setCars]= useState([]);

	var setCarState = function (data) {
		setCars([...Cars, data]);
	};

	return (
		<div className="container-fluid">
			<div className="row justify-content-evenly align-items-center" style={{"height": "98vh"}}>
				<div className="col-4 shadow p-5 text-center">
					<Car setCarState={setCarState} />		
				</div>
				<div className="col-6">
					<CarList Cars={Cars}/>		
				</div>
			</div>
		</div>
	);
}

export default Home;