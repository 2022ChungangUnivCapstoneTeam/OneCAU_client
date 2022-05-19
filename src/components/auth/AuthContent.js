import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Title = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      color: #666666;
      margin-bottom: 2rem;
    }
`;





const AuthContent = ({title, children}) => (
    <div>
        <Title><h3>{title}</h3></Title>
        {children}
    </div>
);

export default AuthContent;