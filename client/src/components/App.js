import React, {useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const Landing = () => <h2>Landing</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const App = ({fetchUser}) => {

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<div className="container">
			<BrowserRouter>
				<div>
					<Header/>
					<Route exact path="/" component={Landing}/>
					<Route exact path="/surveys" component={Dashboard}/>
					<Route exact path="/surveys/new" component={SurveyNew}/>
				</div>
			</BrowserRouter>
		</div>
	);
};

// const mapStateToProps = state => {
// 	return ({
// 		user: state.auth,
// 	});
// };

export default connect(null, {fetchUser})(App);