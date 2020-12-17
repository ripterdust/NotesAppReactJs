import React from 'react';

import Note from './note';

const GridNotes = ({ Data, ModData }) => {
	return <div className="row">

		{

			Data.map((elem, index) => <Note Data={elem} Index={index} ModData={ModData}/>)

		}

	</div>

};



export default GridNotes;

