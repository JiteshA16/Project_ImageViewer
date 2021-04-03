import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import './Login.css';


class Login extends Component {
    constructor() {
        super();
        this.harcodedUsername = "acharya.jitesh";
        this.hardcodedPassword = "12345678";
    }


    render() {
        return (
            <div>
                <Header />
                <div className="login">
                    <Card className="cardStyle">
                        <CardContent>
                            <div style={{ fontSize: '25px' }}>LOGIN</div><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" />
                                <FormHelperText>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="loginPassword">Password</InputLabel>
                                <Input id="loginPassword" type="password" />
                                <FormHelperText>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br /><br />

                            <Button variant="contained" onClick={this.bookShowButtonHandler} color="primary">
                                LOGIN
                            </Button>

                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;