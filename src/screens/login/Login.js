import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './Login.css';


class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="login">
                    <Card className="cardStyle">
                        <CardContent>
                            
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;