import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
import "./App.css";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";
import Modal from "react-bootstrap/Modal";
import swal from "sweetalert";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import "./Registration.css";
const responseGoogle = (response) => {
  console.log(response);
};

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false,
      updatePopup: false,
      insertPopup: false,
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  showPopup = (msg) => {
    if (msg === "update") {
      this.setState({
        status: true,
        updatePopup: true,
        insertPopup: false,
      });
    }

    if (msg === "insert") {
      this.setState({
        status: true,
        insertPopup: true,
        updatePopup: false,
      });
    }
  };
  deleteProduct = (p_id) => {
    this.props.deleteProduct(p_id);
  };

  closePopup = () => {
    this.setState({
      status: false,
      insertPopup: false,
      updatePopup: false,
    });
  };

  save = () => {
    if (this.state.updatePopup) {
      this.props.updateProduct({
        p_id: this.refs.p_id.value,
        p_name: this.refs.p_name.value,
        p_cost: this.refs.p_cost.value,
      });
    } else if (this.state.insertPopup) {
      if (this.validate()) {
        this.props.addProduct({
          name: this.refs.name.value,
          email: this.refs.email.value,
         password: this.refs.Password.value,
         mobile: this.refs.mobile.value,
        });
        this.closePopup();
      }
    }
  };

  validate() {
    let isValid = true;

    if (!this.refs.name.value) {
      swal({
        title: "Please Enter Name",
      });
      return false;
    }

    if (!this.refs.email.value) {
      swal({
        title: "Please Enter email",
      });

      return false;
    }
    
{/*
    if (this.refs.email.value !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(this.refs.email.value)) {
        swal({
          title: "Invalid email",
        });

        return false;
      }
    }
   
   
   
     if (this.refs.mobile.value !== "undefined") {
      var pattern = new RegExp(/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/i);
      if (!pattern.test(this.refs.mobile.value)) {
        swal({
          title: "Invalid password",
        });

        return false;
      }
    
    }
  */}
    if (!this.refs.mobile.value) {
      swal({
        title: "Please  Mobile Number",
      });

      return false;
    }

  

    

   
    return isValid;
  }
  render() {
    return (
      <div className="background">

      <Container fluid id="pic">
        <img src={require("./img/logo1.png")} className="img" />
        
        <Nav.Link
          href="/Home"
          style={{ display: "inline", color: "#5aff15", fontSize: 20 }}
        >
          
          HOME
        </Nav.Link>
        
        <Button
          className="mt-4 btn-lg btn-success float-right"
          style={{ fontSize: 25 }}
          onClick={() => {
            this.showPopup("insert");
          }}>
         Click Here To Register 
        </Button>

 {/*MODAL START HERE */}  
 <Modal
          show={this.state.status}
          onHide={this.closePopup}
          size="lg"
          centered
     
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h1>Register</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div class="form-group row">
                <label
                  class="col-sm-2 col-form-label"
                  style={{ fontSize: 15, fontWeight: "bold" }}
                >
                  Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="text"
                    placeholder="Enter Name"
                    ref="name"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>



              <div class="form-group row">
                <label
                  for="inputEmail"
                  class="col-sm-2 col-form-label"
                  style={{ fontSize: 15, fontWeight: "bold" }}
                >
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Enter Email"
                    ref="email"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="Password"
                  class="col-sm-2 col-form-label"
                  style={{ fontSize: 15, fontWeight: "bold" }}
                >
                  Password
                </label>
                
                <div class="col-sm-10">
                  <input
                    type="Password"
                    class="form-control"
                    id="Password"
                    placeholder="Enter Partner Password"
                    ref="Password"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="number"
                  class="col-sm-2 col-form-label"
                  style={{ fontSize: 15, fontWeight: "bold" }}
                >
                  Mobile No
                </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    class="form-control"
                    id="number"
                    placeholder="Enter Mobile Number"
                    ref="mobile"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div style={{ marginTop: 5 }}>
                  By creating an account you agree to our
                  <div
                    style={{
                      marginLeft: 290,
                      marginTop: -23.5,
                      color: "cyan",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Terms & Privacy.
                  </div>
                </div>
              </div>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="success"
              className="btm btn-block"
              onClick={() => {
                this.save();
              }}
            >
              Register
            </Button>
          </Modal.Footer>
        </Modal>
{/*MODAL CLOSE HERE */}
     <marquee style={{fontSize:40,color:'white'}}>Welcome to foodfub enjoy the food just a little step closer.... </marquee> 
<div class="row">
  <div class="column">
    <div class="card">
    <h3  style={{color:'whitesmoke'}}>Paneer Tikka</h3>
    <img src="https://cookwithparul.com/wp-content/uploads/2020/12/MicrosoftTeams-image-1.jpg" alt="Avatar"  />
      
      <p> </p>
      <p>⭐⭐⭐⭐⭐</p>
      <p style={{color:'whitesmoke'}}>
          Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. 
      </p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3 style={{color:'whitesmoke'}}>Butter Chicken</h3>
      <img src="https://media.gq-magazine.co.uk/photos/5eb2bb9608777df72af58786/master/w_1600%2Cc_limit/20200506-butter-chicken.jpg" alt="Avatar"  />
      <p> </p>
      <p>⭐⭐⭐⭐⭐</p>
      <p style={{color:'whitesmoke'}}>
        Butter chicken or murgh makhani is a curry of chicken in a spiced tomato, butter and cream sauce.
      </p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3  style={{color:'whitesmoke'}}>Chicken Biryani</h3>
      <img src="https://www.unileverfoodsolutions.lk/dam/global-ufs/mcos/meps/sri-lanka/calcmenu/recipes/LK-recipes/general/authentic-chicken-biryani/main-header.jpg" alt="Avatar"  />
      <p> </p>
      <p>⭐⭐⭐⭐⭐</p>
      <p style={{color:'whitesmoke'}}>
      Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. 
      </p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3 style={{color:'whitesmoke'}}>Chocolate Icecream</h3>
      <img src="https://images.herzindagi.info/image/2020/Jun/parle-ice-cream.jpg" style={{marginTop:7}}  />
      <p> </p>
      <p>⭐⭐⭐⭐⭐</p>
      <p style={{color:'whitesmoke'}}>
      Chocolate ice cream is ice cream with natural or artificial chocolate flavoring.
      </p>
    </div>
  </div>
</div>       
  

      </Container>
      </div>
    );
  }
}
const receive = (state) => {
  if (state.hasOwnProperty("status")) {
    if (state.status.update === "success") {
      state.data.forEach((element, index) => {
        if (element.p_id == state.status.record.p_id) {
          element.p_name = state.status.record.p_name;
          element.p_cost = state.status.record.p_cost;
        }
      });
    }

    if (state.status.delete === "success") {
      let id = state.data.findIndex((element, index) => {
        return element.p_id === state.status.p_id;
      });
      state.data.splice(id, 1);
    }
    if (state.status.insert === "success") {
      state.data.push(state.status.record);
      swal({
        title: "Registration Success",
        icon: "success",
      });
    }
  }

  return {
    data: state.data,
    status: state.status,
  };
};
const send = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(actions.getProducts());
    },
    deleteProduct: (id) => {
      dispatch(actions.deleteProduct({ p_id: id }));
    },
    addProduct: (record) => {
      dispatch(actions.addProduct(record));
    },
    updateProduct: (record) => {
      dispatch(actions.updateProduct(record));
    },
  };
};
export default connect(receive, send)(Registration);
