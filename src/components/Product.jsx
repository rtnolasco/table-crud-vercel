import {React, useContext, useState} from 'react'
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap'
import { TableRow } from './TableRow';
import { ExpandButton } from './ExpandButton';
import useOpenController from '../hooks/useOpenController';
import EditForm from './modal/EditForm';

import { ProductContext } from '../context/ProductContext';

const Product = ({product, loading, }) => {

    const [show, setShow] = useState(false)
    const handleShowModal = () => setShow (true)
    const handleCloseModal = () => setShow (false)

    const {deleteProduct} = useContext(ProductContext)
    const {isOpen, toggle}= useOpenController(false)

if (loading) {
    return <td>Loading...</td>
}
    return (
        
        <>
            <tr>
                {/* <td>{product.id}</td>  */}
                <td>{product.title}</td> 
                <td>{product.category}</td> 
                <td>${product.price}</td> 
                <td><img src={product.image} className="tbl-image"></img></td> 
                <td style={{width:"130px"}}> 
                    <button onClick={handleShowModal} className="btn-edit" data-toggle="modal"> Edit </button> &nbsp;   
                    <button onClick={() => deleteProduct(product.id)} className="btn-edit" data-toggle="modal"> Delete </button>
                </td> 
                <Modal show={show} onHide={handleCloseModal}dialogClassName="modal-90w">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <EditForm ref={addFormRef} close={() => handleCloseModal()} /> */}
                        <EditForm />
                    </Modal.Body>
                    <Container style={{marginBottom:"10px"}}>
                                <Row>
                                    <Col>
                                        <Button onClick={handleCloseModal} className="btn-modal-cancel">Cancel</Button>
                                    </Col>
                                    <Col>
                                        
                                        {/* <Button onClick={()=>addFormRef.current.callhandleSubmit()} className="btn-modal-add">Add</Button> */}
                                        <Button className="btn-modal-add">Add</Button> 
                                    
                                    </Col>
                                </Row>
                        </Container>
                    <Modal.Footer>
                            
                    </Modal.Footer>
                </Modal>

                <ExpandButton isOpen={isOpen} toggle={toggle}/>
                  
               
            </tr>
            <tr>{isOpen && <TableRow product={product} />}
            </tr>
                </>
                    )
}
export default Product;