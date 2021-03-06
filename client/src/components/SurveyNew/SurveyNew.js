// SurveyNew shows SurveyForm and SurveyFormReview
import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './common/SurveyForm';
import SurveyFormReview from './common/SurveyFormReview';

function SurveyNew() {
	const [reviewMode, setReviewMode] = useState(false);

	function renderContent() {
		return reviewMode
			? <SurveyFormReview onCancel={() => setReviewMode(false)} />
			: <SurveyForm onSurveySubmit={() => setReviewMode(true)} />
	}

	return (
		<div className="card-panel">
			<h3 style={{ marginTop: '0' }}>New Survey</h3>
			{renderContent()}
		</div>
	);
}

export default reduxForm({
	form: 'surveyForm'
})(SurveyNew);
