function CarList(props){
	return(
		<>
			<table className="table table-striped table-hover">
				<thead>
					<tr className="table-dark">
						<th>Chasis Number</th>
						<th>Brand</th>
						<th>Price</th>
						<th>Model</th>
						
					</tr>
				</thead>
				<tbody>
					{props.Cars.map(item => 
						<tr>
							<td>{item.ChasisName}</td>	
							<td>{item.Brand}</td>
							<td>{item.Price}</td>
							<td>{item.Model}</td>
						</tr>
					)}
				</tbody>
			</table>		
		</>
	)
}
export default CarList;