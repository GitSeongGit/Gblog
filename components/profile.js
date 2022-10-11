import Image from 'next/image';
import Head from 'next/head';
import styled from 'styled-components';
import theme from '../styles/theme';
export default function ProFile() {
	return (
		<ProFileBox>
			<ProfileImage>
				<Image rel="img" src="/frog.png" alt="프로필" width={50} height={95} />
			</ProfileImage>
			<IConBox>
				<Icon>
					<Image
						rel="img"
						src="/call.png"
						alt="메신저"
						width={20}
						height={20}
					/>
				</Icon>
				<Icon>
					<Image
						rel="img"
						src="/messenger.png"
						alt="메신저"
						width={20}
						height={20}
					/>
				</Icon>
				<Icon>
					<Image
						rel="img"
						src="/install.png"
						alt="메신저"
						width={20}
						height={20}
					/>
				</Icon>
				<Icon>
					<Image rel="img" src="/git.png" alt="메신저" width={24} height={24} />
				</Icon>
			</IConBox>
		</ProFileBox>
	);
}
const ProFileBox = styled.div`
	background-color: ${theme.itemColor.thema1};
	border: 10rem;
	position: fixed;
	top: 9rem;
	right: 0;
	border: 1rem solid;
	border-width: 0.1rem;
	border-color: whitesmoke;
	border-radius: 1.2rem;
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-left: 1rem;
	margin-right: 1rem;
	width: 180px;
	height: 180px;
	@media ${({ theme }) => theme.device.tablet} {
		display: none;
	}
`;

const ProfileImage = styled.span`
	width: 8rem;
	height: 9rem;
	border: 0.1rem solid black;
	border-radius: 1rem;
	margin: auto;
	margin-top: 1rem;
`;
const IConBox = styled.div`
	display: grid;
	/* grid-template-rows: repeat(4, 1fr); */
	grid-template-columns: repeat(4, 4fr);
`;
const Icon = styled.span`
	margin: 0.5rem 0.5rem 0.5rem 0.5rem;
`;
