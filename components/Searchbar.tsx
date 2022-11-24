function Searchbar() {
  return (
    <div className='bg-white border-b md:p-2 p-4 md:border-none md:rounded-md'>
      <form className='bg-slate-100 md:bg-transparent p-2 rounded-lg'>
        <input
          className='w-full bg-slate-100 md:bg-transparent outline-none md:text-lg'
          type='text'
          placeholder='Enter some text...'
        />
      </form>
    </div>
  );
}

export default Searchbar;
