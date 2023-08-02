import React, { useEffect } from 'react'
import Navbar from '../../componets/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../../features/Product';
import './Home.css'
function Home() {
  const data = useSelector((state) => state.product.data);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchdata());
  },[]);
  const image = {
    height : 200,
    width : '50%'
  }
  const range = {
    width : '100%'
  }
  return (
    <React.Fragment>
      <Navbar/>
        <div className="box">
          <div className="asidebar">
              <div className="container">
                  <h3>Filters</h3>
                  <h5>Category</h5>
                  <input type="checkbox" className='me-2' name='mens-cloths' value= "men's clothing" />
                  <label htmlFor="mens-cloths">Men's clothing</label>
                  <br />
                  <input type="checkbox" className='me-2' name='jewelery' value= "jewelery" />
                  <label htmlFor="jewelery">Jewelery</label>
                  <br />
                  <input type="checkbox" className='me-2' name='electronics' value= "electronics" />
                  <label htmlFor="electronics">Electronics</label>
                  <br />
                  <input type="checkbox" className='me-2' name="women's clothing" value= "women's clothing" />
                  <label htmlFor="women's clothing">Women's clothing</label>
                  <br />

                  <h5 className='mt-4'>Gender</h5>
                  <input type="checkbox" className='me-2' name='mens-cloths' value= "men's clothing" />
                  <label htmlFor="mens-cloths">Men</label>
                  <br />
                  <input type="checkbox" className='me-2' name="women's clothing" value= "women's clothing" />
                  <label htmlFor="women's clothing">Women</label>
                  <br />
                  <input type="checkbox" className='me-2' name='electronics' value= "electronics" />
                  <label htmlFor="electronics">Kid</label>
                  <br />
              </div>
              <div className='container mt-4'>
                <label htmlFor="price" className='fs-4'>Price Range</label>
                <br />
                <input type="range" style={range}/>
                <br />
                <div className="card-title d-flex justify-content-between">
                  <span > $1</span>
                   <span>$1000</span>
                </div>
              </div>
              <div className='container mt-4'>
                <label htmlFor="rating" className='fs-4'>Rating Range</label>
                <br />
                <input type="range" style={range}/>
                <br />
                <div className="card-title d-flex justify-content-between">
                  <span  className='text-primary'>1</span>
                   <span className='text-primary'>5</span>
                </div>
              </div>

          </div>
          <div className="main">
            <div className="row">
              {
                data.map((item) =>{
                  return (
                    <>
                       <div className="col-3 mt-2">
                        <div className="card">
                          <img src={item.image} className="card-img-top" alt="..." style={image} />
                          <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <div className="card-title d-flex justify-content-between">
                             <span className='text-dark'> ${item.price}</span>
                             <span className='text-primary'>{item.rating.rate}</span>
                            </div>
                            <button type="button" class="btn btn-danger me-2">Add to Cart</button>
                            <button type="button" class="btn btn-warning">Buy Now</button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Home
