import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeComponent from "../home/HomeComponent";
import AdminComponent from "../admin/AdminComponent";
import TrainerComponent from "../trainer/TrainerComponent";
import ParticipantComponent from "../participant/ParticipantComponent";


class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={HomeComponent}/>
                    <Route path='/admin' component={AdminComponent}/>
                    <Route path='/trainer' component={TrainerComponent}/>
                    <Route path='/participant' component={ParticipantComponent}/>
                </Switch>
            </main>
        );
    }
}


export default Main;
