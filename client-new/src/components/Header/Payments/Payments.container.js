import { connect } from 'react-redux';
import PaymentsComponent from './Payments';

import { authOperations } from '../../../domain/auth';

const mapDispatchToProps = (dispatch) => {
	const handleToken = (token) => {
		dispatch(authOperations.handleToken(token))
	};

	return { handleToken };
};

const PaymentsContainer = connect(
	null,
	mapDispatchToProps
)(PaymentsComponent);

export default PaymentsContainer;