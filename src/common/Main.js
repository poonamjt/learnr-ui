import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import RoutingComponent from "../home/HomeComponent";
import AdminComponent from "../admin/AdminComponent";
import TrainerComponent from "../trainer/TrainerComponent";
import ParticipantComponent from "../participant/ParticipantComponent";
import TrainingComponent from "../trainings/TrainingComponent";
import employeeReducer from "../reducer/employeeReducer";


const mapStateToProps = (state) => {
  return {employee : state.employeeReducer.employee};
};

class Main extends React.Component {

    render() {
        const role = this.props.employee.role;
            return (

                <Switch>

                    {/*<Route exact path='/admin' component={AdminComponent}/>*/}
                    {/*<Route path='/trainer' component={TrainerComponent}/>*/}
                    {/*<Route path='/participant' component={ParticipantComponent}/>*/}

                    <Route exact path='/' component={RoutingComponent}/>
                    <Route path='/admin' render={() =>
                        (role==='admin') ?<AdminComponent/> : <Redirect to="/"/>}/>
                    <Route path='/trainer' render={() =>
                        (role==='trainer') ?<TrainerComponent/> : <Redirect to="/"/>}/>
                    <Route path='/participant' render={() =>
                        (role==='participant') ?<ParticipantComponent/> : <Redirect to="/"/>}/>

                    <Route path='/trainings' component={TrainingComponent}/>
                </Switch>
            );
    }
}

const LoginComponent = connect(mapStateToProps)(Main);
//const LoginComponent = connect(mapStateToProps,mapDispatchToProps)(Main);

export default withRouter(LoginComponent);
