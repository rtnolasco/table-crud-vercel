import { React, useContext, useState, useEffect, useRef } from 'react';
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { TableRow } from './TableRow';
import { ExpandButton } from './ExpandButton';
import useOpenController from '../hooks/useOpenController';
import { EditForm, DeleteAlert } from './modal';

import { ProductContext } from '../context/ProductContext';

const Product = ({ product, loading }) => {
	const [showEditModal, setShowEditModal] = useState(false);
	const handleShowEditModal = () => setShowEditModal(true);
	const handleCloseEditModal = () => setShowEditModal(false);

	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const handleShowDeleteModal = () => setShowDeleteModal(true);
	const handleCloseDeleteModal = () => setShowDeleteModal(false);

	const { deleteProduct } = useContext(ProductContext);
	const { isOpen, toggle } = useOpenController(false);

	const rowBackgroundColors = {
		"men's clothing": '#F8D8C3',
		"women's clothing": '#D4F8D3',
		electronics: '#EDE7FB',
		jewelery: '#FBE7E9',
	};

	useEffect(() => {
		handleCloseEditModal();
	}, [product]);

	// handle child to parent
	const editFormRef = useRef();

	// function currencyFormat(num) {
	//     return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	//  }

	if (loading) {
		return (
			<tr>
				<td>Loading...</td>
			</tr>
		);
	}
	return (
		<>
			<tr>
				<td>{product.id}</td>
				<td>{product.title}</td>
				<td>
					<div
						style={{
							lineHeight: '1.20rem',
							borderRadius: '8px',
							backgroundColor: rowBackgroundColors[product.category] ?? 'transparent',
						}}
					>
						{product.category}
					</div>{' '}
				</td>
				<td>&#x20B1;{product.price}</td>
				<td>
					<img src={product.image} className="tbl-image"></img>
				</td>
				<td style={{ width: '130px' }}>
					<button onClick={handleShowEditModal} className="btn-edit" data-toggle="modal1">
						{' '}
						Edit{' '}
					</button>{' '}
					&nbsp;
					<button onClick={handleShowDeleteModal} className="btn-edit" data-toggle="modal">
						{' '}
						Delete{' '}
					</button>
				</td>
				<ExpandButton isOpen={isOpen} toggle={toggle} />
				<Modal show={showEditModal} onHide={handleCloseEditModal} dialogClassName="modal-90w">
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body>
						<EditForm ref={editFormRef} close={() => handleCloseModal()} productsEdit={product} />
						<Container style={{ marginBottom: '10px' }}>
							<Row>
								<Col>
									<Button onClick={handleCloseEditModal} className="btn-modal-cancel">
										Cancel
									</Button>
								</Col>
								<Col>
									<Button onClick={() => editFormRef.current.callhandleSubmit()} className="btn-modal-add">
										Edit
									</Button>
								</Col>
							</Row>
						</Container>
					</Modal.Body>
				</Modal>

				<Modal show={showDeleteModal} onHide={handleCloseDeleteModal} dialogClassName="modal-60w">
					<Modal.Header closeButton style={{ backgroundImage: 'unset' }}>
						{' '}
					</Modal.Header>
					<Modal.Body>
						<DeleteAlert productId={[product.id]} productTitle={[product.title]} />
						<Container style={{ marginBottom: '10px' }}>
							<Row>
								<Col>
									<Button onClick={handleCloseDeleteModal} className="btn-modal-cancel">
										Cancel
									</Button>
								</Col>
								<Col>
									<Button onClick={() => deleteProduct(product.id)} className="btn-modal-add">
										Delete
									</Button>
								</Col>
							</Row>
						</Container>
					</Modal.Body>
				</Modal>
			</tr>
			<tr>{isOpen && <TableRow product={product} />}</tr>
		</>
	);
};
export default Product;
