import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds } from '../../lib/posts';


// 경로에는 getAllPostIds()에서 반환한 알려진 경로 배열이 포함됩니다.
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post() {
    return (
        <Layout>
        <Head>
            <title>첫번째 포스트</title>
        </Head>
        <div>첫번째 포스트</div>
        </Layout>
    )
}