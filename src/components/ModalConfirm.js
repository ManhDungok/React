import { Modal, Button } from 'react-bootstrap';
import { deleteUser } from '../services/UserService';
import { toast } from 'react-toastify';

const ModalConfirm = (props) => {
    const { show, handleClose, dataUserDelete, handleDeleteUserFromModal } = props;

    const confirmDelete = async () => {
        let res = await deleteUser(dataUserDelete.id);

        // (+) trong trg hợp cái này trả ra 1 chuỗi string thì sẽ chuyển thành kiểu số nguyên
        // đấy là lí do mà ta so sánh 2 thằng này thì luôn đúng
        if (res && +res.statusCode === 204) {
            toast.success("Delete user succeed!")
            handleClose();
            handleDeleteUserFromModal(dataUserDelete);
        } else {
            toast.error("Error delete user")
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        Are u sure to DELETE this user?
                        <br />
                        <b>Email = {dataUserDelete.email} ?</b>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => confirmDelete()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalConfirm;