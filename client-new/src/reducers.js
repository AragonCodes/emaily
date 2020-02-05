import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './domain/auth';
import surveyReducer from './domain/survey';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	surveys: surveyReducer
});
