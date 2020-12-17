import React from 'react';
import {Link} from 'react-router-dom'

import GridNotes from './GridNotes';

const AllNotes = ({notes, ModNotes}) => {


	if(notes){

		return <GridNotes Data={ notes } ModData={ModNotes}/>

	}else{

		return <div>
			<div className="alert alert-danger">Por favor crea una nueva nota</div>
			<Link to='/crear' className="btn btn-primary">Crear una nueva</Link>
		</div>	

	}
	 


}


export default AllNotes
