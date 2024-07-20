import React from 'react';
import CompanyLogoBig from '../../assets/logo/logo_01_01.png';
import Image from 'next/image';

const CompanyLogo = () => {
    return <Image priority height={32} src={CompanyLogoBig} alt="GHEA services" />;
};

export default CompanyLogo;
