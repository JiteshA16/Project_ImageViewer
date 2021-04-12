import React, { Component } from 'react';
import Header from '../../common/header/Header';
import { Redirect } from 'react-router-dom';
import Posts from '../posts/Posts';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            accessToken: sessionStorage.getItem("access-token"),
            isUserLoggedIn: sessionStorage.getItem("access-token") === null ? false : true
        }
    }

    componentWillMount() {        
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    posts: JSON.parse(this.responseText).data
                });
            }
        });

        xhr.open("GET", "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + sessionStorage.getItem("access-token"));
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);        
    }

    render() {

        return (
            <div>
                <Header showSearchBox={true} showProfileIcon={true} showMyAccount={false}/>
                {this.state.isUserLoggedIn === true
                    ?
                    <Posts userPosts={this.state.posts} isProfilePage={true} />
                    : <Redirect to="/" />
                }
            </div>
        )
    }
}

export default Profile;