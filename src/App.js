import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import AllNotes from './components/AllNotes';
import Create from './components/create';


const App = () => {
	
	const [note, setNote] = useState(''); 

		return <>
			
			<Router>
				 <div className="navbar navbar-expand-lg navbar-dark bg-dark">
						
						<div className="container-md">
							 <Link to="/" className="navbar-brand">Notas</Link>
							 <div className="navbar-nav">

									<li className="nav-item">
										 <Link className="nav-link" to="/">Inicio</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/crear">Crear nota</Link>
									</li>

							 </div>

						</div>

				 </div>
				 <Switch>
						<div className="container mt-5">
							<Route exact path="/">
								<AllNotes notes={note} ModNotes={setNote}/>
							</Route>
							 <Route exact path="/crear">
								<Create noteState={setNote}/>
							 </Route>
						</div>

				 </Switch>

			</Router>
	 
	 </>

}

export default App;
