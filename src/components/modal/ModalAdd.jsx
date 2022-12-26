import { Modal, Button } from "react-bootstrap";
import AddForm from './AddForm'

const ModalAdd = (show) => {
return (
    <Modal showModal={show}>
        <Modal.Header>
            <Modal.Title>
                X
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary">Close</Button>
        </Modal.Footer>
    </Modal>

    )}
export default ModalAdd