import React from "react";
import { PureComponent } from "react";
class User extends PureComponent{

    render(){
        console.log("user component rerendering")
        return(
            <>
            
            <h1>User component{this.props.count}</h1>
            
            </>
        )
    }
}

export default User