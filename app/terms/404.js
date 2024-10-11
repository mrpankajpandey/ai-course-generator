import Head from 'next/head';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Head>
        <title>Page Not Found | AI Course Generator</title>
        <meta name="description" content="The page you are looking for does not exist. Return to the homepage." />
      </Head>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Go Back to Homepage
        </a>
      </Link>
    </div>
  );
};

export default Custom404;
