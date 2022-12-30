import { useContext, useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import StarRating from '../StarsRating'
import { ProductContext } from '../../context/ProductContext'

import ProductList from '../ProductList'

const AddForm = forwardRef((props, ref) => {
  
  // const [imageValue, setImageValue] = useState("https://source.unsplash.com/user/c_v_r/100x100");
  const {addProduct} = useContext(ProductContext)
 // checkbox values

 const categoryData = [{
  name: "Men's Clothing" , 
  label:"Men's Clothing"
}, 
{
  name: "Women's Clothing",  
  label:"Women's Clothing"
}, 
{
  name: "Jewelry", 
  label:"Jewelry"
},
{
  name: "Electronics", 
  label:"Electronics"
}]
 
const [categories, setCategory] = useState([])

useEffect(() => {
  setCategory(categoryData)
},[])

const handleChange = (e) => {
  const {name, checked} = e.target;
  let tempCategory = categories.map((category) => 
    category.name === name ? { ...category, isChecked: checked} : category
  )
 setCategory(tempCategory)
}

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
          {categories.map((categories)=> (
             <Form.Check
             key={categories.name}
             inline
             label={categories.label}
             name={categories.name}
             checked = {category?.isChecked || false}
             value={category.name}
             onChange = {handleChange}
             type="checkbox"
             id="inline-checkbox1"
             
            //  onChange={handleChange}
           />
          ))}
            {/* <div key="inline-checkbox"className="modal-category-wrap">
              <Form.Check
                inline
                label="Jewelery"
                name="group1"
                type="checkbox"
                id="inline-checkbox1"
                value={value}
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="Womens Clothing"
                name="group1"
                type="checkbox"
                id="inline-checkbox2"
                value={value}
                onChange={handleChange}
              />
              <Form.Check
                inline
                name="group1"
                label="Mens Clothing"
                type="checkbox"
                id="inline-checkbox3"
                value={value}
                onChange={handleChange}
                
              />
              <Form.Check
                inline
                name="group1"
                label="Electronics"
                type="checkbox"
                id="inline-checkbox3"
                value="Electronics"
                onChange={handleChange}
              />
            </div> */}
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