import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import LinearProgress from "@material-ui/core/LinearProgress";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useSelector } from "react-redux";

import '../utills/i18next';
import { useTranslation } from "react-i18next";

function Sidebar() {
    const {t} = useTranslation();
  const user = useSelector((state) => state.userLogin);
  const { userinfo } = user;

  return (
    <div className="sidebar">
      {/* Member Detail */}
      <div className="sidebar__cardone">
        <div className="sidebar__cardone--title">
          <p>{t('dashWelc')},</p>
          <h3>{t('dashUser')}</h3>
          <span>
            <h3>{userinfo.email}</h3>
          </span>
        </div>
      </div>

      {/* Bid Summary */}
        {/* <div className="sidebar__cardtwo">
        <span className="sidebar__cardtwo--title">
            <h4>Bid Summary</h4>
            <p>
            <span>View Insights</span>
            </p>
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
        </div> */}
    </div>
  );
}

export default Sidebar;
