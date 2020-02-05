import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ surveys, fetchSurveys }) {
	useEffect(() => {
		fetchSurveys();
	}, []);

	function renderSurveyList() {
		if (surveys.length === 0) return (
			<div className="center">
				<h1 className={'center'}>No surveys found</h1>
				<h4 style={{ margin: '2rem' }}>Start getting feedback form your users…</h4>
				<Link to="/surveys/new" className="btn-large red accent-3">
					Create a new survey
			</Link>
			</div>
		);

		return (
			<div>
				{
					surveys
						.sort((a, b) => (new Date(b.dateSent) - new Date(a.dateSent)))
						.map(survey => (
							<div className="card darken-1" key={survey._id}>
								<div className="card-content">
									<span className="card-title">{survey.title}</span>
									<p>
										{survey.body}
									</p>
									<p className="right">
										Sent On: {new Date(survey.dateSent).toLocaleDateString()}
									</p>
								</div>
								<div className="card-action">
									<a className="red-text text-accent-2">Yes: {survey.yes}</a>
									<a className="red-text text-accent-2">No: {survey.no}</a>
								</div>
							</div>
						))
				}
			</div>
		);
	}

	return (
		<div>
			{renderSurveyList()}
			<div className="fixed-action-btn">
				<Link to="/surveys/new" className="btn-floating pulse btn-large red accent-2">
					<i className="material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
