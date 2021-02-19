import React from 'react';
import {
    Bandiv,
    Image, Title
} from './BannerElements';
import bannerImage from '../../assets/websiteBanner.jpg';
import awardsImage from '../../assets/awards.PNG';

const Banner = () => {
    return(
        <>
            <Bandiv>
                {/* <Title> GO BEARS</Title> */}
                <Image src={bannerImage} alt="Banner"/>
            </Bandiv>
        </>
    )
}

export default Banner;