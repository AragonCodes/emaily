import axios from 'axios';
import Creators from './actions';

const fetchUserAction = Creators.fetchUser;

const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	console.log('fetching user…');
	dispatch(fetchUserAction(res.data));
};

const handleToken = token => async dispatch => {
	const res = await axios.post('/api/stripe', token);

	dispatch(fetchUserAction(res.data));
};

export default {
	fetchUser,
	handleToken
}