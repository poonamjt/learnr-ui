import React from 'react';
import NavigationBar from "./AdminNavigationBar";
import TrainingComponent from "../trainings/TrainingComponent";
import ParticipantComponent from "./participant/ParticipantComponent";
import TrainerComponent from "./trainer/TrainerComponent";
import AdminHeader from "./AdminHeader";

class AdminComponent extends  React.Component {

    constructor(props)
    {
        super(props);
        this.state={
            currentState: 0
        }
    };

    handleOnSelect = (value) => {
        this.setState({
           currentState: value
        });
    };

    render() {
        return (
           <div>
               <AdminHeader/>
               <NavigationBar match={this.props.match} onChange={this.handleOnSelect}/>
                <div>
               {this.state.currentState === 0 && <TrainingComponent/>}
               {this.state.currentState === 1 && <ParticipantComponent/>}
               {this.state.currentState === 2 && <TrainerComponent/>}
                </div>
           </div>
        );
    }
}

export default AdminComponent;