import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../../../utils/validateEmails';
import formFields from '../formFields';

function SurveyForm({ handleSubmit, onSurveySubmit }) {
	function renderFields() {
		return formFields.map(({ label, name }) => (
			<Field
				key={name}
				component={SurveyField}
				type="text"
				label={label}
				name={name}
			/>
		));
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSurveySubmit)}>
				{renderFields()}
				<Link to="/surveys" className="grey lighten-1 btn-flat white-text">
					Cancel
				</Link>
				<button type="submit" className="red accent-2 btn-flat right white-text">
					Next
					<i className="material-icons right">done</i>
				</button>
			</form>
		</div>
	);
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || '');

	formFields.forEach(({ name }) => {
		if (!values[name])
			errors[name] = 'You must provide a value';
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);
