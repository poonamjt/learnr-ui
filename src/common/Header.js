import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = {
    background: '#1a73ba',
};

class SimpleTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;

        return (
            <div>
                <AppBar position="static">
                    <Tabs style={styles} value={value} onChange={this.handleChange}>
                        <Tab label="Admin"/>
                        <Tab label="Participants"/>
                        <Tab label="Trainers"/>
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                    <div>
                        <employeeClient/>
                    </div>
                </TabContainer>}
                {value === 0 && <TabContainer>Admin</TabContainer>}
                {value === 1 && <TabContainer>Item Two</TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);