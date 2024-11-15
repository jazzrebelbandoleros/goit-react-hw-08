// import React from "react";
// import styles from "./Contact.module.css";
// import { FaPhone } from "react-icons/fa6";
// import { RiContactsFill } from "react-icons/ri";
// import ModalDelete from "../Modal/ModalDelete";
// import ModalEdit from "../Modal/ModalEdit";
// import { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";

// const Contact = ({ data: { id, name, number }, onDelete, onEdit }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//   const handleDeleteClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleConfirmDelete = () => {
//     onDelete(id);
//     toast.success("Successfully deleted!");
//     setIsModalOpen(false);
//   };

//   const handleEditClick = () => {
//     setIsEditModalOpen(true);
//   };

//   const handleSaveEdit = (name, number) => {
//     onEdit({
//       contactId: id,
//       updatedData: { name, number },
//     });
//     toast.success("Successfully edited!");
//     setIsEditModalOpen(false);
//   };

//   return (
//     <div className={styles.container}>
//       <Toaster position="top-center" reverseOrder={false} />

//       <p className={styles.textName}>
//         <RiContactsFill className={styles.icon} />
//         {name}
//       </p>
//       <p className={styles.text}>
//         <FaPhone className={styles.icon} />
//         {number}
//       </p>
//       <div className={styles.btnBox}>
//         <button className={styles.btn} onClick={handleEditClick}>
//           Edit
//         </button>
//         <button className={styles.btn} onClick={handleDeleteClick}>
//           Delete
//         </button>
//       </div>

//       <ModalDelete
//         open={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onConfirm={handleConfirmDelete}
//       />

//       <ModalEdit
//         open={isEditModalOpen}
//         onClose={() => setIsEditModalOpen(false)}
//         onSave={handleSaveEdit}
//         initialName={name}
//         initialNumber={number}
//       />
//     </div>
//   );
// };

// export default Contact;

import styles from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { RiContactsFill } from "react-icons/ri";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <p className={styles.textName}>
        <RiContactsFill className={styles.icon} />
        {name}
      </p>
      <p className={styles.text}>
        <FaPhone className={styles.icon} />
        {number}
      </p>
      <div className={styles.btnBox}>
        <button
          className={styles.btn}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
