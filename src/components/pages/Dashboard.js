import React, {Fragment} from 'react'

function Dashboard() {
    return (
      <Fragment>
        <div class='br-pagebody'>
          <div class='row row-sm'>
            <div class='col-sm-6 col-xl-3'>
              <div class='bg-info rounded overflow-hidden'>
                <div class='pd-x-20 pd-t-20 d-flex align-items-center'>
                  <i class='ion ion-earth tx-60 lh-0 tx-white op-7'></i>
                  <div class='mg-l-20'>
                    <p class='tx-10 tx-spacing-1 tx-mont tx-semibold tx-uppercase tx-white-8 mg-b-10'>
                      Today's Visits
                    </p>
                    <p class='tx-24 tx-white tx-lato tx-bold mg-b-0 lh-1'>
                      1,975,224
                    </p>
                    <span class='tx-11 tx-roboto tx-white-8'>
                      24% higher yesterday
                    </span>
                  </div>
                </div>
                <div id='ch1' class='ht-50 tr-y-1'></div>
              </div>
            </div>
            <div class='col-sm-6 col-xl-3 mg-t-20 mg-sm-t-0'>
              <div class='bg-purple rounded overflow-hidden'>
                <div class='pd-x-20 pd-t-20 d-flex align-items-center'>
                  <i class='ion ion-bag tx-60 lh-0 tx-white op-7'></i>
                  <div class='mg-l-20'>
                    <p class='tx-10 tx-spacing-1 tx-mont tx-semibold tx-uppercase tx-white-8 mg-b-10'>
                      Today Sales
                    </p>
                    <p class='tx-24 tx-white tx-lato tx-bold mg-b-0 lh-1'>
                      $329,291
                    </p>
                    <span class='tx-11 tx-roboto tx-white-8'>
                      $390,212 before tax
                    </span>
                  </div>
                </div>
                <div id='ch3' class='ht-50 tr-y-1'></div>
              </div>
            </div>
            <div class='col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0'>
              <div class='bg-teal rounded overflow-hidden'>
                <div class='pd-x-20 pd-t-20 d-flex align-items-center'>
                  <i class='ion ion-monitor tx-60 lh-0 tx-white op-7'></i>
                  <div class='mg-l-20'>
                    <p class='tx-10 tx-spacing-1 tx-mont tx-semibold tx-uppercase tx-white-8 mg-b-10'>
                      % Unique Visits
                    </p>
                    <p class='tx-24 tx-white tx-lato tx-bold mg-b-0 lh-1'>
                      54.45%
                    </p>
                    <span class='tx-11 tx-roboto tx-white-8'>
                      23% average duration
                    </span>
                  </div>
                </div>
                <div id='ch2' class='ht-50 tr-y-1'></div>
              </div>
            </div>
            <div class='col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0'>
              <div class='bg-primary rounded overflow-hidden'>
                <div class='pd-x-20 pd-t-20 d-flex align-items-center'>
                  <i class='ion ion-clock tx-60 lh-0 tx-white op-7'></i>
                  <div class='mg-l-20'>
                    <p class='tx-10 tx-spacing-1 tx-mont tx-semibold tx-uppercase tx-white-8 mg-b-10'>
                      Bounce Rate
                    </p>
                    <p class='tx-24 tx-white tx-lato tx-bold mg-b-0 lh-1'>
                      32.16%
                    </p>
                    <span class='tx-11 tx-roboto tx-white-8'>
                      65.45% on average time
                    </span>
                  </div>
                </div>
                <div id='ch4' class='ht-50 tr-y-1'></div>
              </div>
            </div>
          </div>

          <div class='row row-sm mg-t-20'>
            <div class='col-lg-8'>
              <div class='card bd-0 shadow-base pd-25 mg-t-20'>
                <div class='d-md-flex justify-content-between'>
                  <div>
                    <h6 class='tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1'>
                      How Engaged Our Users Daily
                    </h6>
                    <p>Past 30 Days — Last Updated Oct 14, 2017</p>
                  </div>
                  <div class='wd-200'>
                    <select
                      class='form-control select2'
                      data-placeholder='Choose location'
                    >
                      <option label='Choose one'></option>
                      <option value='1' selected>
                        New York
                      </option>
                      <option value='2'>San Francisco</option>
                      <option value='3'>Los Angeles</option>
                      <option value='4'>Chicago</option>
                      <option value='5'>Seattle</option>
                    </select>
                  </div>
                </div>
                <div class='row mg-t-20'>
                  <div class='col-sm-9'>
                    <div id='ch12' class='ht-250 ht-sm-300'></div>
                  </div>
                  <div class='col-sm-3 mg-t-40 mg-sm-t-0'>
                    <div>
                      <p class='mg-b-5 tx-uppercase tx-10 tx-mont tx-semibold'>
                        Bounce Rate
                      </p>
                      <h4 class='tx-lato tx-inverse tx-bold mg-b-0'>23.32%</h4>
                      <span class='tx-12 tx-success tx-roboto'>
                        2.7% increased
                      </span>
                    </div>
                    <div class='mg-t-20 pd-t-20 bd-t'>
                      <p class='mg-b-5 tx-uppercase tx-10 tx-mont tx-semibold'>
                        Page Views
                      </p>
                      <h4 class='tx-lato tx-inverse tx-bold mg-b-0'>38.20%</h4>
                      <span class='tx-12 tx-danger tx-roboto'>
                        4.65% decreased
                      </span>
                    </div>
                    <div class='mg-t-20 pd-t-20 bd-t'>
                      <p class='mg-b-5 tx-uppercase tx-10 tx-mont tx-semibold'>
                        Time On Site
                      </p>
                      <h4 class='tx-lato tx-inverse tx-bold mg-b-0'>12:30</h4>
                      <span class='tx-12 tx-success tx-roboto'>
                        1.22% increased
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-4 mg-t-20 mg-lg-t-0'>
              <div class='card shadow-base bd-0 overflow-hidden'>
                <div class='pd-x-25 pd-t-25'>
                  <h6 class='tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1 mg-b-20'>
                    Storage Overview
                  </h6>
                  <p class='tx-10 tx-spacing-1 tx-mont tx-semibold tx-uppercase mg-b-0'>
                    As of Today
                  </p>
                  <h1 class='tx-56 tx-light tx-inverse mg-b-0'>
                    755<span class='tx-teal tx-24'>gb</span>
                  </h1>
                  <p>
                    <span class='tx-primary'>80%</span> of free space remaining
                  </p>
                </div>
                <div id='ch6' class='ht-115 mg-r--1'></div>
                <div class='bg-teal pd-x-25 pd-b-25 d-flex justify-content-between'>
                  <div class='tx-center'>
                    <h3 class='tx-lato tx-white mg-b-5'>
                      989<span class='tx-light op-8 tx-20'>gb</span>
                    </h3>
                    <p class='tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-0 tx-white-8'>
                      Total Space
                    </p>
                  </div>
                  <div class='tx-center'>
                    <h3 class='tx-lato tx-white mg-b-5'>
                      234<span class='tx-light op-8 tx-20'>gb</span>
                    </h3>
                    <p class='tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-0 tx-white-8'>
                      Used Space
                    </p>
                  </div>
                  <div class='tx-center'>
                    <h3 class='tx-lato tx-white mg-b-5'>
                      80<span class='tx-light op-8 tx-20'>%</span>
                    </h3>
                    <p class='tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-0 tx-white-8'>
                      Free Space
                    </p>
                  </div>
                </div>
              </div>

              <div class='card shadow-base bd-0 mg-t-20'>
                <div id='carousel3' class='carousel slide' data-ride='carousel'>
                  <ol class='carousel-indicators'>
                    <li
                      data-target='#carousel3'
                      data-slide-to='0'
                      class='active'
                    ></li>
                    <li data-target='#carousel3' data-slide-to='1'></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Dashboard
