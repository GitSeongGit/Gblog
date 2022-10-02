import Image from "next/image";
import Head from "next/head";
export default function ProFile() {
  return (
    <div>
      {/* <Image/> */}
      <span>
        <Image rel="img" src="/call.png" alt="메신저" width={20} height={20} />
        <Image
          rel="img"
          src="/messenger.png"
          alt="메신저"
          width={20}
          height={20}
        />
        <Image
          rel="img"
          src="/install.png"
          alt="메신저"
          width={20}
          height={20}
        />
        <Image rel="img" src="/git.png" alt="메신저" width={24} height={24} />
      </span>
      <Head>
        <title>Notion GS blog</title>
        <link rel="icon" href="/head.png" />
      </Head>
    </div>
  );
}
