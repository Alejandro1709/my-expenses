import Image from 'next/image';

type ExpenseProps = {
  order: any;
};

function Expense({ order }: ExpenseProps) {
  return (
    <article className='flex justify-between bg-white hover:bg-gray-100 p-6 cursor-pointer'>
      <div className='flex gap-4'>
        <div className='w-[48px] h-[48px] bg-red-300 rounded-lg overflow-hidden'>
          <Image
            src={order.image}
            alt={order.name}
            height={50}
            width={200}
            draggable={false}
          />
        </div>
        <div className='flex flex-col'>
          <h2 className='md:text-xl font-bold'>{order.name}</h2>
          <p className='text-sm text-gray-500'>{order.description}</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <h2>{order.date}</h2>
        <p>{order.quantity} Item</p>
      </div>
    </article>
  );
}

export default Expense;
