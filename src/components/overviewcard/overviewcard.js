import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function OverviewCard(info) {
    return <Col sm={12} lg={3} className='overviewSpacing'>
        <div className={`overviewDiv${info.info.mode}`}>
            <Row className='overviewTopRow'>
                <Col className='overviewTopCol'>
                    <p className={`overviewDivTitle${info.info.mode}`}>{info.info.title}</p>
                    <img className='overviewLogo' src={info.info.logo} alt='icon' />
                </Col>
            </Row>
            <Row className='overviewBottomRow'>
                <Col className='overviewBottomCol'>
                    <p className='overviewTxt'>{info.info.stats}</p>
                    <div className={`overviewUpdateDiv${info.info.updateStat}`}>
                        <img className='overviewArrowIcon' src={info.info.arrow} alt='icon' />
                        <p>{info.info.update}</p>
                    </div>
                </Col>
            </Row>
        </div>
    </Col>
}

export { OverviewCard }