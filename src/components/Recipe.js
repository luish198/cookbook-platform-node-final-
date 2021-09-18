import React from "react";
import { Loader, Container, FlexboxGrid, Col, Divider, Icon } from "rsuite";
import './home.css';
import { useState, useEffect, Component, Footer, ButtonToolbar, IconButton } from "react";

import {
  BrowserRouter as Router,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { isCompositeComponent } from "react-dom/cjs/react-dom-test-utils.production.min";

export default function Recipe({ recipes }) {

  let { url } = useRouteMatch();
  let { resid } = useParams();
  //let person = find(parseInt(id));


  console.log("This is the Id by Luis H s")
  console.log(resid)


  const [recipeDetails, setRecipeDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


  const getRecipe = async () => {
    let recipeItem = [];
    try {
      let response = await fetch("https://cookbook-node4react-api.herokuapp.com/recipes/" + resid)
      
      console.log(response);

      if (response.ok) {
        recipeItem = await response.json()
      }
    } catch (error) {
      console.log(error);
      recipeItem.error = error.message
    }
    setRecipeDetails(recipeItem)
  }

  useEffect(() => {
      getRecipe();
      setIsLoading(true)
  }, []
  )


  /*useEffect(() => {
    //fetch("https://cookbook-platform-api.herokuapp.com/recipes/" + resid)
    fetch("http://localhost:5000/recipes/" + resid)

      .then((res) => res.json())
      .then((res) => setRecipeDetails(res))
      .then (setIsLoading(true));
  }, []);*/


if(isLoading && recipeDetails[0]){
  console.log("recipedetails exist !!!")
  console.log(recipeDetails[0])
  console.log(isLoading)
  console.log(recipeDetails[0].id)
}

    //let item = recipeDetails

  

  

  //console.log(recipes);
  //const n = Math.floor(Math.random() * recipes.length);
  //let item = recipes.at(n);
  //console.log(item);
  // console.log(item.title)



  return (

    <div className="recipe-onexxx">
      {/* {item = recipes.filter(i => i.)} */}

      {isLoading && recipeDetails[0] ? (
        <>

          {/* <div className="rescon-homex"> */}

          <div className="title-recipe">
            <div className="homeicon" ><Icon icon="spoon" size="3x" />  </div>
            <div><h1>{recipeDetails[0].title}</h1>  </div>
          </div>

          {/* <div> */}
          


          <Divider></Divider>
          <div className="subtitle-recipe" >
            <div>
              <h6>{recipeDetails[0].cooktime} min</h6>
            </div>

            <div>
              <h6>
                {(recipeDetails[0].difficulty_id === 1 ? <Icon icon="bolt" size="2x" /> :
                  (recipeDetails[0].difficulty_id === 3 ? <Icon icon="child" size="2x" /> : <Icon icon="balance-scale" size="2x" />))}
                --Level: {recipeDetails[0].difficulty_id}
              </h6>
            </div>

            <div>
              <h6>{recipeDetails[0].nationality}</h6>
            </div>


            
            {/* <h6>Level: {item.difficulty}</h6> */}



            {/* </div> */}


          </div>
          <Divider></Divider>



          <Container className="rescon-recipe">



            <FlexboxGrid justify="space-around" style={{ height: '100vh', padding: '100px' }}>
              {/* <FlexboxGrid.Item componentClass={Col} className='left' colspan={24} md={9}> */}

              <FlexboxGrid.Item componentClass={Col} className='left' colspan={24} md={9}>
                {/* <h1>{item.title}</h1> */}
                <img src={recipeDetails[0].picture} className="img-recipe" />

              </FlexboxGrid.Item>




              <FlexboxGrid.Item
                componentClass={Col}
                colspan={24}
                md={15}
                smHidden
              >

                <div className="title-recipe-h3">
                  <div className="homeicon" ><Icon icon="order-form" size="3x" /></div>
                  <div><h3>Description</h3></div>
                </div>

                <pre><textarea className="text-recipe"
                  value={recipeDetails[0].description}
                  rows={7}
                //col={100}
                /></pre>
                {/* <h6>{item.description}</h6> */}
                <Divider></Divider>

                <div className="title-recipe-h3">
                  <div className="homeicon" ><Icon icon="gear2" size="3x" /></div>
                  <div><h3>Method</h3></div>
                </div>

                <pre><textarea className="text-recipe"
                  value={recipeDetails[0].method}
                  rows={7}
                //cols={100}
                />
                </pre>
                {/* <h6>{item.method}</h6> */}
                <Divider></Divider>

                <div className="title-recipe-h3">
                  <div className="homeicon" ><Icon icon="shopping-basket" size="3x" /></div>
                  <div><h3>Ingredients</h3></div>
                </div>

                <pre><textarea className="text-recipe"
                  value={recipeDetails[0].Ingredients}
                  rows={7}
                //cols={100}
                />
                </pre>





                <Divider></Divider>


              </FlexboxGrid.Item>


            </FlexboxGrid>

          </Container>


          {/* </div> */}
        </>
      ) :
      (
        <>
        <h1>loading ....</h1>

        <Loader center backdrop size="lg" content="loading..." vertical />

        </>

      )}
    </div>
  );
}
