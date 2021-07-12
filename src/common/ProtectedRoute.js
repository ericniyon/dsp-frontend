import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import {connect} from 'react-redux'


const ProtectedRoute = ({component: Component, auth, ...rest}) => (
    <Route 
        {...rest}
        render = {props => {
            if(!auth.isAuthenticated){
                return <Redirect to="/login" />
            }
            else{
                return <Component {...props} />
            }
        }}
    
    />   
)

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps)(ProtectedRoute);
