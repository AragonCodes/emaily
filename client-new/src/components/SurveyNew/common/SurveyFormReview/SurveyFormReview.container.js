import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { surveyOperations } from '../../../../domain/survey';
import SurveyFormReviewComponent from './SurveyFormReview';

function mapStateToProps({ form }) {
	return { formValues: form.surveyForm.values };
}

const mapDispatchToProps = (dispatch) => {
	const submitSurvey = (values, history) => {
		dispatch(surveyOperations.submitSurvey(values, history));
	};

	return { submitSurvey };
};

const SurveyFormReviewContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(SurveyFormReviewComponent));

export default SurveyFormReviewContainer;