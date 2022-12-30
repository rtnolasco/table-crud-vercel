import { useContext, useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import StarRating from '../StarsRating'
import { ProductContext } from '../../context/ProductContext'

import ProductList from '../ProductList'

const AddForm = forwardRef((props, ref) => {
  
  
  const {addProduct} = useContext(ProductContext)



const [categoryInfo, setcategoryInfo] = useState({
  category1: [],
  category: [],
});

const handleChange = (e) => {
  // Destructuring
  const { value, checked } = e.target;
  const { category1 } = categoryInfo;
    
  console.log(`${value} is ${checked}`);
   
  // Case 1 : The user checks the box
  if (checked) {
    setcategoryInfo({
      category1: [...category1, value],
      category: [...category1, value],
    });
  }

  // Case 2  : The user unchecks the box
  else {
    setcategoryInfo({
      category1: category1.filter((e) => e !== value),
      category: category1.filter((e) => e !== value),
    });
  }
};


  const [newProduct,setNewProduct] = useState({
    title:"",category:"", description:"", price:"",image:"",rating:""
  })

  const onInputChange = (e) => [
    setNewProduct({...newProduct,[e.target.name]: e.target.value})
  ]

  const {title,category,description,price,image,rating} = newProduct


  const handleSubmit = (e) => {
    // e.preventDefault();
    // const category = value
    addProduct(title,category,description,price,image,rating)
    
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
              defaultValue = {categoryInfo.category}
              onChange = { (e) => onInputChange(e)}
            >
            </Form.Control>
        
            <div key="inline-checkbox"className="modal-category-wrap">
              <Form.Check
                inline
                label="Jewelery"
                name="category1"
                type="checkbox"
                id="inline-checkbox1"
                value="jewelery"
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="Womens Clothing"
                name="category1"
                type="checkbox"
                id="inline-checkbox2"
                value="women's clothing"
                onChange={handleChange}
              />
              <Form.Check
                inline
                name="category1"
                label="Mens Clothing"
                type="checkbox"
                id="inline-checkbox3"
                value="men's clothing"
                onChange={handleChange}
                
              />
              <Form.Check
                inline
                name="category1"
                label="Electronics"
                type="checkbox"
                id="inline-checkbox3"
                value="electronics"
                onChange={handleChange}
              />
            </div>
           </Form.Group> 
      
        
        <Form.Group>
        <div > <Form.Label style={{marginTop:"15px"}}>Rating</Form.Label> </div>
          {/* <Form.Control
          type = "text"
          name="rating"
          value = {rating}
          onChange = { (e) => onInputChange(e)}
          
         
          
          >

        </Form.Control> */}
        
         <div style={{display:"flex"}}> <StarRating /> </div>

        
      </Form.Group>
    {/* <Button variant="succes" type="submit" >Add new product</Button>  
    <Button onClick={() => props.close()}>close</Button> */}
      
    </Form>
    </Container>
  )
})

export default AddForm