import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Header from '../../components/Header';

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateString = (date) => {
  return new Date(date).toLocaleDateString("en-UK", dateOptions);
}

export default function Post({ postData }) {
  return (
    <div className="m-12 mt-12 m-auto max-w-4xl leading-relaxed">
      <Header />
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-3xl font-bold">{postData.title}</h1>
        <div className="mb-5">{dateString(postData.date)}</div>
        <div className="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
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
