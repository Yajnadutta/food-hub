import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css";
//import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardHeader from "@material-ui/core/CardHeader";
import { lightBlue } from "@material-ui/core/colors";

const PAGE_HOME = "HomeContent";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  avatar: {
    backgroundColor: lightBlue,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 750,
  },
}));

function Dashboard(customerName) {
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

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(PAGE_HOME);
  const [customer, setcustomer] = useState("");

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div class="background">
      {/* NavBar Starts */}

      <Navbar expand="lg" className="navbar">
        <img src={require("./img/logo1.png")} className="img" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ marginLeft: 50 }}>
            <Nav.Link onClick={(e) => {}}>HOME</Nav.Link>
          </Nav>

          <div>
            <h1>hi {window.localStorage.getItem("email")}</h1>
          </div>

          <Form inline>
            <Typography variant="h5"> {customer}</Typography>
            <Button
              variant="outline-success"
              onClick={(e) => {
                home();
              }}
              style={{ marginRight: 50, marginLeft: 20 }}
            >
              Logout
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* NavBar Ends */}

      {/* food Image 1  */}
      <div className="full-width-image">
        <img src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
      </div>

      {/* Our services */}
      <div className="text-center mt-9">
        <img src={require("./img/services.png")} />
      </div>
      {/* first card */}

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
                    title="Pizza"
                  />
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ fontSize: 18, fontWeight: "bold" }}
                    >
                      Price :450
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
                    title="Sandwich"
                  />
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/4559174/pexels-photo-4559174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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
      </div>
    </div>
  );
}

export default Dashboard;
