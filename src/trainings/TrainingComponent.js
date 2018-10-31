import React from "react";

const styles = {
    float: "left",
    width: "250px"
};

class TrainingComponent extends React.Component {


    render() {
        return (
            <div>
                <div style={styles}>abc</div>
                <div> <h3><b>TRAININGS</b></h3></div>
            </div>
        );
    }
}


export default TrainingComponent;