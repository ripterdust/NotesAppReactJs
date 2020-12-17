import React from 'react';

import GridNotes from './GridNotes';

const AllNotes = ({notes}) => {


	if(notes){

		return <GridNotes Data={ notes } className="w-100"/>

	}else{

		return <div className="alert alert-danger">Por favor crea una nueva nota</div>

	}
	 


}


export default AllNotes
