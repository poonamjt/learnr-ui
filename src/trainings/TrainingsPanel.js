import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
    fontColor: '#1a73ba',
};

function TrainingsPanel(props) {
    const {trainings} = props;

    return (
        <div style={{backgroundColor:'#f0f0f0'}}>

            {trainings.map(training => {
                return (
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                           <div style={{width:'100%'}}>
                            <div  style={{float:'left',color: "#1a73ba", fontSize:'14px', width:'20%'}}>{training.trainingName}</div>
                            <div style={{fontSize:'10px',color:"#212121",width:'70%'}}>{training.trainingForRoles}</div>
                            <div style={{fontSize:'10px',color:"#505050",float:'right',width:'10%'}}><b>{training.participantCount}</b> Interested</div>
                           </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div style={{width:'100%',backgroundColor:'#fafafa',color: "#000000",height:'22px'}}>
                                <div  style={{float:'left', fontSize:'12px', width:'30%'}}>{"12/11/2011"}</div>
                                <div  style={{float:'left', fontSize:'12px', width:'20%'}}>{training.location}</div>
                                <div  style={{float:'left', fontSize:'12px', width:'25%'}}>{training.trainerCount} TRAINERS</div>
                                <div  style={{float:'left', fontSize:'12px', width:'25%'}}>{training.participantCount} PARTICIPANTS</div>

                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>)}
                    )
            }
        </div>
    );
}


TrainingsPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    trainings: PropTypes.array.isRequired
};

export default withStyles(styles)(TrainingsPanel);