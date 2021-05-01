import styled from 'styled-components';

export const Label = styled.label`
    display: block;
    margin-top: 10px;
`;

export const CardContainer = styled.div`
    max-width: 350px !important;
    padding: 40px 40px;
    margin-left: auto;
    margin-right: auto;
`;

export const Card = styled.div`
    color: black;
    background-color: #f7f7f7;
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
`;

export const ProfileImgCard = styled.img`
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
`;
