//import { red } from '@material-ui/core/colors';
import { Form, FormGroup, FormControl, ControlLabel, Button, HelpBlock, Icon, IconButton, Divider } from 'rsuite';
import { Container, Header, Navbar, Content, FlexboxGrid, Panel, ButtonToolbar, Footer } from 'rsuite';
import MyAccount from './MyAccount';

import './list.css';

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {

    const logo2 = './cookbook2-2021.png'



    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [login, setLogin] = useState();
    const [status, setStatus] = useState(false);
    const [newPath, setNewPath] = useState("/");

    const history = useHistory();

    useEffect(() => {
        fetch(
            //"https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/luishackernews-fmzgq/service/luis-hacker-news/incoming_webhook/get?secret=luish"
            "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/ip_form-awowb/service/get/incoming_webhook/get?secret=luish"
        )
            .then((res) => res.json())
            .then((res) => setLogin(res))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        console.log(status);
    }, [status]);

    const checking = (e) => {
        e.preventDefault();


        //console.log(email);
        //console.log(pass);
        //console.log(login);
        //console.log(login[0].email);
        //console.log(login[0].pass);
        //console.log(email);
        //console.log(pass);

        const valid = email === login[0].email && pass === login[0].pass;
        if (valid) {

            history.push("/MyAccount");
        } else {

            //history.push("/");
        }
        setStatus(valid);
    };









    return  status ? (
                <div>
                    <h1>Welcome ... </h1>

                    <MyAccount />
                </div>
                
            ) : (

                <>

                <container className="rescon3">

                    <div className="show-fake-browser login-page">
                        <Container>
                            <Header>
                                <Navbar appearance="default" >
                                    {/* <Navbar.Header ></Navbar.Header> */}
                                    <div className="rescon4">
                                        <div>
                                            <img src={logo2} className="App-logo" alt="logo" />
                                        </div>

                                        <div className="rescon4"> Khaled + Luis Top Recipies </div>
                                    </div>


                                </Navbar>
                            </Header>
                            <Content>
                                {/* <FlexboxGrid justify="center"> */}
                                {/* <FlexboxGrid.Item colspan={12}> */}
                                <Panel header={<h3>Login</h3>} bordered style={{ display: 'inline-block', width: '80vh' }} >
                                    <Form fluid>
                                        <FormGroup>
                                            <ControlLabel>Username or email address</ControlLabel>
                                            <FormControl name="name"  />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Password</ControlLabel>
                                            <FormControl name="password" type="password"  />
                                        </FormGroup>
                                        <FormGroup>
                                            <ButtonToolbar>
                                                <Button appearance="ghost" onClick={checking}>Sign in</Button>
                                                <Button appearance="link">Forgot password?</Button>
                                            </ButtonToolbar>
                                        </FormGroup>
                                    </Form>
                                </Panel>
                                {/* </FlexboxGrid.Item> */}
                                {/* </FlexboxGrid> */}
                            </Content>
                            <Divider></Divider>
                            <Footer>
                                <ButtonToolbar>
                                    <IconButton icon={<Icon icon="facebook-official" />} color="blue" circle />{'  '}
                                    <IconButton icon={<Icon icon="google-plus-circle" />} color="red" circle />{'  '}
                                    <IconButton icon={<Icon icon="twitter" />} color="cyan" circle />{'  '}
                                    <IconButton icon={<Icon icon="linkedin" />} color="blue" circle />{'  '}
                                </ButtonToolbar>
                                {/* <Icon icon="youtube-play" size="2x" />{'  '}<Icon icon="twitter" size="2x" />{'  '}<Icon icon="whatsapp" size="2x" />{'  '}<Icon icon="facebook-official" size="2x" /> */}
                            </Footer>
                        </Container>
                    </div>


                </container>
                
                </>)




        
    

}