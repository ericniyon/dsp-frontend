import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authAction';
import PropTypes from 'prop-types';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isLoading: PropTypes.bool
  };

  onChange = e => this.setState({[e.target.name]: e.target.value});
  
  onSubmit = e => {
    e.preventDefault();
    let { isLoading } = this.props;
    this.setState({isLoading:true})
    console.log(isLoading)
    this.props.login(this.state.username, this.state.password)
    
  }



  render() {
    const {username, password} = this.state
    if(this.props.isAuthenticated){
      return <Redirect to="/" />
    }
    return (
      <Fragment>
        <div className='d-flex align-items-center justify-content-center bg-br-primary ht-100v'>
          <div className='login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white rounded shadow-base'>
            <div className='signin-logo tx-center tx-28 tx-bold tx-inverse'>
              <span className='tx-normal'>[</span> DSP{' '}
              <span className='tx-info'>Group</span>{' '}
              <span className='tx-normal'>]</span>
            </div>
            <div className='tx-center mg-b-60'>Login Form</div>

            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label>Username</label>
                <input
                  type='text'
                  name='username'
                  className='form-control'
                  placeholder='Enter your username'
                  value={username}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Enter your password'
                  name='password'
                  value={password}
                  onChange={this.onChange}
                />
                <a href='' className='tx-info tx-12 d-block mg-t-10'>
                  Forgot password?
                </a>
              </div>
              <button type='submit' className='btn btn-info btn-block'>
                Sign In
                {this.props.isLoading && (
                  <img src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' />
                )}
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  isLoading: state.authReducer.isLoading
})


export default connect(mapStateToProps, {login})(Login);
