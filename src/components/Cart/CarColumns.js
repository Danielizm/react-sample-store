import React from 'react';

const CarColumns = (props) => {
  return (
    <div className="container-fluid text-centr d-none d-lg-block">
    <div className="row">
    <div className="col-10 mx-auto col-lg-2">
    <p className="text-uppercase text-center">products</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
    <p className="text-uppercase text-center">name of products</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
    <p className="text-uppercase text-center">price</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
    <p className="text-uppercase text-center">quantity</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
    <p className="text-uppercase text-center">remove</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
    <p className="text-uppercase text-center">total</p>
    </div>
    </div>
    </div>
  )
}

export default CarColumns;