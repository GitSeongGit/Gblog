import Image from 'next/image';
import Head from 'next/head';
import styled from 'styled-components';

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
	border: 10rem;
	position: fixed;
	top: 5rem;
	right: 0;
	border: 1rem solid;
	border-width: 0.1rem;
	border-color: whitesmoke;
	border-radius: 1.2rem;
	display: flex;
	flex-direction: column;
	width: 20rem;
	text-align: center;
`;

const ProfileImage = styled.span`
	/* display: block;
		float: center; */
	width: 8rem;
	height: 9rem;
	border: 0.1rem solid black;
	border-radius: 1rem;
	margin: auto;
	margin-top: 2rem;
	/* align-items: center;
	text-align: center; */
	/* justify-content: center; */
`;
const IConBox = styled.div`
	display: grid;
	/* grid-template-rows: repeat(4, 1fr); */
	grid-template-columns: repeat(4, 1fr);
`;
const Icon = styled.span`
	margin: 1rem 1rem 1rem 1rem;
`;
