import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from "../../components/Date";
import utilStyles from '../../styles/utils.module.css';


// 경로에는 getAllPostIds()에서 반환한 알려진 경로 배열이 포함됩니다.
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths, // path 배열
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}


export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            </div>
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}