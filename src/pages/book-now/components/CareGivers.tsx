import { Button, Card, Col, Row, Typography } from 'antd';
import CareGiversEnglish from '@/data/caregivers/en.json';
import CareGiversArabic from '@/data/caregivers/ar.json';
import React, { useMemo } from 'react';
import { useTranslateContext } from '@/context/TranslateContext';
import Link from 'next/link';
import Translate from '@/components/translate';
import { PHONE_NUMBER } from '@/data/constants';
import useTranslate from '@/hooks/useTranslate';
// import Image from 'next/image';
import AngelaDakwah from '../images/angela-dakwah.jpg';
import AnitaAkosuaOhemeng from '../images/anita-akosua-ohemeng.jpg';
import AnneMuthani from '../images/anne-muthani.jpg';
import MavisAmpimDanku from '../images/mavis-ampim-danku.png';
import RebeccaNechesaYabunga from '../images/rebecca-nechesa-yabunga.png';
import SaffantuIssah from '../images/saffantu-issah.png';
import VeraSasuNyarko from '../images/vera-sasu-nyarko.png';
import { StaticImageData } from 'next/image';

const CareGivers = () => {
    const { langCode } = useTranslateContext();

    const textHello = useTranslate('HELLO', 'Hello');
    const textLine2 = useTranslate(
        'IWOULDLIKETOINQUIREABOUTTHEAVAILABILITYOFYOURHEALTHCAREWORKER',
        'I would like to inquire about the availability of your healthcare worker'
    );
    const textLine3 = useTranslate(
        'COULDYOUPLEASELETMEKNOWWHENTHEYWILLBEAVAILABLETOSTARTWORK',
        'Could you please let me know when they will be available to start work'
    );
    const textThankyou = useTranslate('THANKYOUMSG', 'Thank You');
    const textBestRegards = useTranslate('BESTREGARDS', 'Best Regards');

    const BannerData = useMemo(() => {
        if (langCode === 'ar') return CareGiversArabic;

        return CareGiversEnglish;
    }, [langCode]);

    const bookHandler = (name: string) => {
        const ArrValue = [
            `${textHello}\n\n${textLine2} ${name} ${textLine3}?\n\n${textThankyou}${textBestRegards === ' ' ? '' : `\n\n${textBestRegards}`}`,
        ];

        window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURI(ArrValue.join('\n'))}`, '_blank');
    };

    const imageData: { [key: string]: StaticImageData } = {
        AngelaDakwah: AngelaDakwah,
        AnitaAkosuaOhemeng: AnitaAkosuaOhemeng,
        AnneMuthani: AnneMuthani,
        MavisAmpimDanku: MavisAmpimDanku,
        RebeccaNechesaYabunga: RebeccaNechesaYabunga,
        SaffantuIssah: SaffantuIssah,
        VeraSasuNyarko: VeraSasuNyarko,
    };

    return (
        <Row className="reservations-care-givers">
            <Col md={24} xs={24}>
                {BannerData.map((item, key) => (
                    <Card key={key}>
                        <div
                            className="caregiver-avatar"
                            style={{
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundImage: `url(${imageData[item.image].src})`,
                            }}
                        >
                            {/* <Image src={AngelaDakwah} alt="GHEA Services Care Givers" /> */}
                        </div>

                        <div className="caregiver-description">
                            <Typography.Text className="title">{item.name}</Typography.Text>
                            <Typography.Text className="description">{item.position}</Typography.Text>
                        </div>

                        <div className="caregiver-button-group">
                            <Button type="primary" ghost>
                                <Link href={`/assets/cv/${item.cv_link}`} passHref target="_blank">
                                    <Translate>View CV</Translate>
                                </Link>
                            </Button>

                            <Button
                                type="primary"
                                onClick={() => {
                                    bookHandler(item.name);
                                }}
                            >
                                <Translate>Book Now</Translate>
                            </Button>
                        </div>
                    </Card>
                ))}
            </Col>
        </Row>
    );
};

export default CareGivers;
