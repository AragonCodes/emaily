import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LandingComponent from './Landing';

const mapStateToProps = ({ auth }) => {
	return { auth };
}
const LandingContainer = connect(
	mapStateToProps
)(withRouter(LandingComponent));

export default LandingContainer;