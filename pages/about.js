import Head from "next/head";
import Link from "next/link";
const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          sit, fugit fugiat error, perferendis dicta consequuntur consectetur
          voluptate animi, velit ab. Atque laboriosam rerum ab! Labore a iusto
          corporis expedita.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          sit, fugit fugiat error, perferendis dicta consequuntur consectetur
          voluptate animi, velit ab. Atque laboriosam rerum ab! Labore a iusto
          corporis expedita.
        </p>
        <Link href="/ninjas">
          <a>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
};

export default About;
