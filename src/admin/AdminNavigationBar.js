import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';


class SimpleTabs extends React.Component {
    state = {
        value: 2,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        return (
            <Paper square>

                <Tabs
                    value={this.state.value}
                    indicatorColor="primary"
                    style={{color: "#1a73ba", fontSize:'12px', fontFamily: 'sans-serif'}}
                    onChange={this.handleChange}
                >
                    <Tab label="Trainings"/>
                    <Tab label="Participants"/>
                    <Tab label="Trainers"/>
                </Tabs>
            </Paper>

        );
    }
}

export default SimpleTabs;
