import React from "react";
import SimpleExpansionPanel from "./SimpleExpansionPanel";
import {fetchTraining} from "../actions/TrainingAction";
import connect from "react-redux/es/connect/connect";
import store from "../store/store";

const styles = {
    float: "left",
    width: "25%"
};

const styles1 = {
   float: "right",
    width: "75%"
};

const mapDispatchToProps = dispatch => {
    console.log("inside mapDispatchToProps");
    return {
        fetchTraining: () => dispatch(fetchTraining()).then(console.log("Hiiiiiiiiiii",store.state))
    };
};

const mapStateToProps = (state) => {
    console.log("inside mapStateToProps----",state.trainings);
    return {trainings : state.trainings};
};


class TrainingComponent extends React.Component {
    constructor(props)
    {
        super(props);
        this.props.fetchTraining();
    }

    render() {
        console.log("******** ->",this.props.trainings)
        return (
            <div>
                <div style={styles}>abc</div>
                <div style={styles1}><h3>TRAININGS</h3><SimpleExpansionPanel/></div>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TrainingComponent);