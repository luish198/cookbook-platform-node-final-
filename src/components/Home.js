import React from "react";
import { Loader, Panel, Divider, Icon, Footer, ButtonToolbar, IconButton } from "rsuite";
import { useHistory } from "react-router-dom";

export default function Home({ recipes }) {
  console.log(recipes);
  const n = Math.floor(Math.random() * recipes.length);
  let item = recipes.at(n);
  console.log(item);
  // console.log(item.title)

  const history = useHistory();


  const handleClick = (resid)=>{

    console.log(resid)
    history.push("/recipe/" + resid);

}




  return (
    <div className="home">
      {/* {item = recipes.filter(i => i.)} */}

      {item ? (
        <>



          <div className="rescon-home">

            <div className="title">
              <div className="homeicon" ><Icon icon="calendar" size="3x" />  </div>
              <div><h1> The Recipe of the Day ... </h1>  </div>
            </div>


            <div className="rescon-home">


              <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: '80vh' }}>

                <div className="homepic">

                  <img src={item.picture} alt="Recipe img missing" style={{ height: "80vh", width: '100wv' }} />

                </div >
                <Panel header={item.title} >{/* <p><small>{result.description}</small></p>*/}</Panel>
              </Panel>


            </div>

            <div>

              <div className="rescon5">

                <pre><textarea className="text1"
                  value={item.description}
                  rows={3}
                  cols={80}
                /></pre>

              </div>


              {/* <h6>{result.description}</h6> */}
              <Divider></Divider>
              <h6>{item.cooktime} min</h6>
              {/* <h6>{result.method}</h6> */}
              <Divider></Divider>
              <h6>{item.nationality} </h6>
              <img src={item.flag} alt="flag img missing" height="50" />
              <Divider></Divider>
              <h6>
                {(item.difficulty === "hard" ? <Icon icon="bolt" /> :
                  (item.difficulty === "easy" ? <Icon icon="child" /> : <Icon icon="balance-scale" />))}
                --Level: {item.difficulty_id}
              </h6>
              <Divider></Divider>
              <ButtonToolbar>
                <IconButton icon={<Icon icon="spoon" />} active onClick={() => handleClick(item.id)} >See more</IconButton>
              </ButtonToolbar>

              <Divider></Divider>

            </div>

            <div>
              <Footer>
                <ButtonToolbar>
                  <IconButton icon={<Icon icon="facebook-official" />} color="blue" circle />{'  '}
                  <IconButton icon={<Icon icon="google-plus-circle" />} color="red" circle />{'  '}
                  <IconButton icon={<Icon icon="twitter" />} color="cyan" circle />{'  '}
                  <IconButton icon={<Icon icon="linkedin" />} color="blue" circle />{'  '}
                </ButtonToolbar>

                {/* <Icon icon="youtube-play" size="2x" />{'  '}<Icon icon="twitter" size="2x" />{'  '}<Icon icon="whatsapp" size="2x" />{'  '}<Icon icon="facebook-official" size="2x" /> */}
              </Footer>
            </div>



          </div>




          {/* <h1>{item.title}</h1> 
          <img src={item.picture} />
          <p>{item.description}</p>
          <p>{item.method}</p>*/}


        </>
      ) : (
        <Loader backdrop content="loading..." vertical />
      )}
    </div>
  );
}
