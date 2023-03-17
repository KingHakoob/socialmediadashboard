import React from 'react';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function MainCard(info) {
    return <Col sm={12} lg={3} className='cardSpace'>
        <Card className={`mainCard${info.info.mode}`} >
            <Card.Header className={info.info.header} ></Card.Header>
            <Card.Body>
                <Card.Title className='handleCol'>
                    <img className='logo' src={info.info.logo} alt='icon' />
                    <h1 className={`handle${info.info.mode}`}>{info.info.handle}</h1>
                </Card.Title>
                <div>
                    <h1 className={`stats${info.info.mode}`}>{info.info.stats}</h1>
                    <h2 className={`statName${info.info.mode}`}>{info.info.statsName}</h2>
                    <div className={`updateDiv${info.info.updateStat}`}>
                        <img className='arrowIcon' src={info.info.arrow} alt='icon' />
                        <p>{info.info.update}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </Col>
}

export { MainCard }