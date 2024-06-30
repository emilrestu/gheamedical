import React from 'react';
import Page from '../../components/page';
import { Col, Row } from 'antd';
import CarouselInfo from './components/CarouselInfo';

const Home: React.FC = () => {
    return (
        <Page style={{ padding: 0 }}>
            <Row>
                <Col>
                    <CarouselInfo />
                </Col>
            </Row>
        </Page>
    );
};

export default Home;
