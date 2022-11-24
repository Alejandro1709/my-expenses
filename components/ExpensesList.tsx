import Expense from './Expense';
import type IOrder from '../types/order';

const dummyOrders: Array<IOrder> = [
  {
    id: 1,
    name: 'MacBook Pro 16 inch 2019',
    description: 'The best laptop ever made by Apple',
    date: '17-09-2022 10:35 AM',
    brand: 'Apple',
    currency: 'USD',
    price: 2500,
    quantity: 1,
    category: 'Electronics',
    image:
      'https://images.unsplash.com/photo-1542466500-dccb2789cbbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
    total: 2500,
    createdAt: '2021-09-17T10:35:00.000Z',
    updatedAt: '2021-09-17T10:35:00.000Z',
  },
  {
    id: 2,
    name: 'Playstation 5',
    description: 'The best gaming console ever made by Sony',
    date: '25-12-2022 10:35 AM',
    brand: 'Sony',
    currency: 'USD',
    price: 2500,
    quantity: 1,
    category: 'Electronics',
    image:
      'https://images.unsplash.com/photo-1542466500-dccb2789cbbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
    total: 2500,
    createdAt: '2021-09-17T10:35:00.000Z',
    updatedAt: '2021-09-17T10:35:00.000Z',
  },
];

function ExpensesList() {
  return (
    <div className='flex flex-col md:mt-4 select-none rounded-md overflow-hidden'>
      {dummyOrders.map((order: IOrder) => (
        <Expense key={order.id} order={order} />
      ))}
    </div>
  );
}

export default ExpensesList;
