import React, {Component} from 'react';
import {getEmployee} from '../client/EmployeeClient';
import {ROLE} from "../common/constants";
import {connect} from "react-redux";
import {addEmployee} from "../actions/EmployeeAction";

const mapDispatchToProps = dispatch => {
    return {
        addEmployee: employee => dispatch(addEmployee(employee))
    };
};


class HomeComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            employee: {}
        };
    }

    setRole(){
       getEmployee("user1")
           .then((data) => {
               console.log("data--------   ",data);
               this.props.addEmployee(data);
               this.setState({employee: data});
               switch( data.role ){
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
           });
    }
    render(){return(<div>{this.setRole()}</div>)}
}

const RoutingComponent =  connect(null, mapDispatchToProps)(HomeComponent);


export default RoutingComponent;
