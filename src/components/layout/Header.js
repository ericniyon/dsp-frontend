import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../redux/actions/authAction';


class Header extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
    }
    render() {
        const {isAuthenticated, user} = this.props.auth
        return (
          <Fragment>
            <div class='br-header'>
              <div class='br-header-left'>
                <div class='navicon-left hidden-md-down'>
                  <a id='btnLeftMenu' href=''>
                    <i class='icon ion-navicon-round'></i>
                  </a>
                </div>
                <div class='navicon-left hidden-lg-up'>
                  <a id='btnLeftMenuMobile' href=''>
                    <i class='icon ion-navicon-round'></i>
                  </a>
                </div>
              </div>
              <div class='br-header-right'>
                <nav class='nav'>
                  <div class='dropdown'>
                    <a
                      href=''
                      class='nav-link pd-x-7 pos-relative'
                      data-toggle='dropdown'
                    >
                      <i class='icon ion-ios-bell-outline tx-24'></i>

                      <span class='square-8 bg-danger pos-absolute t-15 r-5 rounded-circle'></span>
                    </a>
                    <div class='dropdown-menu dropdown-menu-header'>
                      <div class='dropdown-menu-label'>
                        <label>Notifications</label>
                        <a href=''>Mark All as Read</a>
                      </div>

                      <div class='media-list'>
                        <a href='' class='media-list-link read'>
                          <div class='media'>
                            <img src='https://via.placeholder.com/500' alt='' />
                            <div class='media-body'>
                              <p class='noti-text'>
                                <strong>Suzzeth Bungaos</strong> tagged you and
                                18 others in a post.
                              </p>
                              <span>October 03, 2017 8:45am</span>
                            </div>
                          </div>
                        </a>

                        <div class='dropdown-footer'>
                          <a href=''>
                            <i class='fas fa-angle-down'></i> Show All
                            Notifications
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='dropdown'>
                    <a
                      href=''
                      class='nav-link nav-link-profile'
                      data-toggle='dropdown'
                    >
                      <span class='logged-name hidden-md-down'>{isAuthenticated ? `${user.username}`: null}</span>
                      <img
                        src='https://via.placeholder.com/500'
                        class='wd-32 rounded-circle'
                        alt=''
                      />
                      <span class='square-10 bg-success'></span>
                    </a>
                    <div class='dropdown-menu dropdown-menu-header wd-250'>
                      <div class='tx-center'>
                        <a href=''>
                          <img
                            src='https://via.placeholder.com/500'
                            class='wd-80 rounded-circle'
                            alt=''
                          />
                        </a>
                        <h6 class='logged-fullname'>Admin </h6>
                        <p>admin@domain.com</p>
                      </div>

                      <hr />
                      <ul class='list-unstyled user-profile-nav'>
                        <li>
                          <a href=''>
                            <i class='icon ion-ios-person'></i> Edit Profile
                          </a>
                        </li>
                        <li>
                          <a href=''>
                            <i class='icon ion-ios-gear'></i> Settings
                          </a>
                        </li>
                        <li onClick={this.props.logout}>
                          <a href=''>
                            <i class='icon ion-power'></i> Sign Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, {logout})(Header);