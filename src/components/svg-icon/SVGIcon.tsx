import React, { CSSProperties } from 'react';
import Icon from '@ant-design/icons';
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
};

const SVGIcon: React.FC<SVGIconTypes> = ({ icon, style = {} }) => {
    const iconList = {
        alzheimer: _Alzheimer,
        badge: _Badge,
        'best-home-services': _BestHomeServices,
        'best-prices': _BestPrices,
        'best-staff': _BestStaff,
        calendar: _Calendar,
        'caret-down': _CaretDown,
        'caret-down-small': _CaretDownSmall,
        chat: _Chat,
        'child-services': _ChildServices,
        close: _Close,
        company_logo: _Company_Logo,
        cs: _Cs,
        doctor: _Doctor,
        facebook: _Facebook,
        instagram: _Instagram,
        location: _Location,
        mail: _Mail,
        passion: _Passion,
        'personal-escort': _PersonalEscort,
        'personal-services': _PersonalServices,
        person: _Person,
        phone: _Phone,
        plus: _Plus,
        quote: _Quote,
        services: _Services,
        'services-for-all-age': _ServicesForAllAge,
        'services-for-the-elderly': _ServicesForTheElderly,
        team: _Team,
        transparency: _Transparency,
        trust: _Trust,
        twitter: _Twitter,
        website: _Website,
        wellness: _Wellness,
    };

    return <Icon component={iconList[icon]} style={style} />;
};

export default SVGIcon;
