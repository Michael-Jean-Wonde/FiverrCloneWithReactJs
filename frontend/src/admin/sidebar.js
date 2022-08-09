import React, { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LinearProgress from '@material-ui/core/LinearProgress';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';
import {useSelector} from 'react-redux'


function Sidebar() {

    return (
        <div className="sidebar">
            {/* Member Detail */}
            <div className="sidebar__cardone">
                <div className="sidebar__cardone--title">
                    <p>Welcome back,</p>
                    <h3>Michael Wondwosen</h3>
                    <span>
                        <h3>-userEmailHere</h3>
                        <h6>FREE MEMBER</h6>
                    </span>
                </div>
                <div className="sidebar__cardone--progress">
                    <span>
                        <p>Set up your account</p>
                        <p>60%</p>
                    </span>
                    <LinearProgress variant="determinate" value={60} />
                </div>
                <div className="sidebar__cardone--english">
                    <span>
                        <ContactMailIcon />
                        <p><span>Pass the US English Exam - Level 1</span></p>
                        <p>+20%</p>
                    </span>
                </div>
                <div className="sidebar__cardone--balance">
                    <span>
                        <p>Account balance</p>
                        <p><span>Deposit funds <ArrowRightAltIcon /></span></p>
                    </span>
                    <p>$0.00USD</p>
                </div>
            </div>


            {/* Bid Summary */}
            <div className="sidebar__cardtwo">
                <span className="sidebar__cardtwo--title">
                    <h4>Bid Summary</h4>
                    <p><span>View Insights</span></p>
                </span>
                <span>
                    <h5>Remaining</h5>
                    <p>6/8</p>
                </span>
                <span>
                    <h5>Until next bid</h5>
                    <p>2 days</p>
                </span>
                <span>
                    <h5>Replenishment rate</h5>
                    <p>8x</p>
                </span>
            </div>


            
        </div>
    )
}

export default Sidebar
