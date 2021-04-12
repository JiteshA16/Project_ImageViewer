import React, { Component } from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            anchorEl: null,
            isMenuOpen: false
        }

    }

    openMenuList = (event) => {
        this.state.anchorEl ? this.setState({ anchorEl: null }) : this.setState({ anchorEl: event.currentTarget });
        this.setState({ isMenuOpen: true });
    }

    closeMenuList = () => {
        this.setState({ anchorEl: null });
        this.setState({ isMenuOpen: false });
    }

    onSearchChangeHandler = (e) => {

    }

    accountClickHandler = () => {
        this.closeMenuList();
    }

    logoutClickHandler = () => {
        this.closeMenuList();
        sessionStorage.removeItem("access-token");
        window.location = "/";
    }


    render() {
        return (
            <div>
                <header className="app-header">
                    <a href='/home' className="app-logo">Image Viewer</a>
                    {this.props.showSearchBox ?                 //checking if the showSearchBox is true,only then it is shown  
                        <span className="header-searchbox">
                            <SearchIcon className="search-icon"></SearchIcon>
                            <Input className="searchText" placeholder="Search…" disableUnderline={true} onChange={this.onSearchChangeHandler} />
                        </span>
                        : ""
                    }
                    {this.props.showProfileIcon
                        ? <span>
                            <IconButton onClick={event => this.openMenuList(event)}>
                                <Avatar className="avatar" src="http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg">AJ</Avatar>
                            </IconButton>
                            <Menu
                                className="profile-menu"
                                id="simple-menu"
                                anchorEl={this.state.anchorEl}
                                keepMounted
                                open={this.state.isMenuOpen}
                                onClose={this.closeMenuList}>
                                {this.props.showMyAccount ?
                                    <div>
                                        <MenuItem onClick={this.accountClickHandler}>My account</MenuItem>
                                        <div className="divider"> </div>
                                    </div>
                                    : ""}
                                <MenuItem onClick={this.logoutClickHandler}>Logout</MenuItem>
                            </Menu>
                        </span>
                        : ""}
                </header>
            </div>
        )
    }
}

export default Header;