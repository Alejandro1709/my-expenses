import FormGroup from './FormGroup';
import FormInput from './FormInput';

function CreateForm() {
  return (
    <form className='flex flex-col gap-2 mx-6'>
      <FormGroup id='name' label='Name:'>
        <FormInput name='name' id='name' placeholder='Macbook Pro' />
      </FormGroup>
      <FormGroup id='description' label='Description:'>
        <FormInput
          name='description'
          id='description'
          placeholder='The best laptop ever made by Apple'
        />
      </FormGroup>
      <FormGroup id='date' label='Purchase Date:'>
        <FormInput name='date' type='date' id='date' />
      </FormGroup>
      <FormGroup id='brand' label='Brand:'>
        <FormInput name='brand' id='brand' placeholder='Apple' />
      </FormGroup>
      <FormGroup id='currency' label='Currency:'>
        <select className='p-2 rounded-md' id='currency'>
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
          <option value='GBP'>GBP</option>
          <option value='PEN'>PEN</option>
        </select>
      </FormGroup>
      <FormGroup id='price' label='Price:'>
        <FormInput name='price' type='number' id='price' placeholder='2500' />
      </FormGroup>
      <FormGroup id='quantity' label='Quantity:'>
        <FormInput
          name='quantity'
          type='number'
          id='quantity'
          defaultValue={1}
        />
      </FormGroup>
      <FormGroup id='category' label='Category:'>
        <select className='p-2 rounded-md' id='category'>
          <option value='Electronics'>Electronics</option>
          <option value='Food'>Food</option>
          <option value='Clothes'>Clothes</option>
          <option value='Toys'>Toys</option>
          <option value='Other'>Other</option>
        </select>
      </FormGroup>
      <FormGroup id='image' label='Image:'>
        <FormInput name='image' id='image' placeholder='https://...' />
      </FormGroup>
      <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'>
        Create Expense
      </button>
    </form>
  );
}

export default CreateForm;
