import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/ProductSlice';
import StatusCode from '../utils/StatusCode';

const Product = () => {
    const dispatch = useDispatch();

    const { data: products, status } = useSelector(state => state.products);

    useEffect(() => {
        // dispatch an action for fetchProducts
        dispatch(getProducts());


        // api  
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => getProduct(result));
    }, [dispatch]);

    if (status === StatusCode.LOADING) {
        return (
            <div class="d-flex justify-content-center m-5">
                <div class="spinner-grow text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (status === StatusCode.ERROR) {
        return (
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Error!</strong> Some thing went wrong during the operation and will be removed in a future release
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        );
    }

    const addToCart = (product) => {
        // dispatch an add action 
        dispatch(add(product))
        return (
            < div class="alert alert-warning alert-dismissible fade show" role="alert" >
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                < button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button >
            </div >
        )
    };

    // card
    const cards = products.map(product => (
        <div className='col-md-4 col-lg-3 col-sm-6 mb-5 text-center' key={product.id}>
            <Card style={{ width: '18rem' }} className='shadow h-100'>
                <div className='bg-image hover-zoom'>
                    <Card.Img variant='top' src={product.image} className='p-2' height='290' width='100px' />
                </div>
                <Card.Body>
                    <hr className='text-success' />
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <h3>${product.price}</h3>
                </Card.Body>
                <Card.Footer className='bg-white'>
                    <Button variant="success" onClick={() => addToCart(product)} >Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <>
            <h1 className='mt-5 fw-bold'>Products</h1>
            <div className='container'>
                <hr />

                <div className="row mt-5">
                    {cards}
                </div>
            </div>
        </>
    )
}

export default Product;
