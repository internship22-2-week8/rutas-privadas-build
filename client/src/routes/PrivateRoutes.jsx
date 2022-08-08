import React,{Component} from "react";
import {Navigate} from "react-router-dom";

export default class PrivateRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      auth: false,
      role: "",
    };
  }

setData=(data)=>{
  this.setState({auth: data});
}

  componentDidMount() {
    this.setState({auth:true})
    this.setState({role:"basic"})
    this.setState({loading: false});
    //this.setData(true);
  }

  render() {
    if(this.state.loading){
      return <div>Loading...</div>
    }else{
      const {component: RouteComponent, role} = this.props;
      if (this.state.auth) {
        return this.state.role == role ? <RouteComponent/>: <h1>No tienes acceso</h1>;
      }
      else{
        return <Navigate to="/login" />
      }
    }
    
  }
}