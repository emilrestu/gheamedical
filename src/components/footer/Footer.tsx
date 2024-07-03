import { Col, Layout, Row, Typography } from 'antd';
import Translate from '../translate';

const { Footer: FooterAntd } = Layout;

const Footer = () => {
    return (
        <FooterAntd style={{ background: '#3d3d3d' }}>
            <Row></Row>
            <Row>
                <Col span={24}>
                    <Typography.Text style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                        <span style={{ display: 'flex', gap: '8px' }}>
                            &copy;
                            <Translate>You deserve the best from</Translate>
                            GHEA
                            <Translate>Medical Care Services</Translate>
                        </span>
                    </Typography.Text>
                </Col>
            </Row>
        </FooterAntd>
    );
};

export default Footer;
