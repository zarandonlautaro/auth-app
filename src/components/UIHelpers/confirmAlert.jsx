import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';
import { axiosDelete } from '../../utils/axios';

const confirmDelete = (idUser, name, lastname, getUsers) => {
  return confirmAlert({
    title: `Delete ${name} ${lastname}`,
    message: 'Are you sure to do this?',
    buttons: [
      {
        label: 'Yes',
        onClick: async () => {
          const res = await axiosDelete(`/users/${idUser}`);
          const { success, message } = res.data;
          if (success) {
            getUsers();
            return toast.error(message);
          }
          return toast.error(message);
        },
      },
      {
        label: 'No',
        onClick: () => false,
      },
    ],
  });
};

export { confirmDelete };
