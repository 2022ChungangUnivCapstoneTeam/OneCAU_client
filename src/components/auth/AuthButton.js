import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/style_utils';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #0c218b;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-3px);
    }

    // margin-top: 1rem;
    // padding-top: 0.6rem;
    // padding-bottom: 0.5rem;


    // background: ${oc.gray[6]};
    // color: white;

    // text-align: center;
    // font-size: 1.25rem;
    // font-weight: 500;

    // cursor: pointer;
    // user-select: none;
    // transition: .2s all;

    // &:hover {
    //     background: ${oc.gray[9]};
    //     ${shadow(0)}
    // }

    // &:active {
    //     background: ${oc.gray[9]};
    // }

`;

const AuthButton = ({children, onClick}) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default AuthButton;