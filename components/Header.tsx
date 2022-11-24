function Header() {
  return (
    <header className='flex justify-center bg-white h-[60px] select-none'>
      <div className='flex justify-between items-center w-full mx-16'>
        <button className='invisible'>New Expense</button>
        <h1 className='text-2xl font-bold text-center'>Expenses</h1>
        <button>New Expense</button>
      </div>
    </header>
  );
}

export default Header;
