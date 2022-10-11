import styled from 'styled-components';
import { Button } from '../styles/style_basic';
import theme from '../styles/theme';
export default function TagButton({ posts }) {
	return <Tagbutton>{posts}</Tagbutton>;
}

const Tagbutton = styled.button`
	font-size: 2rem;
	font-weight: bold;
	border: 0.1rem solid;
	border-radius: 0.5rem;
	background-color: ${theme.colors.theme_color1};
	margin: 0.4rem 0.4rem 0.4rem 0.4rem;
`;
