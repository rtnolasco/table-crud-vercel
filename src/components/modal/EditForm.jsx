import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import StarRating from '../StarsRating'
import { ProductContext } from '../../context/ProductContext'

const EditForm = () => {
  return (
    <Container>
    <Form >
      <Row>
        <Col>
          <Form.Group>
          <Form.Label>ID</Form.Label>
            <Form.Control
              type = "text"
              name="id"
              
              disabled
              >
            </Form.Control>
          </Form.Group>

      
         <Form.Group>
         <Form.Label>Title</Form.Label>
            <Form.Control
              type = "text"
              name="title"
            
              >
            </Form.Control>
          </Form.Group>
        </Col>
        
        <Col>
        <Form.Group>
          <Form.Label>Image Link</Form.Label>
        <Form.Control
          type = "text"
          name="image"
       
         
          
          >

        </Form.Control>
        </Form.Group>
         
          <Form.Group>
          <Form.Label>Price</Form.Label>
            <Form.Control
                type = "text"
                name="price"
              
              >
            </Form.Control>
          </Form.Group>  
        </Col>
      </Row>
        
        <Form.Group>
          <Form.Label>Description</Form.Label>
        <Form.Control
          as = "textarea"
          name="description"
        
         >
        </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
            <Form.Control
              type = "text"
              name="category"
           
              >
            </Form.Control>
          </Form.Group> 
      
        
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
          type = "text"
          name="rating"
          >

        </Form.Control>
        
         <div style={{display:"flex"}}> <StarRating /> </div>

        
      </Form.Group>
    <Button variant="succes" type="submit" >Add new product</Button>  
    <Button onClick={() => props.close()}>close</Button>
      
    </Form>
    </Container>
  )
}

export default EditForm