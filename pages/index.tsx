import ExpensesList from '../components/ExpensesList';
import PageLayout from '../components/PageLayout';
import Searchbar from '../components/Searchbar';
import prisma from '../lib/prisma';
import type IOrder from '../types/order';

type HomeProps = {
  orders: IOrder[];
};

export default function Home({ orders }: HomeProps) {
  return (
    <PageLayout metaTitle='Expenses | Home'>
      <section className='md:mt-6'>
        <Searchbar />
        <ExpensesList orders={orders} />
      </section>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const orders = await prisma.order.findMany();

  return {
    props: {
      orders: JSON.parse(JSON.stringify(orders)),
    },
  };
}
