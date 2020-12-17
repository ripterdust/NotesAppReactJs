import React, { useState } from 'react';


const Create = ({noteState}) => {
	
	const [ input, setInput ] = useState('');
	
	const inputValue = (e) => {

		setInput(e.target.value)

	};

	const saveNote = (e) => {
	
		e.preventDefault();
		noteState(note => [input, ...note])
		setInput('');
	};

	
	return <>
	
		<form action="" onSubmit={ saveNote } className="form card p-5 mt-3"> 
			<div className="mb-4">
				<h2>Crear nueva nota</h2>
				<br/>
				<input 
					type="text" 
					id="" 
					onChange={inputValue} 
					value={input} 
					className="form-control" 
					placeholder="Ingrese su nueva nota"/>
			</div>
			<input type="submit" value="Crear" className="btn btn-outline-primary"/>
		</form>
	</>

}

export default Create;
