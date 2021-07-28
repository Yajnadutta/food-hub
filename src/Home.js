import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router-dom";
import "./App.css";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ScrollAnimation from 'react-animate-on-scroll';
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';


//const PAGE_HOME = "Dashboard";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 750,
  },
  root: {
    maxWidth: 605,
    marginLeft: 20,
    marginTop: 50,
    fontSize: 25,
    color: "red",
    fontWeight: "bold",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },


  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },



}));

function Home(customerName) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  let history = useHistory();
  let portFolioPage = () => {
    history.push("/Portfolio");
  };

  let photos = () => {
    history.push("/Photos");
  };

  let makeup = () => {
    history.push("/Makeup");
  };
  let destination = () => {
    history.push("/Destination");
  };

  let bridal = () => {
    history.push("/Bridal");
  };

  let groom = () => {
    history.push("/Groom");
  };

  let registration = () => {
    history.push("/Registration");
  };
  let login = () => {
    history.push("/Login");
  };

  let home = () => {
    history.push("/Home");
  };

  let item = () => {
    history.push("/Item");
  };

  return (
    <div className="background">
      {/* NavBar Starts */}

      <Navbar expand="lg" className="navbar">
        <img src={require("./img/logo1.png")} className="img" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ marginLeft: 50 }}>
            <Nav.Link
              onClick={(e) => {
                home();
              }}
              style={{color:' #5aff15'}}
            >
              
              HOME
            </Nav.Link>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for resturant, cuisine or dish.."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>




          </Nav>

          <Form inline>
            <Button
              variant="outline-success"
              onClick={(e) => {
                registration();
              }}
              style={{ marginRight: 50 }}
            >
              Register
            </Button>

            <Button
              variant="outline-success"
              style={{ marginRight: 50 }}
              onClick={(e) => {
                login();
              }}
            >
              Login
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* NavBar Ends */}

      {/* Wedding Image 1  */}
      <div className="full-width-image">
        <img src={require("./img/pic.png")} />
      </div>

      {/* Our services */}
      <div className="text-center mt-9">
        <Button className="ordernow_button">Order Now</Button>
      </div>

      {/* First Card */}

      <div class="container">
        <div class="row">
      
          <div class="col-sm-4">
            <div class="text-center">
            <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      C
                    </Avatar>
                  }
                  title="Chicken Biryani"
                />
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ fontSize: 18, fontWeight: "bold" }}
                  >
                    Price :₹200
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
              </ScrollAnimation>
            </div>
          </div>

          {/* Second Card */}

          <div class="col-sm-4 ">
            <div class="text-center">
            <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      B
                    </Avatar>
                  }
                  title="Burger"
                />
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/2282528/pexels-photo-2282528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ fontSize: 18, fontWeight: "bold" }}
                  >
                    Price :₹100
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
              </ScrollAnimation>
            </div>
          </div>

          {/* Third Card */}
          <div class="col-sm-4">
            <div class="text-center">
            <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      P
                    </Avatar>
                  }
                  title="Pasta With Tomato & Basil"
                />

                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ fontSize: 18, fontWeight: "bold" }}
                  >
                    Price :₹150
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        {/* Four Card */}
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="text-center">
              <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        V
                      </Avatar>
                    }
                    title="Vegetable Salad"
                  />
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ fontSize: 18, fontWeight: "bold" }}
                    >
                      Price :₹170
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
                </ScrollAnimation>
              </div>
            </div>

            {/* Five Card */}

            <div class="col-sm-4 ">
              <div class="text-center">
              <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        I
                      </Avatar>
                    }
                    title="Icecream"
                  />
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/4652682/pexels-photo-4652682.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ fontSize: 18, fontWeight: "bold" }}
                    >
                      Price :₹100
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
                </ScrollAnimation>
              </div>
            </div>

            {/* Six Card */}
            <div class="col-sm-4">
              <div class="text-center">
              <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        F
                      </Avatar>
                    }
                    title="Fudge Cake With Sugar"
                  />

                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/1579926/pexels-photo-1579926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ fontSize: 18, fontWeight: "bold" }}
                    >
                      Price :₹350
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Part */}
        <div>
        <ScrollAnimation animateIn="zoomInDown" >
        <footer class="footer-distributed">
          <div class="footer-left">
            <img src={require("./img/logo1.png")} />
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
                <i class="fa fa-facebook"></i>
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
    </div>
    
    </div>
    
  );
}

export default Home;
