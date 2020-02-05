import { connect } from 'react-redux';
import HeaderComponent from './Header';

function mapStateToProps({ auth }) {
	return { auth };
}

const HeaderContainer = connect(
	mapStateToProps
)(HeaderComponent);

export default HeaderContainer;