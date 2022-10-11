import Head from "next/head";
import Link from "next/link";
import { getDatabase, getBlocks, getPage } from "../lib/notion";
import { Text } from "./[id].js";

import ProFile from "../components/profile";
import { Globalstyle } from "../styles/global";
import styled from "styled-components";
export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  // console.log(posts[0].properties["태그"].multi_select[0].name);
  return (
    <>
      <Globalstyle />
      <div>
        <ProFile />
        <main>
          <header>
            <div>
              <img src="/head.png" width={80} />
              <span className={styles.plus}>+</span>
              <img src="/blog2.png" width={80} />
            </div>
          </header>
          <ol>
            {posts.map((post) => {
              const date = new Date(post.last_edited_time).toLocaleString(
                "en-US",
                {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                }
              );
              return (
                <li key={post.id}>
                  <h2>{post.properties["이름"].title[0].plain_text}</h2>
                  <h3>
                    <Link href={`/${post.id}`}>
                      <a>
                        {/* <Text
                          text={post.properties["이름"].title[0].plain_text}
                        /> */}
                      </a>
                    </Link>
                  </h3>
                  <p>{date}</p>
                  <Link href={`/${post.id}`}>
                    <a> Read post →</a>
                  </Link>
                </li>
              );
            })}
          </ol>
        </main>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  console.log(database);
  // console.log(database);
  // const database2 = await getDatabase2(databaseId);
  // const page = await getPage(database.id);
  // console.log(page.properties["이름"].title[0].plain_text);

  return {
    props: {
      posts: database,
      // pages: page,
    },
    revalidate: 1,
  };
};
