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

    const rowBackgroundColors = {
        "men's clothing": "#F8D8C3", 
        "women's clothing": "#D4F8D3",
        "electronics": "#EDE7FB",
        "jewelery": "#FBE7E9",

      };
      
      const options = {
        // ...
        rowStyle: (rowData) => {
          return {
            backgroundColor: rowBackgroundColors[rowData.priority] ?? "#fff",
          };
        },
        // ...
      };
      
    let {catColor} = [product.category];
    console.log("catColor",catColor)


    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

        if (loading) {

            return <tr><td>Loading...</td></tr>
        }
            return ( 

        <>
            <tr>
                <td>{product.id}</td> 
                <td>{product.title}</td> 
                <td ><div style={{lineHeight:"1.20rem",borderRadius:"8px", backgroundColor: rowBackgroundColors[product.category] ?? "transparent"}}>{product.category}</div> </td> 
                <td style={{}}>{currencyFormat(product.price)}</td> 
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
                    </Modal.Body>
                   
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