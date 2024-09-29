import SVGIcon from '@/components/svg-icon';
import Translate from '@/components/translate';
import { Col, Grid, Row, Typography } from 'antd';
import React from 'react';
import HowWeWorkIconsBG from '@/assets/components/HowWeWorkIconsBG.png';
import HowWeWorkIconsBGXS from '@/assets/components/HowWeWorkIconsBGXS.png';
import Image from 'next/image';
import { useThemesContext } from '@/context/ThemesContext';

const HowWeWork: React.FC = () => {
    const { xs } = Grid.useBreakpoint();
    const { isArabic } = useThemesContext();

    return (
        <>
            <Row className="how-we-work-header-wrapper" {...(xs && { style: { marginBottom: -140 } })}>
                <Col md={24} xs={24}>
                    <div className="text-wrapper">
                        <Typography.Text className="title">
                            <Translate>How We Work</Translate>
                        </Typography.Text>

                        <Typography.Paragraph className="description">
                            <Translate>
                                We combine expertise, compassion, and modern resources to ensure you receive the highest quality homecare in Saudi
                                Arabia.
                            </Translate>
                        </Typography.Paragraph>
                    </div>
                </Col>
            </Row>

            <Row
                className="how-we-work-icons-wrapper"
                {...(xs && {
                    style: {
                        height: 628,
                    },
                })}
            >
                {/* <div className="bg-wrapper">{xs ? <HowWeWorkIconsBGXS /> : <HowWeWorkIconsBG />}</div> */}
                <div
                    className="bg-wrapper"
                    {...(xs && {
                        style: {
                            height: 628,
                            display: 'flex',
                            justifyContent: 'center',
                        },
                    })}
                >
                    <Image
                        {...(xs && {
                            style: {
                                width: 'unset',
                            },
                        })}
                        src={xs ? HowWeWorkIconsBGXS : HowWeWorkIconsBG}
                        alt="GHEA Services - How We Work"
                    />
                </div>

                <div className="icons-group-container">
                    <div className="icons-container" style={{ marginTop: xs ? 80 : 60, ...(isArabic && xs && { marginRight: 62 }) }}>
                        <div className="icons">
                            <SVGIcon icon="chat" />
                        </div>
                        <div className="description">
                            <Translate>
                                You can easily request our services through our website. Alternatively, feel free to contact us via WhatsApp or phone
                                call.
                            </Translate>
                        </div>
                    </div>

                    <div className="icons-container" style={{ marginTop: xs ? 20 : -60, ...(xs && { marginLeft: 180 }) }}>
                        <div className="icons">
                            <SVGIcon icon="cs" />
                        </div>
                        <div className="description">
                            <Translate>
                                We will provide you with the caregiver&apos;s CV and arrange an online interview to ensure a perfect match for your
                                needs.
                            </Translate>
                        </div>
                    </div>

                    <div className="icons-container" style={{ marginTop: xs ? 0 : 50, ...(isArabic && xs && { marginRight: 62 }) }}>
                        <div className="icons">
                            <SVGIcon icon="team" />
                        </div>
                        <div className="description">
                            <Translate>
                                Once you&apos;re satisfied, we will finalize the arrangement and provide any necessary documentation.
                            </Translate>
                        </div>
                    </div>
                </div>
            </Row>
        </>
    );
};

export default HowWeWork;
