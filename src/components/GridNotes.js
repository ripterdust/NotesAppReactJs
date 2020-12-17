import React from 'react';

import Note from './note';

const GridNotes = ({ Data }) => {
	return <div className="row align-items-center">

		{

			Data.map((elem, index) => <Note Data={elem} Index={index}/>)

		}

	</div>

};



export default GridNotes;

