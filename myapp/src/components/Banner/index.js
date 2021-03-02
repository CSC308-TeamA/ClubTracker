import React from 'react';
import {
    Bandiv,
    Image, Title
} from './BannerElements';
import bannerImage from '../../assets/websiteBanner.jpg';

const Banner = () => {
    return(
        <>
            <Bandiv>
                <Image src={bannerImage} alt="Banner"/>
                <Title>GO BEARS!</Title>
            </Bandiv>
        </>
    )
}

export default Banner;