import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from '../../lib/posts';


// 경로에는 getAllPostIds()에서 반환한 알려진 경로 배열이 포함됩니다.
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths, // path 배열
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}


export default function Post({postData}) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.data}
        </Layout>
    )
}