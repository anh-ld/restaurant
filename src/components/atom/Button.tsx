import styled from "styled-components";

const Button = styled.button`
    border-radius: 0.25rem;
    border: none;
    font-family: "horizon_roundedbold";
    &:focus {
    outline: none;
    }
    &:hover {
    cursor: pointer;
    }
`;

export default Button;
