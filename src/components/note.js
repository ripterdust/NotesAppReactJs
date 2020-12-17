import React from 'react';

import './note.css';

const Note = ({ Data, Index, ModData}) => {

	const deleteNote = () => {

		ModData(data => {
			let array = data;
			let nestedArray = array.filter(e => e!== array[Index]);
			
			if(nestedArray.length <= 0) {

				ModData('');

			}else{ModData(nestedArray)}

		});

	}


	return <div className="col-sm-4 mb-4" key={Index} >
	
		<div className="col-mg-4 card">
			<div className="card-body">
				<div className="card-title text-center line-clamp">
					{ Data }
				</div>
				<button className="btn btn-primary btn-block" onClick={deleteNote}>Eliminar</button>
			</div>
			

		</div>
	</div>
}

export default Note;
