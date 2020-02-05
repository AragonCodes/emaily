import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../Header';
import Landing from '../Landing';
import Dashboard from '../Dashboard';
import SurveyNew from '../SurveyNew';

function App({ fetchUser }) {
	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<div style={{ minHeight: '100vh', minWidth: '100vw' }}>
			<BrowserRouter>
				<Header />
				<div className="container" style={{ minHeight: '100%' }}>
					<Route exact path="/" component={Landing} />
					<Route exact path="/surveys" component={Dashboard} />
					<Route path="/surveys/new" component={SurveyNew} />
				</div>
			</BrowserRouter>
		</div >
	);
}

export default App;
