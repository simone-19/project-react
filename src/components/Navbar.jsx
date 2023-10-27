import "bootstrap/dist/css/bootstrap.min.css";

import Nav from 'react-bootstrap/Nav'
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import logo from '../clone-net/assets/logo.png'
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";

   
const navbar = () => {
return(
   <Nav className="navbar navbar-expand-lg bg-dark" 
   data-bs-theme="dark"
   style={{backgroundColor: '#221f1f' }}
   >
    <Container fluid>
    <a className="navbar-brand" href="https://www.google.com/">
    <img src={logo} alt='' style={{width: '100px', height: '55px'}}/> 
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <a className="nav-link active fw-bold" href="https://www.google.com/">Home</a>
         </li>
         <li className="nav-item">
           <a className="nav-link fw-bold" href="https://www.google.com/">TV Shows</a>
         </li>
         <li className="nav-item">
           <a className="nav-link fw-bold" href="https://www.google.com/">Movies</a>
         </li>
         <li className="nav-item">
           <a className="nav-link fw-bold" href="https://www.google.com/">Recently Added</a>
         </li>
         <li className="nav-item">
           <a className="nav-link fw-bold" href="https://www.google.com/">My List</a>
         </li>
       </ul>
       <div className="d-flex align-items-center">
         <Search className="text-white me-3" style={{color: '#838383'}}/>
         <div id="kids" className="fw-bold text-white me-3">KIDS</div>
         <Bell className="text-white me-3" style={{color: '#838383'}}/>
         <PersonCircle className="text-white me-3"style={{color: '#838383'}}/>
       </div>
     </div>
  </Container>
   </Nav>
)
}
export default navbar
// <!-- navabar -->
// <nav
//   class="navbar navbar-expand-lg bg-dark"
//   data-bs-theme="dark"
//   style="background-color: #221f1f !important"
// {/* > */}
//   <div class="container-fluid">


//     <a class="navbar-brand" href="#"
//       ><img src="assets/logo.png" style="width: 100px; height: 55px"
//     /></a>

//     <button
//       class="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span class="navbar-toggler-icon"></span>



//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active fw-bold" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link fw-bold" href="#">TV Shows</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link fw-bold" href="#">Movies</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link fw-bold" href="#">Recently Added</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link fw-bold" href="#">My List</a>
//         </li>
//       </ul>
//       <div class="d-flex align-items-center">
//         <i class="bi bi-search icons"></i>
//         <div id="kids" class="fw-bold">KIDS</div>
//         <i class="bi bi-bell icons"></i>
//         <i class="bi bi-person-circle icons"></i>
//       </div>
//     </div>
//   </div>
// </nav>
// // <!-- navbar -->