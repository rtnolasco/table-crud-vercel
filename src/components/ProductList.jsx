import {React, useState, useContext} from 'react'
import {ProductContext} from '../context/ProductContext'
import { Table, Button, Modal,Container, Col, Row } from "react-bootstrap";
import ModalAdd from './modal/ModalAdd'
import AddForm from './modal/AddForm';


import Pagination from './Pagination'
import Product from './Product'

const ProductList = () => {

    const {products, loading} = useContext(ProductContext) 

    const [show, setShow] = useState(false)
    const handleShowModal = () => setShow (true)
    const handleCloseModal = () => setShow (false)
   
    //construct pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5)

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPagesNum = Math.ceil(products.length / productsPerPage);


return (
    <>
<div className="table-title">
        <div className="row">
            
            <div className="col-sm-6">
            </div>
        </div>
    </div>
    <div >
                <Button onClick={handleShowModal} variant="light" data-toggle="modal">Add a product</Button>
            </div>
     <table className="table-striped table-hover" style={{width: "1066px"}}>
        <thead>
            <tr>
                {/* <th>ID</th> */}
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Image</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
         <tbody>
                
            {currentProducts.map((product,index) => (
               <Product key= {product.id} product={product} loading={loading} index={index}/>
               
            ))}
            
        </tbody>
    </table>

    {/* <ModalAdd show={show}/> */}
    <Modal show={show} onHide={handleCloseModal}dialogClassName="modal-90w">
        <Modal.Header closeButton>
            <Modal.Title>
                
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Container>
                    <Row>
                        <Col>
                            <Button onClick={handleCloseModal} className="btn-modal-cancel">Cancel</Button>
                        </Col>
                        <Col>
                            <Button className="btn-modal-add">Add</Button>
                        </Col>
                    </Row>
            </Container>
        </Modal.Footer>
    </Modal>

     <Pagination pages = {totalPagesNum} setCurrentPage={setCurrentPage}/>
        </>
        )}

export default ProductList
