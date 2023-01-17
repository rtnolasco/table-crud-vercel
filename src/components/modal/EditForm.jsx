import { React, useContext, useState, forwardRef, useImperativeHandle } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import StarRating from '../StarsRating';
import { ProductContext } from '../../context/ProductContext';
import { FaStar } from 'react-icons/fa';

const EditForm = forwardRef(({ productsEdit }, ref) => {
	const id = productsEdit.id;
	const { updateProduct } = useContext(ProductContext);

	const [title, setTitle] = useState(productsEdit.title);
	const [category, setCategory] = useState([]);
	const [price, setPrice] = useState(productsEdit.price);
	const [image, setImage] = useState(productsEdit.image);
	const [description, setDescription] = useState(productsEdit.description);
	// const [rating, setRating] = useState({});
	const [rating, setRating] = useState({
		rating: {
			rate: productsEdit.rating.rate,
		},
	});
	const [hover, setHover] = useState(null);

	const handleRating = (e) => {
		if (e.target.name === 'rating') {
			setRating((rate) => ({
				rate,
				rate: e.target.value,
			}));
		}
	};

	const handleChangeCheckbox = (e) => {
		if (e.target.name === 'category') {
			if (e.target.checked) {
				category.push(e.target.value);
			}
		} else {
			setCategory(() => ({
				...category,
				[e.target.name]: e.target.value,
			}));
		}
	};

	const updatedProduct = { id, title, category, price, image, description, rating };
	console.log('Updated rating', updatedProduct.rating);
	const handleSubmit = (e) => {
		updateProduct(id, updatedProduct);
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
					<Form.Label>Category</Form.Label>

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
					<Form.Label style={{ marginTop: '15px' }}>Rating</Form.Label>

					<div>
						{[...Array(5)].map((star, i) => {
							const ratingValue = i + 1;

							return (
								<label key={i}>
									<Form.Control
										type="radio"
										name="rating"
										style={{ display: 'none' }}
										value={ratingValue}
										onClick={() => setRating(ratingValue)}
										// onChange={(e) => setRating(e.target.value)}
										onChange={handleRating}
									/>
									<FaStar
										className="star"
										color={ratingValue <= (hover || rating.rate) ? 'orange' : 'gray'}
										size={20}
										onMouseEnter={() => setHover(ratingValue)}
										onMouseLeave={() => setHover(null)}
									/>
								</label>
							);
						})}
						<p style={{ marginTop: '10px' }}>rating is {rating.rate}</p>
					</div>
				</Form.Group>
			</Form>
		</Container>
	);
});

export default EditForm;
