import Header from '../components/Header';

const Home = () => {
  return (
    <div className="mt-12 m-auto max-w-4xl leading-relaxed">
    <Header />
    <article className="mx-2 space-y-3">
      <h1 className="mb-5 text-3xl font-bold">👋 hey!</h1>
      <p>
        I'm a London based Software Engineer, currently working at the Department for Work
        and Pensions. My professional work has involved writing code in Java and Scala.
      </p>

      <p>
        In my spare time I try to keep somewhat fit - now by dabbling in cycling. I also try
        to take some nice photos when I get the opportunity.
      </p>
    </article>
  </div>
  )
};

export default Home;
