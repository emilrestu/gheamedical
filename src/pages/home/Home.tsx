import React from 'react';
import Page from '../../components/page';
import { Col, Row } from 'antd';
import CarouselInfo from './components/CarouselInfo';
import Testimonial from './components/Testimonial';
import Head from 'next/head';

const Home: React.FC = () => {
    return (
        <Page style={{ padding: 0 }}>
            <Row>
                <Col span={24}>
                    <CarouselInfo />
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Testimonial />
                </Col>
            </Row>
        </Page>
    );
};

export default Home;
