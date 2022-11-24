import ExpensesList from '../components/ExpensesList';
import PageLayout from '../components/PageLayout';
import Searchbar from '../components/Searchbar';

export default function Home() {
  return (
    <PageLayout metaTitle='Expenses | Home'>
      <section className='md:mt-6'>
        <Searchbar />
        <ExpensesList />
      </section>
    </PageLayout>
  );
}
