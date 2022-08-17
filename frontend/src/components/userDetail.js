import React from 'react';
import './userDetail.css';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import UserHeader from './userHeader';

import '../utills/i18next';
import { useTranslation } from "react-i18next";

const UserDetail = () => {
    const {t} = useTranslation();
  return (
    <div className='userdetail'>
        <UserHeader />
        <br />
        <div className='userinfo'>
            <Container>
                <Row>
                    <Col xs lg='3'>
                        <img width='60px' height='60px' src="images/userImage.jpg" alt="userImage" />
                    </Col>
                    <Col xs lg='6'>
                        <h5>{t("miki")}</h5>
                    </Col>
                    <Col xs lg='3'>
                        <FontAwesomeIcon icon={faStar} size='1x' color='#FFC100'></FontAwesomeIcon>
                        {t("anal")}
                    </Col>
                </Row>
                <br/>
                <div className='lline'></div>
                <Row>
                    <Col xs lg='10'>{t("responseRate")}</Col>
                    <Col xs lg='2'> 100% </Col>
                </Row>
                <Row>
                    <Col xs lg='10'>{t("deliveredTime")}</Col>
                    <Col xs lg='2'>100%</Col>
                </Row>
                <Row>
                    <Col xs lg='10'>{t("orderCompletion")}</Col>
                    <Col xs lg='2'>100%</Col>
                </Row>
                <div className='line'></div>
                <Row>
                    <Col xs lg='10'>{t("earnedFeb")}</Col>
                    <Col xs lg='2'>$1000</Col>
                </Row>
                <Row>
                    <Col xs lg='10'>{t("responseTime")}</Col>
                    <Col xs lg='2'>5Hrs</Col>
                </Row>
            </Container>

        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  )
}

export default UserDetail;