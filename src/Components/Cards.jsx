import React from 'react'

const Cards = () => {
  return (
    <div className='d-flex flex-row mb-3 justify-content-star container text-center'>
    <div class="card mb-3 m-4 " style={{"max-width": '540px'}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://source.unsplash.com/1080x1200/?ethereum" class="img-fluid rounded-start" alt=""/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">ethereum</h5>
          <p class="card-text">ethereum update</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-3 m-4" style={{"max-width": '540px'}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://source.unsplash.com/1080x1200/?cardano" class="img-fluid rounded-start" alt=""/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Cardano</h5>
          <p class="card-text">Cardano update</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-3 m-4" style={{"max-width": '540px'}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://source.unsplash.com/1080x1200/?bitcoin" class="img-fluid rounded-start" alt=""/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Bitcoin</h5>
          <p class="card-text">Bitcoin update</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Cards