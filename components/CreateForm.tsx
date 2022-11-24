import { useState } from 'react';
import FormGroup from './FormGroup';
import FormInput from './FormInput';

function CreateForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    brand: '',
    currency: '',
    price: 0,
    quantity: 0,
    category: '',
    image: '',
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (Object.values(formData).some((value) => value === '')) {
      alert('Please fill out all fields');
      return;
    }

    console.log(formData);
  }

  return (
    <form className='flex flex-col gap-2 mx-6' onSubmit={handleSubmit}>
      <FormGroup id='name' label='Name:'>
        <FormInput
          name='name'
          id='name'
          placeholder='Macbook Pro'
          value={formData.name}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup id='description' label='Description:'>
        <FormInput
          name='description'
          id='description'
          placeholder='The best laptop ever made by Apple'
          value={formData.description}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup id='date' label='Purchase Date:'>
        <FormInput
          name='date'
          type='date'
          id='date'
          value={formData.date}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup id='brand' label='Brand:'>
        <FormInput
          name='brand'
          id='brand'
          placeholder='Apple'
          value={formData.brand}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup id='currency' label='Currency:'>
        <select
          className='p-2 rounded-md'
          id='currency'
          onChange={(e) =>
            setFormData({ ...formData, currency: e.target.value })
          }
        >
          <option defaultChecked>--- SELECT A CURRENCY ---</option>
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
          <option value='GBP'>GBP</option>
          <option value='PEN'>PEN</option>
        </select>
      </FormGroup>
      <FormGroup id='price' label='Price:'>
        <FormInput
          name='price'
          type='number'
          id='price'
          placeholder='2500'
          value={formData.price}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup id='quantity' label='Quantity:'>
        <FormInput
          name='quantity'
          type='number'
          id='quantity'
          defaultValue={1}
          value={formData.quantity}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup id='category' label='Category:'>
        <select
          id='category'
          className='p-2 rounded-md'
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
          <option defaultChecked>--- SELECT A CATEGORY ---</option>
          <option value='Electronics'>Electronics</option>
          <option value='Food'>Food</option>
          <option value='Clothes'>Clothes</option>
          <option value='Toys'>Toys</option>
          <option value='Other'>Other</option>
        </select>
      </FormGroup>
      <FormGroup id='image' label='Image:'>
        <FormInput
          name='image'
          id='image'
          placeholder='https://...'
          value={formData.image}
          onChange={handleInputChange}
        />
      </FormGroup>
      <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'>
        Create Expense
      </button>
    </form>
  );
}

export default CreateForm;
