import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import RoutingComponent from "../home/HomeComponent";
import AdminComponent from "../admin/AdminComponent";
import TrainerComponent from "../trainer/TrainerComponent";
import ParticipantComponent from "../participant/ParticipantComponent";
import TrainingComponent from "../trainings/TrainingComponent";

const mapStatetoProps = (state) => {
  return {employee : state.employee};
};

class Main extends React.Component {

    render() {
        const role = this.props.employee.role;
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={RoutingComponent}/>
                    <Route path='/admin' render={() =>
                        (role==="admin") ?  <AdminComponent/> : <Redirect to="/"/>}/>

                    <Route path='/trainer' render={() =>
                        (role==="trainer") ?  <TrainerComponent/> : <Redirect to="/"/>}/>

                    <Route path='/participant' render={() =>
                        (role==="participant") ?<ParticipantComponent/> : <Redirect to="/"/>}/>

                    <Route path='/trainings' component={TrainingComponent}/>
                </Switch>
            </main>
        );
    }
}

const LoginComponent = connect(mapStatetoProps)(Main);

export default LoginComponent;
