import { useContext, useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import StarRating from '../StarsRating';
import { ProductContext } from '../../context/ProductContext';

const AddForm = forwardRef((props, ref) => {
	const { addProduct } = useContext(ProductContext);

	const [newProduct, setNewProduct] = useState({
		title: '',
		category: [],
		description: '',
		price: '',
		image: '',
		rating: '',
	});

	const onInputChange = (event) => {
		if (event.target.name === 'category') {
			let copy = { ...newProduct };
			if (event.target.checked) {
				copy.category.push(event.target.value);
			} else {
				copy.category = copy.category.filter((el) => el != event.target.value);
			}

			setNewProduct(copy);
		} else {
			setNewProduct(() => ({
				...newProduct,
				[event.target.name]: event.target.value,
			}));
		}
	};

	const { title, category, description, price, image, rating } = newProduct;

	const handleSubmit = (e) => {
		// console.log('formData', newProduct);
		// e.preventDefault();
		addProduct(title, category, description, price, image, rating);
	};

	useImperativeHandle(ref, () => ({
		callhandleSubmit() {
			handleSubmit();
		},
	}));

	// useEffect(() => {
	// 	setcategoryInfo(category);
	// }, []);

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Row>
					<Col>
						<Form.Group>
							<Form.Label>ID</Form.Label>
							<Form.Control type="text" name="id" disabled></Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" name="title" onChange={onInputChange} required></Form.Control>
						</Form.Group>
					</Col>

					<Col>
						<Form.Group>
							<Form.Label>Image Link</Form.Label>
							<Form.Control type="text" name="image" onChange={onInputChange}></Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Label>Price</Form.Label>
							<Form.Control type="text" name="price" onChange={onInputChange} required></Form.Control>
						</Form.Group>
					</Col>
				</Row>

				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control as="textarea" name="description" onChange={onInputChange}></Form.Control>
				</Form.Group>

				<Form.Group>
					<Form.Label>Category</Form.Label>
					{/* <Form.Control
						id="category"
						type="text"
						name="category"
						value={categoryInfo.category}
						onChange={onInputChange}
						// onChange={handleChange}
					></Form.Control> */}

					<div key="inline-checkbox" className="modal-category-wrap">
						<Form.Check
							inline
							label="Jewelery"
							name="category"
							type="checkbox"
							id="inline-checkbox1"
							value="jewelery"
							onChange={onInputChange}
						/>
						<Form.Check
							inline
							label="Women's Clothing"
							name="category"
							type="checkbox"
							id="inline-checkbox2"
							value="women's clothing"
							onChange={onInputChange}
						/>
						<Form.Check
							inline
							name="category"
							label="Mens Clothing"
							type="checkbox"
							id="inline-checkbox3"
							value="men's clothing"
							onChange={onInputChange}
						/>
						<Form.Check
							inline
							name="category"
							label="Electronics"
							type="checkbox"
							id="inline-checkbox3"
							value="electronics"
							onChange={onInputChange}
						/>
					</div>
				</Form.Group>

				<Form.Group>
					<div>
						{' '}
						<Form.Label style={{ marginTop: '15px' }}>Rating</Form.Label>{' '}
					</div>
					{/* <Form.Control
          type = "text"
          name="rating"
          value = {rating}
          onChange = { (e) => onInputChange(e)}
          
         
          
          >

        </Form.Control> */}

					<div style={{ display: 'flex' }}>
						{' '}
						<StarRating />{' '}
					</div>
				</Form.Group>
				{/* <Button variant="succes" type="submit" >Add new product</Button>  
    <Button onClick={() => props.close()}>close</Button> */}
			</Form>
		</Container>
	);
});

export default AddForm;

//  const handleOnChange = (e) = {

//  }

// const [categoryInfo, setcategoryInfo] = useState({
// 	cat1: [],
// 	category: [],
// });

// const handleCheckBox = (e) => {
// 	// Destructuring
// 	const { value, checked } = e.target;
// 	const { cat1 } = categoryInfo;

// 	console.log(`${value} is ${checked}`);

// 	// Case 1 : The user checks the box
// 	if (checked) {
// 		setcategoryInfo({
// 			cat1: [...cat1, value],
// 			category: [...cat1, value],
// 		});
// 		console.log('value', cat1);
// 	}

// 	// Case 2  : The user unchecks the box
// 	else {
// 		setcategoryInfo({
// 			cat1: cat1.filter((e) => e !== value),
// 			category: cat1.filter((e) => e !== value),
// 		});
// 	}
// };
