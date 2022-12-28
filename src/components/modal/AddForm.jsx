import { useContext, useState, forwardRef, useImperativeHandle } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import StarRating from '../StarsRating'
import { ProductContext } from '../../context/ProductContext'

import ProductList from '../ProductList'

const AddForm = forwardRef((props, ref) => {
  

  const {addProduct} = useContext(ProductContext)



  const [newProduct,setNewProduct] = useState({
    title:"",category:"", description:"", price:"",image:"",rating:""
  })

  const onInputChange = (e) => [
    setNewProduct({...newProduct,[e.target.name]: e.target.value})
  ]

  const {title,category,description,price,image,rating} = newProduct


  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(title,category,description,price,image,rating)
    try{addProduct(title,category,description,price,image,rating)}
    catch(error){this.setState({ error });}
    
  }

  useImperativeHandle(ref, () => ({
    callhandleSubmit() {
      handleSubmit()
     
    }

  }))
  return (
    <Container>
    <Form onSubmit={handleSubmit}>
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
              value = {title}
              onChange = { (e) => onInputChange(e)}
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
          name="image"
          value = {image}
          onChange = { (e) => onInputChange(e)}
         
          
          >

        </Form.Control>
        </Form.Group>
         
          <Form.Group>
          <Form.Label>Price</Form.Label>
            <Form.Control
                type = "text"
                name="price"
                value = {price}
                onChange = { (e) => onInputChange(e)}
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
           value = {description}
          onChange = { (e) => onInputChange(e)}
         >
        </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
            <Form.Control
              type = "text"
              name="category"
              value = {category}
              onChange = { (e) => onInputChange(e)}
              >
            </Form.Control>
          </Form.Group> 
      
        
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
          type = "text"
          name="rating"
          value = {rating}
          onChange = { (e) => onInputChange(e)}
          
         
          
          >

        </Form.Control>
        
         <div style={{display:"flex"}}> <StarRating /> </div>

        
      </Form.Group>
    <Button variant="succes" type="submit" >Add new product</Button>  
    <Button onClick={() => props.close()}>close</Button>
      
    </Form>
    </Container>
  )
})

export default AddForm