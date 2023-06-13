import Link from 'next/link';

const Header = () => {
  return (
    <div className="mb-20">
      <div>
        <Link href="/" className="hover:underline text-4xl mx-5">James Barnett</Link>
      </div>
      <ul className="flex justify-end gap-x-5 mx-5">
        <li>
          <Link href="./about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link href="./blog" className="hover:underline">Blog</Link>
        </li>
        <li>
          <Link href="https://photos.barnett.dev" className="hover:underline">Photos</Link>
        </li>
      </ul>
    </div>
  );
}
  
export default Header;
