import Head from 'next/head';

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
      <header className='flex justify-center bg-white h-[60px]'>
        <div className='flex justify-between items-center w-full mx-16'>
          <button className='invisible'>New Expense</button>
          <h1 className='text-2xl font-bold text-center'>Expenses</h1>
          <button>New Expense</button>
        </div>
      </header>
      <main className='bg-blue-200'>{children}</main>
    </div>
  );
}

export default PageLayout;
