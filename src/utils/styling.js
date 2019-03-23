import { css } from 'styled-components';

export const buttonMainStyle = `
  border-radius: 0.25rem;
  border: none;
  font-family: 'horizon_roundedbold';
  &:focus {
    outline: none;
  }
  &:hover {
  	cursor: pointer;
  }
`;

const sizes = {
	desktop: 992,
	tablet: 767,
	phone: 480,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
	return acc
}, {});