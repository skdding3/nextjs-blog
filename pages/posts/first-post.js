import Head from "next/head";
import Layout from "../../components/Layout";


export default function FirstPost() {
    return (
        <Layout>
        <Head>
            <title>첫번째 포스트</title>
        </Head>
        <div>첫번째 포스트</div>
        </Layout>
    )
}