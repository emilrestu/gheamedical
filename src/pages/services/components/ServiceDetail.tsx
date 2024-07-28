import SVGIcon from '@/components/svg-icon';
import Translate from '@/components/translate';
import { PHONE_NUMBER } from '@/data/constants';
import { Button, Col, Row, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

const ServiceDetail = () => {
    const ServiceData = [
        {
            title: `Personal Service`,
            description: `We tailor our approach to suit each individual's circumstances and develop a personalized care plan that meets their specific needs.`,
            icon: `personal-services`,
            details: [
                `Assisting with personal hygiene, such as dressing, toileting, bathing, and grooming.`,
                `Administering and monitoring medication, ensuring adherence to prescribed schedules.`,
                `Providing escort services for appointments, outings, or social activities.`,
                `Assisting with mobility, including transferring and walking support.`,
                `Accompanying clients for shopping and other errands.`,
                `Light housekeeping and meal preparation to maintain a clean and comfortable environment.`,
            ],
        },
        {
            title: `Personal Service Escort`,
            description: `Chronic diseases or short-term mobility problems can lead to loneliness and social isolation in patients. This difficult period requires a companion that can bring a sense of humanity and participation so that loneliness does not affect their health and well-being.`,
            icon: `personal-escort`,
            details: [
                `Insurance and reduce the risk of falling.`,
                `Provide social participation, intellectual stimulation, and continued engagement in activities to combat loneliness.`,
                `Light home cleaning and laundry service.`,
                `Prepare and plan meals.`,
                `Transport for medical appointments or other activities.`,
                `Assisting in routine tasks.`,
            ],
        },
        {
            title: `Child Services`,
            description: `Children need special Service that gives them good health care, comfort, and safety, whether the child has a disability, illness, or other problem that requires constant and regular care and attention.`,
            icon: `child-services`,
            details: [
                `Daily routine tasks, such as bathing, dressing, and augmentation.`,
                `Internal and external activities for the child's entertainment.`,
                `Unique activities to keep the child integrated, depending on the child's age.`,
                `Monitoring and Reminding of Medications.`,
                `Prepare healthy meals.`,
            ],
        },
        {
            title: `Service for the Elderly`,
            description: `Older people in health care's neediest age groups help them go about their lives quickly. We spend our time creating a plan tailored to the requirements and objectives of the elderly who receive care.`,
            icon: `services-for-the-elderly`,
            details: [
                `Daily activities, such as shopping, regulation, cleaning, etc.`,
                `Prepare a healthy meal.`,
                `Light Home Cleaning Service.`,
                `Laundry.`,
            ],
        },
        {
            title: `Service for all Ages`,
            description: `Our care is not limited to the elderly or children. We provide home service for all ages and conditions, whether they are in need or have other health conditions requiring home care.`,
            icon: `services-for-all-age`,
            details: [
                `Perform certain tasks.`,
                `Regulate the menu.`,
                `Help wear clothes or shower.`,
                `Escort and transport at medical appointments.`,
                `Assistance in walking.`,
            ],
        },
        {
            title: `Alzheimer’s Service`,
            description: `We provide our services to people living with Alzheimer's to help them go about their lives easier and do their daily needs and help them feel independent to ensure that the quality of life provided to them is greatly improved.`,
            icon: `alzheimer`,
            details: [
                `Full home review to ensure safety.`,
                `Give the patient enough time to engage in his care.`,
                `Encouraging the patient's independence by facilitating his activities.`,
                `Organizing the room and cabinet for successful independence.`,
                `Understand the right time for him to rest.`,
                `Recognize his reactions to environmental effects.`,
                `Keep him engaged in physical activity to improve his muscle strength and blood cycle.`,
            ],
        },
    ];

    return (
        <Row className="services-detail-container">
            <Col md={24}>
                {ServiceData.map((item, i) => (
                    <Row className="services-detail-item" key={i}>
                        <Col md={12} xs={24} className="left-item">
                            <div className="icons-container">
                                <div className="icons">
                                    <SVGIcon icon={item.icon as 'personal-services'} />
                                </div>
                            </div>

                            <Typography.Text className="title">
                                <Translate>{item.title}</Translate>
                            </Typography.Text>

                            <Typography.Paragraph className="description">
                                <Translate>{item.description}</Translate>
                            </Typography.Paragraph>

                            <Button type="primary">
                                <Link href={`https://wa.me/${PHONE_NUMBER}`} passHref>
                                    <Translate>Book Now</Translate>
                                </Link>
                            </Button>
                        </Col>
                        <Col md={12} xs={24} className="right-item">
                            <Typography.Text className="title">
                                <Translate>What will you get</Translate>
                            </Typography.Text>

                            <ul>
                                {item.details.map((detail, ix) => (
                                    <li key={ix}>{detail}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                ))}
            </Col>
        </Row>
    );
};

export default ServiceDetail;
