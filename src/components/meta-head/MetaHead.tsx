import useTranslate from '@/hooks/useTranslate';
import Head from 'next/head';
import React from 'react';

type MetaHeadType = {
    pageTitle?: string;
};

const MetaHead: React.FC<MetaHeadType> = ({ pageTitle }) => {
    const textMedicalServicesCompanyHealthCareCenter = useTranslate(
        'MEDICALSERVICESCOMPANYHEALTHCARECENTER',
        'GHEA Services - Medical Services Company - Health Care Center in Jeddah - Saudi Arabia'
    );
    const textMetaKeyword = useTranslate(
        'METAKEYWORDS',
        'Home care in Saudi Arabia, Home care in Jeddah, Home care in Saudi Arabia, Home care in Jeddah,Elder care in Jeddah, Elder care in Saudi Arabia,Child home care in Jeddah, Child home care in Saudi Arabia'
    );
    const textMetaDescription = useTranslate(
        'METADESCRIPTION',
        "Providing comprehensive healthcare services in Saudi Arabia, including personalized care, child services, elderly assistance, Alzheimer's support, and care for all ages. Our dedicated team ensures compassionate and professional assistance tailored to your needs."
    );

    return (
        <Head>
            <title dir="ltr">{pageTitle || textMedicalServicesCompanyHealthCareCenter}</title>
            <meta name="viewport" content="width=device-width,shrink-to-fit=no,initial-scale=1,maximum-scale=1,user-scalable=0" />
            <meta name="description" content={textMetaDescription} />
            <meta name="keywords" content={textMetaKeyword} />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
    );
};

export default MetaHead;
