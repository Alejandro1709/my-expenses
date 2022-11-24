import CreateForm from '../../components/CreateForm';
import PageLayout from '../../components/PageLayout';

function NewExpensePage() {
  return (
    <PageLayout metaTitle='Expenses | New'>
      <section className='mt-6'>
        <CreateForm />
      </section>
    </PageLayout>
  );
}

export default NewExpensePage;
