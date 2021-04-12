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
        this.state = {
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            invalidCredentials: "dispNone",
            isUserLoggedIn: sessionStorage.getItem("access-token") === null ? false : true
        }
    }

    usernameChangedHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    passwordChangedHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });

        if (this.state.username === this.harcodedUsername && this.state.password === this.hardcodedPassword) {
            this.setState({ invalidCredentials: "dispNone" });
            sessionStorage.setItem("access-token", "IGQVJVRTg4ZAUtoYkpBbVNNRDhjR2o3b0hvcVRTM0JMQUk2ZA2JVVUpNbGt0WVlhWkVtUjhRa2szd0cyaHdTN3daVzR3YkJTTVlpc3FJN2JCNXZA1UlRaRGFkclNGMHduLUJwM3lENkpybkJfUHdFOWZAyVWwxRERKNHhfWERr");
            this.props.history.push('/home');
        } else {
            if (this.state.username === "" || this.state.password === "") {
                this.setState({ invalidCredentials: "dispNone" });
            } else {
                this.setState({ invalidCredentials: "dispBlock" });
            }
        }
    }

    render() {
        return (
            <div>
                <Header showSearchBox={false} showProfileIcon={false} showMyAccount={false} />
                <div className="login">
                    <Card className="cardStyle">
                        <CardContent>
                            <div style={{ fontSize: '25px' }}>LOGIN</div><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.usernameChangedHandler} />
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.passwordChangedHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>

                            <br /><br />

                            <FormHelperText className={this.state.invalidCredentials}>
                                <span className="red">Incorrect username and/or password</span>
                            </FormHelperText>

                            <br /><br />

                            <Button variant="contained" onClick={this.loginClickHandler} color="primary">
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