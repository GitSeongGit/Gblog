import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ProFileBox } from '../components/profile';
import { getDatabase, getBlocks, getPage } from '../lib/notion';
import ProFile from '../components/profile';
import styled, { keyframes } from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

export const databaseId = process.env.NOTION_DATABASE_ID;
export default function Home({ posts }) {
	return (
		<>
			<Header />
			<Container>
				<ProFile />
				<ContentBox>
					{posts.map((post) => {
						const image = () => {
							let data = '';
							if (post.cover.type === 'file') {
								data = post.cover.file.url;
								return data;
							} else {
								data = post.cover.external.url;
								return data;
							}
						};
						const imageData = image();
						const tag = () => {
							let data = [];
							post.properties['태그'].multi_select.map((el) => {
								data.push(el.name);
							});
							return data;
						};
						return (
							<Link href={`/${post.id}`}>
								<Contnet key={post.id}>
									<ImageBox>
										<Image
											className="img1"
											rel="img"
											src={imageData}
											layout="responsive"
											width={100}
											height={80}
										/>
									</ImageBox>
									<ContentTitle>
										{post.properties['이름'].title[0].plain_text}
									</ContentTitle>
									<ContentText>
										{post.properties['텍스트'].rich_text[0].plain_text}
									</ContentText>
								</Contnet>
							</Link>
						);
					})}
				</ContentBox>
				<Footer />
			</Container>
		</>
	);
}

export const getStaticProps = async () => {
	const database = await getDatabase(databaseId);

	return {
		props: {
			posts: database,
		},
		revalidate: 1,
	};
};

const shake = keyframes`{
0% ,100% {
	transform : translate3d(-1px ,1px ,0);
}
20% , 80% {
	transform : translate3d(0 ,2px , 0)
}

40% , 60% {
	transform: translate3d(0,0,2px);
}

}`;

const Container = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.notice.themes.main};
	@media ${({ theme }) => theme.theme.device.mobile} {
		padding: 5% 15px 0 15px;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
		padding: 0 3% 0 3%;
		/* > header {
			padding: 0 3% 0 3%;
		} */
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		padding: 0 10% 0 10%;
		/* > header {
			padding: 0 10% 0 10%;
		} */
	}
`;
const ContentBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 70%;
	@media ${({ theme }) => theme.theme.device.mobile} {
		width: 100%;
		flex-direction: column;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
		width: 66%;
		padding: 50px 10px 50px 10px;
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		width: 65%;
		justify-content: space-around;
		padding: 50px 10px 50px 10px;
	}
`;
const Contnet = styled.div`
	border: 1px solid whitesmoke;
	border-radius: 10px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;

	box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
		rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
	@media ${({ theme }) => theme.theme.device.mobile} {
		width: 25rem;
		height: 15rem;
		padding: 0 0 0 0;
		margin: 10px 10% 10px 10%;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
		width: 14rem;
		height: 12rem;
		margin: 0.5rem 10px 0.5rem 10px;
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		width: 8rem;
		height: 192px;
		margin: 0.5rem 10px 0.5rem 10px;
		padding: 0 0 0 0;
	}
`;
const ImageBox = styled.div`
	display: block;
	margin-top: 10px;

	width: 55%;
	height: 10%;
	//next js 이미지 스펙
	> span {
		border-radius: 20px;
	}
	@media ${({ theme }) => theme.theme.device.mobile} {
		width: 25%;
		height: 10px;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
	}
`;
const ContentTitle = styled.span`
	@media ${({ theme }) => theme.theme.device.mobile} {
		font-size: 30px;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
		font-size: 20px;
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		font-size: 15px;
	}
`;
const ContentText = styled.span`
	@media ${({ theme }) => theme.theme.device.mobile} {
		font-size: 15px;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
		font-size: 8px;
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		font-size: 7px;
	}
`;
