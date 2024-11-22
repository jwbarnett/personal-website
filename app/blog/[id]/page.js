import { getAllPostIds, getPostData } from '@/app/lib/posts';

export async function generateStaticParams() {
  const posts = getAllPostIds();
 
  return posts.map((post) => ({
    id: post.params.id
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const postData = await getPostData(params.id);
  return {
    title: postData.title,
  }
}

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateString = (date) => {
  return new Date(date).toLocaleDateString("en-UK", dateOptions);
}

export default async function Post(props) {
  const params = await props.params;
  const postData = await getPostData(params.id);

  return (
    <article>
      <h1 className="text-3xl font-bold">{postData.title}</h1>
      <div className="mb-5">{dateString(postData.date)}</div>
      <div className="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
