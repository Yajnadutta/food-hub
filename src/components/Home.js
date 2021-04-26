import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Navbar, Nav, Modal } from "react-bootstrap";
import { Link, Router } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import "../App.css";


export default function Home() {
  
 
  return (
    
    <>
    
      <div>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img src={require("../img/logo.png")} />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Form inline>
         
               <Link to="/login" className="btn btn-primary btn-lg">Login</Link> 
          </Form>
        </Navbar>
       </div>

      <div>
        <img src={require("../img/pic.png")} className="responsive" />
      </div>



      <div>
             {/* Footer Part */}
             <ScrollAnimation animateIn="zoomInDown" >
        <footer class="footer-distributed">
          <div class="footer-left">
            <img src={require("../img/logo.png")} />
            <h3>
              About<span> Food Hub</span>
            </h3>

            <p class="footer-links">
              Designed & Maintained By <br />
              Yajnadutta Mishra
            </p>

            <p class="footer-company-name">© 2021 Food Hub</p>
          </div>

          <div class="footer-center">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>
                <span> Kendujhar, Odisha</span>
              </p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>+91 8658796026 </p>
            </div>
            <div>
              <i class="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@eduonix.com">
                  yajanduttamishra@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div class="footer-right">
            <p class="footer-company-about">
              <span>About the Website</span>
              This is a Completely Food Ordering Website Where People Can Easily Order 
              Their Food.
            </p>
            <div class="footer-icons">
              <a href="#">
          
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </footer>
        </ScrollAnimation>
         



      </div>
    </>
    
  );
}
