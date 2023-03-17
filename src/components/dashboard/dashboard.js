import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../switch/switch.css';

import Switch from "../switch/switch";
import { MainCard } from '../maincard/maincard';
import { OverviewCard } from '../overviewcard/overviewcard';

import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';
import youtubeIcon from '../../assets/images/icon-youtube.svg';
import downIcon from '../../assets/images/icon-down.svg';
import upIcon from '../../assets/images/icon-up.svg';

export default function DashBoard() {
    const [isLightMode, setIsLightMode] = useState(false);
    let mode = isLightMode ? 'Light' : 'Dark';

    let mainCardInfo = [
        { 'mode': mode, 'header': 'facebookHeader', 'logo': facebookIcon, 'handle': '@nathanf', 'stats': '1987', 'statsName': 'FOLLOWERS', 'updateStat': 'Pos', 'arrow': upIcon, 'update': '12 Today' },
        { 'mode': mode, 'header': 'twitterHeader', 'logo': twitterIcon, 'handle': '@nathanf', 'stats': '1044', 'statsName': 'FOLLOWERS', 'updateStat': 'Pos', 'arrow': upIcon, 'update': '99 Today' },
        { 'mode': mode, 'header': 'instagramHeader', 'logo': instagramIcon, 'handle': '@realnathanf', 'stats': '11k', 'statsName': 'FOLLOWERS', 'updateStat': 'Pos', 'arrow': upIcon, 'update': '1099 Today' },
        { 'mode': mode, 'header': 'youtubeHeader', 'logo': youtubeIcon, 'handle': 'Nathan F.', 'stats': '8239', 'statsName': 'SUBSCRIBERS', 'updateStat': 'Neg', 'arrow': downIcon, 'update': '144 Today' }
    ]

    let overviewCardInfo = [
        { 'mode': mode, 'title': 'Page Views', 'logo': facebookIcon, 'stats': '87', 'updateStat': 'Pos', 'arrow': upIcon, 'update': '3%' },
        { 'mode': mode, 'title': 'Likes', 'logo': facebookIcon, 'stats': '52', 'updateStat': 'Neg', 'arrow': downIcon, 'update': '2%' },
        { 'mode': mode, 'title': 'Likes', 'logo': instagramIcon, 'stats': '5462', 'updateStat': 'Pos', 'arrow': upIcon, 'update': '2257%' },
        { 'mode': mode, 'title': 'Profile Views', 'logo': instagramIcon, 'stats': '52k', 'updateStat': 'Pos', 'arrow': upIcon, 'update': '1375%' },
        { 'mode': mode, 'title': 'Retweets', 'logo': twitterIcon, 'stats': '117', 'updateStat': 'Pos', 'arrow': upIcon, 'update': '303%' },
        { 'mode': mode, 'title': 'Likes', 'logo': twitterIcon, 'stats': '507', 'updateStat': 'Pos', 'arrow': upIcon, 'update': '553%' },
        { 'mode': mode, 'title': 'Likes', 'logo': youtubeIcon, 'stats': '107', 'updateStat': 'Neg', 'arrow': downIcon, 'update': '19%' },
        { 'mode': mode, 'title': 'Total Views', 'logo': youtubeIcon, 'stats': '1407', 'updateStat': 'Neg', 'arrow': downIcon, 'update': '12%' }
    ]

    useEffect(() => {
        isLightMode ? document.body.classList = 'Light' : document.body.classList = 'Dark';
    })

    return <div className={`background${mode}`}>
        <div className='dashBoard'>
        <Container>
            <Row className='topSection'>
                <Col sm={12} lg={6} className='titleCol'>
                    <h1 className={`title${mode}`}>Social Media Dashboard</h1>
                    <h2 className={`totalFollowers${mode}`}>Total Followers: 23,004</h2>
                </Col>
                <Col sm={12} lg={6}>
                    <div className='toggleSection'>
                        <h3 className={`modeTxt${mode}`}>{mode} Mode</h3>
                        <Switch className='toggleSwitch' isOn={isLightMode} handleToggle={() => setIsLightMode(!isLightMode)} />
                    </div>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className='mainCardRow'>
                <MainCard info={mainCardInfo[0]} />
                <MainCard info={mainCardInfo[1]} />
                <MainCard info={mainCardInfo[2]} />
                <MainCard info={mainCardInfo[3]} />
                
            </Row>
        </Container>

        <Container>
            <h1 className={`overviewTitle${mode}`}>Overview - Today</h1>
        </Container>

        <Container>
            <Row className='overviewRow'>
                <OverviewCard info={overviewCardInfo[0]} />
                <OverviewCard info={overviewCardInfo[1]} />
                <OverviewCard info={overviewCardInfo[2]} />
                <OverviewCard info={overviewCardInfo[3]} />
            </Row>
            <Row>
                <OverviewCard info={overviewCardInfo[4]} />
                <OverviewCard info={overviewCardInfo[5]} />
                <OverviewCard info={overviewCardInfo[6]} />
                <OverviewCard info={overviewCardInfo[7]} />
            </Row>
        </Container>
    </div>
    </div>
}