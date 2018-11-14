import React from 'react';
import {ROLE} from "../common/constants";
import {connect} from "react-redux";
import {fetchEmployee} from "../actions/EmployeeAction";

const mapDispatchToProps = dispatch => {
    return {
        fetchEmployee: id => dispatch(fetchEmployee(id))
    };
};

const mapStateToProps = (state) => {
    return {employee : state.employeeReducer.employee};
};

class HomeComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.props.fetchEmployee("admin");
    }

    setRole(){

        switch( this.props.employee.role ){
            case ROLE.ADMIN :
                this.props.history.push("/admin");
                break;
            case ROLE.TRAINER :
                this.props.history.push("/trainer");
                break;
            default :
                this.props.history.push("/participant");
                break;
        }
    }

    render() {
        if(this.props.employee.role) {
            this.setRole();
            return(
                <div></div>
            );
        }
        return(
            <div>Loading...</div>
        );
    }
}

const RoutingComponent =  connect(mapStateToProps, mapDispatchToProps)(HomeComponent);


export default RoutingComponent;
