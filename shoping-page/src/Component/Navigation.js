import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BsHandbagFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Navigation = () => {
    const cartProduct = useSelector(state => state.cart);

    return (
        <>

            <nav class="navbar text-white" style={{ background: '#000' }}>
                <div class="container">
                    <a class="navbar-brand text-white" style={{ fontSize: '15px' }}>Free shipping, 30-day return or refund guarantee.</a>

                    <div class="d-flex">
                        <a href="#" className='text-white pt-2 px-3'>SIGN IN </a>
                        <a href="#" className='text-white pt-2 px-3'> FAQs</a>

                        <div class="btn-group">
                            <button
                                type="button"
                                class="btn text-white dropdown-toggle"
                                data-mdb-dropdown-init
                                data-mdb-ripple-init
                                aria-expanded="false">
                                USD
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><button class="dropdown-item" type="button">USD</button></li>
                                <li><button class="dropdown-item" type="button">EUR</button></li>
                                <li><button class="dropdown-item" type="button">USD</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <Navbar expand="lg" className="bg-light text-bold fw-bold shadow-sm">
                <Container >
                    <Navbar.Brand href="#">Shope Now</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '120px' }}
                            navbarScroll
                        >
                            <Nav.Link to="/" as={Link}>Products</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                        </Nav>
                        <Navbar.Collapse className='justify-content-end'>
                            <Navbar.Text>
                                <Nav.Link to="/cart" as={Link} className='mr-4'> <BsHandbagFill className='text-success fs-3' /> My bag
                                    <span className=' text-danger border px-2 py-1 rounded-circle' >{cartProduct.length}</span> </Nav.Link>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    )
}
export default Navigation;