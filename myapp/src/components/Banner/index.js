import React from 'react';
import {
    Bandiv,
    Image
} from './BannerElements';
import bannerImage from '../../assets/websiteBanner.jpg';

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