import Head from 'next/head';
import Header from './Header';

type PageLayoutProps = {
  metaTitle?: string;
  metaDesc?: string;
  children: React.ReactNode;
};

function PageLayout({
  metaTitle = 'Expenses',
  metaDesc = 'Expenses is a web application that allows you to keep track of your purchases.',
  children,
}: PageLayoutProps) {
  return (
    <div className='bg-slate-100 h-screen'>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDesc} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main className='max-w-screen-lg mx-auto'>{children}</main>
    </div>
  );
}

export default PageLayout;
