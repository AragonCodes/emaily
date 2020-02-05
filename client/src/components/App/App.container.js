import { connect } from 'react-redux';
import AppComponent from './App';

import { authOperations } from '../../domain/auth';

const mapDispatchToProps = (dispatch) => {
	const fetchUser = () => {
		dispatch(authOperations.fetchUser())
	};

	return { fetchUser };
};

const AppContainer = connect(
	null,
	mapDispatchToProps
)(AppComponent);

export default AppContainer;