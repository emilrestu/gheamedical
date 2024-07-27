import React from 'react';
import CompanyLogoBig from '../../assets/logo/logo_01_01.png';
import Image from 'next/image';
import Link from 'next/link';

const CompanyLogo = () => {
    return (
        <Link href="/">
            <Image priority height={32} src={CompanyLogoBig} alt="GHEA services" />
        </Link>
    );
};

export default CompanyLogo;
