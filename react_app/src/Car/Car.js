import { useState } from "react";
import "./Style.css";

function Car(props) {
	const [ChasisName, setChasisName] = useState("");
	const [Brand, setBrand] = useState("");
	const [Price, setPrice] = useState("");
	const [Model, setModel] = useState("");

	var handleClick = function () {
		var data = {
		ChasisName:ChasisName,
        Brand:Brand,
        Price:Price,
		Model:Model
		};
		props.setCarState(data);
	};


	return (
		<>
			<input
				type="text"
				placeholder="Enter Chasis name"
				className="form-control form-control-sm"
				value={ChasisName}
				onChange={(event) => setChasisName(event.target.value)}
			/>
			<br />
			<input
				type="text"
				placeholder="Enter Brand name"
				className="form-control form-control-sm"
				value={Brand}
				onChange={(event) => setBrand(event.target.value)}
			/>
			<br />
			<input
				type="text"
				placeholder="Enter price name"
				className="form-control form-control-sm"
				value={Price}
				onChange={(event) => setPrice(event.target.value)}
		/>
		<br/>
			<input
				type="text"
				placeholder="Enter Model name"
				className="form-control form-control-sm"
				value={Model}
				onChange={(event) => setModel(event.target.value)}
			></input>
			< button className="btn btn-primary mybtn" onClick={handleClick}>
				Save
			</button>
		</>
	);
}

export default Car;