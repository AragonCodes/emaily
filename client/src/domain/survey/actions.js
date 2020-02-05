import types from './types';

const fetchSurveys = (surveys) => ({
	type: types.FETCH_SURVEYS,
	payload: surveys
});

export default {
	fetchSurveys
}