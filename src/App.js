import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import List from "./components/List";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import Login from "./components/Login";

function App() {
  const [recipes, setRecipes] = useState([]);
  //const [resid, setResid] = useState('')

  useEffect(() => {
    const fetching = async () => {
      const fetchingApi = await fetch(
        //"https://cookbook-platform-api.herokuapp.com/recipes"
        //"http://localhost:5000/recipes"
        "https://cookbook-node4react-api.herokuapp.com/recipes"

      );

      const result = await fetchingApi.json();

      setRecipes(result);

      //console.log(result);
      //console.log(recipes);
    };

    fetching();
  }, []);

  return (

    <div className="App">
      

      <Nav>
        <Router>


        <Link to="/"> <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item></Link>
        <Link to="/list"> <Nav.Item icon={<Icon icon="book2" />}> All Recipies </Nav.Item></Link>
        <Link to="/login"> <Nav.Item icon={<Icon icon="avatar" />}> Login </Nav.Item></Link>

          <Switch>
            <Route exact path="/recipe/:resid">
              <Recipe recipes={recipes}  />
            </Route>
            <Route exact path="/list">
              <List recipes={recipes} />
            </Route>

            <Route exact path="/">
              <Home recipes={recipes} />
            </Route>

            <Route exact path="/login">
              <Login  />
            </Route>

          </Switch>
        </Router>

      </Nav>



      {/* <Button appearance="primary">Hello World</Button> */}

      {/* <h1>Coocking - Platform by Khaled + Luis</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button> */}

      {/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router> */}
    </div>

  )
}

export default App;

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

//<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
/*<Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />*/

// <TabPanel value={value} index={0}>

/*<TabPanel  index={0}>
        Item One
      </TabPanel>
      <TabPanel  index={1}>
        Item Two
      </TabPanel>
      <TabPanel  index={2}>
        Item Three
      </TabPanel>*/

/*fetch('https://cookbook-platform-api.herokuapp.com/recipes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {setRecipes(data)
        console.log(recipes)

      });*/


      /*-------------------------------------------------------------- Added by luis 

      <Nav>

        <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
        <Nav.Item>News</Nav.Item>
        <Nav.Item>Solutions</Nav.Item>
        <Nav.Item>Products</Nav.Item>
        <Nav.Item>About</Nav.Item>
      </Nav>
      {-----------------------------------------------------------end of Added by luis */
