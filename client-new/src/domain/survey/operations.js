import Creators from './actions';
import { authOperations } from '../auth';
import axios from 'axios';

const fetchSurveysAction = Creators.fetchSurveys;

const submitSurvey = (values, history) => async dispatch => {
	await axios.post('/api/surveys', values);

	history.push('/surveys');
	dispatch(authOperations.fetchUser());
};

const fetchSurveys = () => async dispatch => {
	const res = await axios.get('/api/surveys');

	dispatch(fetchSurveysAction(res.data));
};

export default {
	submitSurvey,
	fetchSurveys
}
