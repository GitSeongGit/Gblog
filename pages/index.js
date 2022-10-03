import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getDatabase, getBlocks, getPage } from '../lib/notion';
import { Text } from './[id].js';
import ProFile from '../components/profile';
import styled from 'styled-components';
import Header from '../components/header';

export const databaseId = process.env.NOTION_DATABASE_ID;

const Container = styled.div`
	display: flex;
`;
const ListBox = styled.div``;

const List = styled.li`
	display: grid;
	border: 1rem solid rgba(black, 0.1);
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	align-content: center;
`;
const ListItem = styled.ol`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: red;
	margin: 1rem 1rem 1rem 1rem;
	gap: 1rem;
`;

export default function Home({ posts }) {
	const tagData = [];
	const data = posts.map((post) => {
		post.properties['태그'].multi_select.map((el) => {
			const found = tagData.find((data) => data === el.name);
			if (found === undefined) {
				tagData.push(el.name);
			}
		});
	});

	//태그
	console.log(posts[10].properties['태그'].multi_select[0].name);
	// console.log(posts[14].cover);
	return (
		<>
			<Header />
			<ProFile />
			<ListBox id="aa">
				<List id="aas">
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
						const tagData = tag();

						return (
							<ListItem key={post.id}>
								{tagData.map((tag) => {
									return <p>{tag}</p>;
								})}
								<Image rel="img" src={imageData} width={100} height={100} />
								<Link href={`/${post.id}`}>
									<h2>{post.properties['이름'].title[0].plain_text}</h2>
								</Link>
							</ListItem>
						);
					})}
				</List>
			</ListBox>
		</>
	);
}

export const getStaticProps = async () => {
	const database = await getDatabase(databaseId);

	return {
		props: {
			posts: database,
			// pages: page,
		},
		revalidate: 1,
	};
};
