import React from 'react'

const Slides = () => {
  return (
<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000" >
      <img src="https://source.unsplash.com/1400x400/?crypto" class="d-block w-100" alt=""/>
      <div class="carousel-caption d-none d-md-block">
        <h5>WELCOME</h5>
        <p>Development Trading Bitcoin</p>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Development</button>
  <button type="button" class="btn btn-warning">Trading</button>
  <button type="button" class="btn btn-success">Bitcoin</button>
</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/1400x400/?trading" class="d-block w-100" alt=""/>
      <div class="carousel-caption d-none d-md-block">
        <h5>WELCOME</h5>
        <p>Development Trading Bitcoin</p>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Development</button>
  <button type="button" class="btn btn-warning">Trading</button>
  <button type="button" class="btn btn-success">Bitcoin</button>
</div>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="1000" >
      <img src="https://source.unsplash.com/1400x400/?bitcoin" class="d-block w-100" alt=""/>
      <div class="carousel-caption d-none d-md-block">
        <h5>WELCOME</h5>
        <p>Development Trading Bitcoin</p>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Development</button>
  <button type="button" class="btn btn-warning">Trading</button>
  <button type="button" class="btn btn-success">Bitcoin</button>
</div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slides