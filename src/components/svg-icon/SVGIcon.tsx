import React, { CSSProperties } from 'react';
import _Alzheimer from '@/assets/icon/alzheimer.svg';
import _Badge from '@/assets/icon/badge.svg';
import _BestHomeServices from '@/assets/icon/best-home-services.svg';
import _BestPrices from '@/assets/icon/best-prices.svg';
import _BestStaff from '@/assets/icon/best-staff.svg';
import _Calendar from '@/assets/icon/calendar.svg';
import _CaretDown from '@/assets/icon/caret-down.svg';
import _CaretDownSmall from '@/assets/icon/caret-down-small.svg';
import _Chat from '@/assets/icon/chat.svg';
import _ChildServices from '@/assets/icon/child-services.svg';
import _Close from '@/assets/icon/close.svg';
import _Company_Logo from '@/assets/icon/company_logo.svg';
import _Cs from '@/assets/icon/cs.svg';
import _Doctor from '@/assets/icon/doctor.svg';
import _Facebook from '@/assets/icon/facebook.svg';
import _Instagram from '@/assets/icon/instagram.svg';
import _Location from '@/assets/icon/location.svg';
import _Mail from '@/assets/icon/mail.svg';
import _Passion from '@/assets/icon/passion.svg';
import _PersonalEscort from '@/assets/icon/personal-escort.svg';
import _PersonalServices from '@/assets/icon/personal-services.svg';
import _Person from '@/assets/icon/person.svg';
import _Phone from '@/assets/icon/phone.svg';
import _Plus from '@/assets/icon/plus.svg';
import _Quote from '@/assets/icon/quote.svg';
import _Services from '@/assets/icon/services.svg';
import _ServicesForAllAge from '@/assets/icon/services-for-all-age.svg';
import _ServicesForTheElderly from '@/assets/icon/services-for-the-elderly.svg';
import _Team from '@/assets/icon/team.svg';
import _Transparency from '@/assets/icon/transparency.svg';
import _Trust from '@/assets/icon/trust.svg';
import _Twitter from '@/assets/icon/twitter.svg';
import _Website from '@/assets/icon/website.svg';
import _Wellness from '@/assets/icon/wellness.svg';

type SVGIconTypes = {
    icon:
        | 'alzheimer'
        | 'badge'
        | 'best-home-services'
        | 'best-prices'
        | 'best-staff'
        | 'calendar'
        | 'caret-down'
        | 'caret-down-small'
        | 'chat'
        | 'child-services'
        | 'close'
        | 'company_logo'
        | 'cs'
        | 'doctor'
        | 'facebook'
        | 'instagram'
        | 'location'
        | 'mail'
        | 'passion'
        | 'personal-escort'
        | 'personal-services'
        | 'person'
        | 'phone'
        | 'plus'
        | 'quote'
        | 'services'
        | 'services-for-all-age'
        | 'services-for-the-elderly'
        | 'team'
        | 'transparency'
        | 'trust'
        | 'twitter'
        | 'website'
        | 'wellness';
    style?: CSSProperties;
    width?: number;
    height?: number;
};

const SVGIcon: React.FC<SVGIconTypes> = ({ icon, ...props }) => {
    const iconList = {
        alzheimer: <_Alzheimer {...props} />,
        badge: <_Badge {...props} />,
        'best-home-services': <_BestHomeServices {...props} />,
        'best-prices': <_BestPrices {...props} />,
        'best-staff': <_BestStaff {...props} />,
        calendar: <_Calendar {...props} />,
        'caret-down': <_CaretDown {...props} />,
        'caret-down-small': <_CaretDownSmall {...props} />,
        chat: <_Chat {...props} />,
        'child-services': <_ChildServices {...props} />,
        close: <_Close {...props} />,
        company_logo: <_Company_Logo {...props} />,
        cs: <_Cs {...props} />,
        doctor: <_Doctor {...props} />,
        facebook: <_Facebook {...props} />,
        instagram: <_Instagram {...props} />,
        location: <_Location {...props} />,
        mail: <_Mail {...props} />,
        passion: <_Passion {...props} />,
        'personal-escort': <_PersonalEscort {...props} />,
        'personal-services': <_PersonalServices {...props} />,
        person: <_Person {...props} />,
        phone: <_Phone {...props} />,
        plus: <_Plus {...props} />,
        quote: <_Quote {...props} />,
        services: <_Services {...props} />,
        'services-for-all-age': <_ServicesForAllAge {...props} />,
        'services-for-the-elderly': <_ServicesForTheElderly {...props} />,
        team: <_Team {...props} />,
        transparency: <_Transparency {...props} />,
        trust: <_Trust {...props} />,
        twitter: <_Twitter {...props} />,
        website: <_Website {...props} />,
        wellness: <_Wellness {...props} />,
    };

    return iconList[icon];
};

export default SVGIcon;
