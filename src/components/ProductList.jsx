import { React, useState, useContext, useRef, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Table, Button, Modal, Container, Col, Row } from 'react-bootstrap';
import ModalAdd from './modal/ModalAdd';
import AddForm from './modal/AddForm';

import Pagination from './Pagination';
import Product from './Product';

const ProductList = () => {
	const { products, loading } = useContext(ProductContext);

	const [show, setShow] = useState(false);
	const handleShowModal = () => setShow(true);
	// const [show2, setShow2] = useState(false);
	// const handleShowModal2 = () => setShow2(true);
	const handleCloseModal = () => setShow(false);
	// const handleCloseModal2 = () => setShow2(false);

	//construct pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(5);

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
	const totalPagesNum = Math.ceil(products.length / productsPerPage);

	// handle child to parent
	const addFormRef = useRef();

	// console.log('ref2', addFormRef2);
	useEffect(() => {
		handleCloseModal();
	}, [products]);

	return (
		<>
			<div className="table-title">
				<div className="row">
					<div className="col-sm-6"></div>
				</div>
			</div>
			<div>
				<Button onClick={handleShowModal} variant="light" data-toggle="modal">
					Add a product
				</Button>
			</div>
			<table className="table-striped table-hover" style={{ width: '1066px' }}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Category</th>
						<th>Price</th>
						<th>Image</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{currentProducts.map((product) => (
						<Product key={product.id} product={product} loading={loading} />
					))}
				</tbody>
			</table>

			{/* <ModalAdd show={show}/> */}
			<Modal show={show} onHide={handleCloseModal} dialogClassName="modal-90w">
				<Modal.Header closeButton>
					<div className="modal-header-icon"></div>
					<Modal.Title></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddForm ref={addFormRef} close={() => handleCloseModal()} />
					<Container style={{ marginBottom: '10px' }}>
						<Row>
							<Col>
								<Button onClick={handleCloseModal} className="btn-modal-cancel">
									Cancel
								</Button>
							</Col>
							<Col>
								<Button onClick={() => addFormRef.current.callhandleSubmit()} className="btn-modal-add">
									Add
								</Button>
							</Col>
						</Row>
					</Container>
				</Modal.Body>

				<Modal.Footer></Modal.Footer>
			</Modal>
			{/* // modal 2 */}

			<Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
		</>
	);
};

export default ProductList;
