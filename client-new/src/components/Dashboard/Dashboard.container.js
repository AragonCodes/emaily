import { connect } from 'react-redux';
import { surveyOperations } from '../../domain/survey';
import DashboardComponent from './Dashboard';

const mapStateToProps = ({ surveys }) => {
	return { surveys };
}

const mapDispatchToProps = (dispatch) => {
	const fetchSurveys = () => {
		dispatch(surveyOperations.fetchSurveys())
	};

	return { fetchSurveys };
};

const DashboardContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DashboardComponent);

export default DashboardContainer;