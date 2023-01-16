import { useContext, useState, forwardRef, useImperativeHandle, useEffect, useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import StarRating from '../StarsRating';
import { ProductContext } from '../../context/ProductContext';

import { FaStar } from 'react-icons/fa';

const AddForm = forwardRef((props, ref) => {
	// star rating
	const [srating, setSrating] = useState('');
	const [hover, setHover] = useState(null);

	const { addProduct } = useContext(ProductContext);

	const [newProduct, setNewProduct] = useState({
		title: '',
		category: [],
		description: '',
		price: '',
		image: '',
		rating: {
			rate: [],
		},
	});

	const onInputChange = (event) => {
		if (event.target.name === 'rate') {
			console.log('eventrating', event.target.name, event.target.value);
			let rates = { ...newProduct };

			rates.rating.rate.push(event.target.value);

			setNewProduct(rates.rating.rate);
		} else {
			setNewProduct(() => ({
				...newProduct,
				[event.target.name]: event.target.value,
			}));
		}
		// else {
		// 	setNewProduct(() => ({
		// 		...newProduct,
		// 		[event.target.name]: event.target.value,
		// 	}));
		// }

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
		// console.log('first', event.target.name, event.target.value);
	};

	console.log('newProduct', ...newProduct.rating.rate);
	const { title, category, description, price, image, rating } = newProduct;

	const handleSubmit = (e) => {
		addProduct(title, category, description, price, image, rating);
		console.log('submit', addProduct);
	};

	useImperativeHandle(ref, () => ({
		callhandleSubmit() {
			handleSubmit();
		},
	}));

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
					<div style={{ marginTop: '10px' }}>
						<Form.Label>Category</Form.Label>
					</div>
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
					<Form.Label style={{ marginTop: '15px' }}>Rating</Form.Label>
					{/* <div style={{ display: 'flex' }}>
						<StarRating name="rating" onChange={onInputChange} />
					</div> */}

					<div>
						{[...Array(5)].map((star, i) => {
							const ratingValue = i + 1;

							return (
								<label key={i}>
									<Form.Control
										type="radio"
										name="rate"
										style={{ display: 'none' }}
										value={ratingValue}
										onClick={() => setSrating(ratingValue)}
										onChange={onInputChange}
									/>
									<FaStar
										className="star"
										color={ratingValue <= (hover || srating) ? 'orange' : 'gray'}
										size={20}
										onMouseEnter={() => setHover(ratingValue)}
										onMouseLeave={() => setHover(null)}
									/>
								</label>
							);
						})}
						<p style={{ marginTop: '10px' }}>rating is {srating}</p>
					</div>
				</Form.Group>
			</Form>
		</Container>
	);
});

export default AddForm;
