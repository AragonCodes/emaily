import types from './types';

const fetchUser = (user) => ({
	type: types.FETCH_USER,
	payload: user
});

export default {
	fetchUser
}