import React from 'react';
import './dashboardContent.css';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import '../utills/i18next';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function DashboardContent() {
    const {t} = useTranslation();
    const classes = useStyles();

    return (
        <div className="container">
            {/* Card */}
            <div className="dashboardContent__card">
                <span>
                    <h4>{t('dashboardPrize')}</h4>
                    <p>{t('dashboardPrizeP')}</p>
                    <button>{t('dashInviteButton')} <ArrowRightAltIcon /></button>
                </span>
                <span>
                    <img src="https://www.f-cdn.com/assets/main/en/assets/banners/give-get/T104418-give-get-banner-present.png" alt="" />
                </span>
            </div>

            {/* Projects */}
            <div className="dashboardContent__projects">
                <div className="dashboardContent__projects--heading">
                    <h3>{t('dashResProjs')}</h3>
                    <button>{t('postRequest')}</button>
                </div>
                <div className="dashboardContent__projects--table">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>{t('dashContestTitle')}</TableCell>
                                    <TableCell align="right">{t('dashBids')}</TableCell>
                                    <TableCell align="right">{t('dashAveBid')}</TableCell>
                                    <TableCell align="right">{t('dashCloseDate')}</TableCell>
                                    <TableCell align="right">{t('dashStaus')}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableCell align="left"><EmojiEventsIcon /> <span>{t('dashWpress')} </span></TableCell>
                                <TableCell align="right"> - </TableCell>
                                <TableCell align="right"> - </TableCell>
                                <TableCell align="right"> - </TableCell>
                                <TableCell align="right">{t('dashInactive')}</TableCell>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p><span>{t('dashViewAll')} <ArrowRightAltIcon /></span></p>
            </div>

            {/* News Feed */}
            <div className="dashboardContent__news">
                <div className="dashboardContent__news--heading">
                    <h3>{t('dashNF')}</h3>
                </div>
                <div className="dashboardContent__news--main">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/default-notification-image.svg" alt="" />
                    <span>
                        <p>
                        {t('dahsUpdatePlace')}
                            <br />{t('dash2Hrs')}
                            </p>
                        <button>{t('postRequest')}</button>
                        <button>{t('dashBrws')}</button>
                    </span>
                </div>

            </div>

        </div>
    )
}

export default DashboardContent
