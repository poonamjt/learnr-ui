import React from "react";
import TrainingsPanel from "./TrainingsPanel";
import {fetchTraining} from "../actions/TrainingAction";
import connect from "react-redux/es/connect/connect";
import Typography from "@material-ui/core/Typography/Typography";

const styles = {
    float: "left",
    width: "25%"
};

const styles1 = {
   float: "right",
    width: "75%",
    height:"672px",
    backgroundColor:"#f0f0f0",
    //paddingLeft:"10px"
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTraining: () => dispatch(fetchTraining())
    };
};

const mapStateToProps = (state) => {
    return {trainings : state.trainingReducer.trainings};
};


class TrainingComponent extends React.Component {
    constructor(props)
    {
        super(props);
        this.props.fetchTraining();
    }

    render() {
        return (
            <div>
                <div style={styles}>abc</div>
                <div style={styles1}><h4>&nbsp;&nbsp;TRAININGS</h4><TrainingsPanel trainings={this.props.trainings}/></div>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TrainingComponent);