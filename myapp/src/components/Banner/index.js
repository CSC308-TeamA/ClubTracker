import React from 'react';
import {
    Bandiv, Image, Title
} from './BannerElements';
import bannerImage from '../../assets/websiteBanner.jpg';

const Banner = () => {
    return(
        <>
            <Bandiv>
                <Title>Tahoma High School Robotics Team</Title>
                <Image src={bannerImage} alt="Banner"/>
            </Bandiv>
        </>
    )
}

export default Banner;