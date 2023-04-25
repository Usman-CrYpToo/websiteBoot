import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar bg-dark" style={{ margin: '0%' }}>
      <div class="container-fluid ">
        <a class="navbar-brand text-white" href="/">Web3</a>
        <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/about.html">about</a>
            </li>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Courses
              </button>
              <ul class="dropdown-menu dropdown-menu-dark gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px" data-bs-theme="dark">
                <li><hr class="dropdown-divider"/>ETHEREUM</li>
                <li><a class="dropdown-item " href="/erc20">Erc20</a></li>
                <li><a class="dropdown-item" href="/nft">Nft</a></li>
                <li><hr class="dropdown-divider"/>DAPP</li>
                <li><a class="dropdown-item" href="/defi">Defi</a></li>
              </ul>
            </div>
            <li class="nav-item">
              <a class="nav-link text-white" href="/contact.html">Contact Us</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div class="mx-2">
          <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#loginBackdrop">login</button>
           

<div class="modal fade" id="loginBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">login</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
  
    </div>
  </div>
</div>
          <button type="button" class="btn btn-danger btn-sm mx-1"  data-bs-toggle="modal" data-bs-target="#signupBackdrop">sign up</button>
          <div class="modal fade" id="signupBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">signup</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


