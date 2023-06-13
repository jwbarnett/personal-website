import Header from '../components/Header';
import Link from 'next/link';
import { getSortedPostsDataByYear, BlogData } from '../lib/posts';

export async function getStaticProps() {
  const postDataByYear: Record<number, Array<BlogData>> = getSortedPostsDataByYear();
  const years: Array<string> = Object.keys(postDataByYear).reverse();
  
  return {
    props: {
      years,
      postDataByYear,
    },
  };
}

const Blog = ({ years, postDataByYear }) => {
  return (
    <div className="mt-12 m-auto max-w-4xl leading-relaxed">
      <Header />
      <article className="space-y-3">
        <h1 className="mb-5 text-3xl font-bold">Blog</h1>
        <div>
          {
            years.map((year) => 
            <div className="mb-4" key={year}> 
              <h2 className="mb-2 text-2xl">{year}</h2>
              <table>
                <tbody>
                  {
                    postDataByYear[year].map((post) =>
                    <tr key={post.id}>
                      <td>{post.date}</td>
                      <td>- <Link href={`../posts/${post.id}`} className="hover:underline">{post.title}</Link></td>
                    </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
            )
          }
         
        </div>
      </article>
    </div>
  )
}

export default Blog;
