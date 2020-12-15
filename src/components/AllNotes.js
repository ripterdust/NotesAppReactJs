import React from 'react';


const AllNotes = ({notes}) => {


	if(notes){

		return <div>

		</div>


	} else{

		return <div className="alert alert-danger">Por favor crea una nueva nota</div>

	}
	 


}


export default AllNotes
