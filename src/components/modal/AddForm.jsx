import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import StarRating from '../StarsRating'

const AddForm = () => {
  return (
    <Container>
    <Form>
      <Row>
        <Col>
          <Form.Group>
          <Form.Label>ID</Form.Label>
            <Form.Control
              type = "text"
              
              required
              >
            </Form.Control>
          </Form.Group>

      
         <Form.Group>
         <Form.Label>Title</Form.Label>
            <Form.Control
              type = "text"
              
              required
              >
            </Form.Control>
          </Form.Group>
        </Col>
        
        <Col>
        <Form.Group>
          <Form.Label>Image Link</Form.Label>
        <Form.Control
          type = "text"
          
          >

        </Form.Control>
        </Form.Group>
         
          <Form.Group>
          <Form.Label>Price</Form.Label>
            <Form.Control
                type = "text"
               required
              >
            </Form.Control>
          </Form.Group>  
        </Col>
      </Row>
        
        <Form.Group>
          <Form.Label>Description</Form.Label>
        <Form.Control
          as = "textarea"
         >
        </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
            <Form.Control
              type = "text"
              
              >
            </Form.Control>
          </Form.Group> 
      
        
        <Form.Group>
          <Form.Label>Rating</Form.Label>
        
         <div style={{display:"flex"}}> <StarRating /> </div>

        
      </Form.Group>
    <Button variant="succes" type="submit" >Add new product</Button>  
      
    </Form>
    </Container>
  )
}

export default AddForm