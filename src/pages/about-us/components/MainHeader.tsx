import React from 'react';
import { Col, Row, Typography } from 'antd';
import Translate from '@/components/translate';

const MainHeader = () => {
    return (
        <Row className="about-us-main-header">
            <Col span={24}>
                <div className="text-wrapper">
                    <Typography.Text className="title">
                        <Translate>Meet GHEA Services We Provide You With the Best Care For You and Your Family.</Translate>
                    </Typography.Text>

                    <Typography.Paragraph className="description">
                        <Translate>
                            GHEA Services is a top provider specializing in comprehensive family support for all ages and needs. We supply individuals
                            trained to meet client&apos;s needs. We are dedicated to delivering exceptional assistance, and facilitating our
                            client&apos;s daily lives.
                        </Translate>
                    </Typography.Paragraph>
                </div>
            </Col>
        </Row>
    );
};

export default MainHeader;
