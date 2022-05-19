import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color: ${oc.gray[6]};
    margin-bottom: 0.25rem;
`;


const Input = styled.input`
    width: 80%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;
    &:hover {
    transform: translateY(-3px);
    }
`;

// let StyledInput = styled.input`
//   width: 80%;
//   max-width: 350px;
//   min-width: 250px;
//   height: 40px;
//   border: none;
//   margin: 0.5rem 0;
//   background-color: #f5f5f5;
//   box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
//   border-radius: 8px;
//   padding: 0 1rem;
//   transition: all 0.2s ease-in;
//   &:hover {
//     transform: translateY(-3px);
//   }
// `;

// let Status = styled.div`
//   height: 10px;
//   width: 10px;
//   background: #9d9d9d;
//   border-radius: 10px;
//   margin-left: 1rem;
//   ${StyledInput}:focus + & {
//     background: #ffa689;
//   }
//   ${StyledInput}:invalid + & {
//     background: #fe2f75;
//   }
//   ${StyledInput}:valid + & {
//     background: #70edb9;
//   }
// `;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.

const InputLabel = ({label, ...rest}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input {...rest}/>
    </Wrapper>
);

export default InputLabel;