import Expense from './Expense';
import type IOrder from '../types/order';

type ExpensesListProps = {
  orders: IOrder[];
};

function ExpensesList({ orders }: ExpensesListProps) {
  return (
    <div className='flex flex-col md:mt-4 select-none rounded-md overflow-hidden'>
      {orders.length > 0 &&
        orders.map((order: IOrder) => <Expense key={order.id} order={order} />)}
    </div>
  );
}

export default ExpensesList;
