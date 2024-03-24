import { useState } from 'react';
import Button from '../ui/Button';
import CreateCabinForm from '../features/cabins/CreateCabinForm';

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new Cabin
      </Button>
      {isOpenModal && <CreateCabinForm />}
    </div>
  );
}

export default AddCabin;
