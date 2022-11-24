type FormInputProps = {
  id: string;
  type?: string;
  placeholder?: string;
  name: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({
  id,
  type = 'text',
  placeholder,
  name,
  value,
  onChange,
}: FormInputProps) {
  return (
    <input
      className='p-2 rounded-md'
      type={type}
      name={name || id}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default FormInput;
