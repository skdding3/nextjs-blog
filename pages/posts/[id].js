import Head from "next/head";
import Layout from "../../components/Layout";
import { getPostData } from '../../lib/posts';
import Date from "../../components/Date";
import utilStyles from '../../styles/utils.module.css';
import {useRouter} from "next/router";


// 경로에는 getAllPostIds()에서 반환한 알려진 경로 배열이 포함됩니다.
export async function getStaticPaths() {
    // const paths = getAllPostIds();

    const paths = [
        {
            parans: {
                id: 'ssg-ssr',
            },
        }
    ]
    return {
        paths, // path 배열
        fallback: 'blocking',
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
    const router = useRouter()

    if (router.isFallback){
       return  <div>Loading...</div>
    }
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