import {React, useContext, useState,forwardRef, useImperativeHandle} from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import StarRating from '../StarsRating'
import { ProductContext } from '../../context/ProductContext'

const EditForm = forwardRef(({productsEdit}, ref) => {

  const id = productsEdit.id;
  const {updateProduct} = useContext(ProductContext)

  const [title,setTitle] = useState(productsEdit.title)
  const [category,setCategory] = useState(productsEdit.category)
  const [price,setPrice] = useState(productsEdit.price)
  const [image,setImage] = useState(productsEdit.image)
  const [description,setDescription] = useState(productsEdit.description)
 
  const updatedProduct = {id,title,category,price,image,description}

  const handleSubmit = (e) => {
    // e.preventDefault();
    updateProduct(id,updatedProduct)
  }

  useImperativeHandle(ref, () => ({
    callhandleSubmit() {
      handleSubmit()
     
    }

  }))

  return (
    <Container>
    <Form on onSubmit={handleSubmit}>
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
              value={title}
              onChange = { (e) => setTitle(e.target.value)}
            
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
          value={image}
          onChange = { (e) => setImage(e.target.value)}
       
         
          
          >

        </Form.Control>
        </Form.Group>
         
          <Form.Group>
          <Form.Label>Price</Form.Label>
            <Form.Control
                type = "text"
                name="price"
                value={price}
                onChange = { (e) => setPrice(e.target.value)}
              
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
          value={description}
          onChange = { (e) => setDescription(e.target.value)}
        
         >
        </Form.Control>
        </Form.Group>
        <Form.Group>
          
            {/* <Form.Control
              type = "text"
              name="category"
           
              >
            </Form.Control> */}
            
          <Form.Label>Category</Form.Label>
            <Form.Control
              type = "text"
              name="category"
              value = {category}
              onChange = { (e) => setCategory(e.target.value)}
              >
                
    
        {/* <div key="inline-checkbox" className="modal-category-wrap">
          <Form.Check
            inline
            label="Jewelery"
            name="group1"
            type="checkbox"
            id="inline-checkbox1"
            
          />
          <Form.Check
            inline
            label="Womens Clothing"
            name="group1"
            type="checkbox"
            id="inline-checkbox2"
          />
          <Form.Check
            inline
            
            label="Mens Clothing"
            type="checkbox"
            id="inline-checkbox3"
          />
          <Form.Check
            inline
            
            label="Electronics"
            type="checkbox"
            id="inline-checkbox3"
          />
        </div> */}
  
    

            </Form.Control>
          </Form.Group> 
        
      
        
        <Form.Group>
          <Form.Label>Rating</Form.Label>
        

      
        
         <div style={{display:"flex"}}> <StarRating /> </div>

        
      </Form.Group>
    {/* <Button variant="succes" type="submit" >Add new product</Button>  
    <Button onClick={() => props.close()}>close</Button> */}
      
    </Form>
    </Container>
  )
})

export default EditForm