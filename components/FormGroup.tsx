type FormGroupProps = {
  label: string;
  id: string;
  children: React.ReactNode;
};

function FormGroup({ label, id, children }: FormGroupProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-md text-gray-600' htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormGroup;
