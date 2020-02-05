import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ surveys, fetchSurveys }) {
	useEffect(() => {
		fetchSurveys();
	}, []);

	function renderSurveyList() {
		if (surveys.length === 0) return (<h1 className={'center'}>No Surveys Found</h1>);

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
									<a>Yes: {survey.yes}</a>
									<a>No: {survey.no}</a>
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
				<Link to="/surveys/new" className="btn-floating btn-large red">
					<i className="material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
