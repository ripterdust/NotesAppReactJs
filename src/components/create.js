import React from 'react';


const Create = ({noteState}) => {

	const saveNote = () => {

		noteState(elems => [...elems, 'Hola']);

	};

	
	return <>
	
		<button onClick={saveNote}>Crear</button>


	</>

}

export default Create;
