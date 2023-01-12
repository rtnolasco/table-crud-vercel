import { React, useContext, useState, forwardRef, useImperativeHandle } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import StarRating from '../StarsRating';
import { ProductContext } from '../../context/ProductContext';

const EditForm = forwardRef(({ productsEdit }, ref) => {
	const id = productsEdit.id;
	const { updateProduct } = useContext(ProductContext);

	const [title, setTitle] = useState(productsEdit.title);
	const [category, setCategory] = useState([]);
	const [price, setPrice] = useState(productsEdit.price);
	const [image, setImage] = useState(productsEdit.image);
	const [description, setDescription] = useState(productsEdit.description);

	const handleChangeCheckbox = (e) => {
		// const { value, checked } = e.target;
		console.log('value', e.target.value);
		console.log('catgegoryf', category);
		if (e.target.name === 'category') {
			// let copy = { ...category };

			if (e.target.checked) {
				category.push(e.target.value);
			}
			//  else {
			// 		copy.category = copy.category.filter((el) => el != e.target.value);
			// 	}
			// 	setCategory(copy);
			console.log('catgegor2', category);
		} else {
			setCategory(() => ({
				...category,
				[e.target.name]: e.target.value,
			}));
		}
	};

	const updatedProduct = { id, title, category, price, image, description };

	const handleSubmit = (e) => {
		// e.preventDefault();
		updateProduct(id, updatedProduct);
	};

	useImperativeHandle(ref, () => ({
		callhandleSubmit() {
			handleSubmit();
		},
	}));

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
							<Form.Control
								type="text"
								name="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							></Form.Control>
						</Form.Group>
					</Col>

					<Col>
						<Form.Group>
							<Form.Label>Image Link</Form.Label>
							<Form.Control
								type="text"
								name="image"
								value={image}
								onChange={(e) => setImage(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group>
							<Form.Label>Price</Form.Label>
							<Form.Control
								type="text"
								name="price"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							></Form.Control>
						</Form.Group>
					</Col>
				</Row>

				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control
						as="textarea"
						name="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group>
					{/* <Form.Control
              type = "hidden"
              name="category"
              value="Electronics"
           
              >
            </Form.Control> */}

					<Form.Label>Category</Form.Label>
					{/* <Form.Control
						type="text"
						name="category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					></Form.Control> */}

					<div key="inline-checkbox" className="modal-category-wrap">
						<Form.Check
							inline
							label="Jewelery"
							name="category"
							type="checkbox"
							id="inline-checkbox1"
							value="jewelery"
							onChange={handleChangeCheckbox}
						/>
						<Form.Check
							inline
							label="Womens Clothing"
							name="category"
							type="checkbox"
							id="inline-checkbox2"
							value="women's clothing"
							onChange={handleChangeCheckbox}
						/>
						<Form.Check
							inline
							label="Mens Clothing"
							name="category"
							type="checkbox"
							id="inline-checkbox3"
							value="men's clothing"
							onChange={handleChangeCheckbox}
						/>
						<Form.Check
							inline
							label="Electronics"
							name="category"
							type="checkbox"
							id="inline-checkbox3"
							value="electronics"
							onChange={handleChangeCheckbox}
						/>
					</div>
				</Form.Group>

				<Form.Group>
					<Form.Label>Rating</Form.Label>

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

export default EditForm;
