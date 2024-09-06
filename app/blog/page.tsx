import Link from 'next/link';
import { getSortedPostsDataByYear } from '@/app/lib/posts';

const Blog = () => {
  const postDataByYear = getSortedPostsDataByYear();
  const years = Object.keys(postDataByYear).reverse();

  return (
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
                    <td>- <Link href={`../blog/${post.id}`} className="hover:underline">{post.title}</Link></td>
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
  )
}

export default Blog;
