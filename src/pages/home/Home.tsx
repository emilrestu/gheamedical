import React from 'react';
import Page from '../../components/page';
import { Col, Row } from 'antd';
import CarouselInfo from './components/CarouselInfo';
import Testimonial from './components/Testimonial';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Get the best home care services with home care nurses per month to help them practice their lives. Book now"
                />
                <meta name="keywords" content="ابشر افراد" />
            </Helmet>
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
        </>
    );
};

export default Home;
