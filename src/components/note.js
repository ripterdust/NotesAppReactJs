import React from 'react';



const Note = ({ Data, Index}) => {

	const deleteNote = () => {

		console.log(Index)

	}


	return <div className="col-sm-4 card" key={Index}>

		<div className="card-body">

			<div className="card-title">{Data}</div>
			<button className="btn btn-primary" onClick={deleteNote}>Eliminar</button>
		</div>

	</div>

}

export default Note;
