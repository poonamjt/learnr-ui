import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        width: "150px",
        fontSize: "20px",
        fontFamily: 'sans-serif'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class AdminHeader extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };



    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>

                <AppBar position="static" style={{background: "#1a73ba"}}>
                    <Toolbar>

                        <Typography variant="h6" color="inherit" className={classes.grow} >
                            LEARNR
                        </Typography>
                        <div style={{     fontSize: "12px",
                            paddingBottom: "4px",
                            paddingLeft: "14px",
                            paddingTop: "4px",
                            border: "solid 1px #afafaf",
                            paddingRight: "14px",
                            fontFamily: 'sans-serif'}}>
                            ADMIN
                        </div>
                        {auth && (
                            <div >
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    style={{float : "right"}}
                                    color="inherit">

                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>Log Out</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

AdminHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminHeader);
