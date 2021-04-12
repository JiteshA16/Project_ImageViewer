import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import "./ProfileInner.css";

class ProfileInner extends Component {

    constructor() {
        super();
        this.state = {
            userName: "Jitesh Acharya",
            userNameReq: "displayNone",
            isModalOpen: false,
            tempUserName: "",
        }
    }

    fullNameChangeHandler = (e) => {
        this.setState({ tempUserName: e.target.value });
    }

    editFullNameClickHandler = () => {
        if (this.state.tempUserName === "") {
            this.setState({ userNameReq: "displayBlock" });
            return;
        }
        var temp = this.state.tempUserName;
        this.setState({ userName: temp });
        this.setState({ tempUserName: '' });
        this.setState({ isModalOpen: false });
    }

    handleOpen = () => {
        this.setState({ isModalOpen: true });
    }

    handleClose = () => {
        this.setState({ tempNameReq: "displayNone" });
        this.setState({ isModalOpen: false });
    }

    render() {
        return (
            <div className="profile-container" >
                <div className="profile-details">
                    <div className="profile-image">
                        <img src="https://pbs.twimg.com/profile_images/1222654825403424768/-ySQePLc.jpg" alt="img" style={{ height: 100, width: 100, borderRadius: 50 }}></img>
                    </div>
                    <div className="profile-account-info">
                        <div >
                            <div className="user-id">aj_idev</div>
                        </div>
                        <br />
                        <div className="follower-details">
                            <div className="user-info">Posts: {this.props.posts.length}</div>
                            <div className="user-info">Following: 20</div>
                            <div className="user-info">Followed: 80</div>
                        </div>
                        <br />
                        <div style={{ alignItems: 'center', display: 'flex' }}>
                            <div className="user-name">{this.state.userName}</div>
                            <EditIcon onClick={this.handleOpen} className="editicon" />
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: "inherit" }}>
                    <GridList cols={3}>
                        {this.props.posts.map((post) => (
                            <GridListTile key={post.id} style={{ width: 350, height: 250}}>
                                <img src="https://pbs.twimg.com/profile_images/1222654825403424768/-ySQePLc.jpg" alt="img"></img>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>

                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.isModalOpen}
                    contentLabel="EditFullName"
                    onRequestClose={this.handleClose}
                    className="edit-modal"
                >
                    <Typography variant="h5" component="h2" style={{ paddingBottom: '15px' }}>Edit</Typography>

                    <FormControl required >
                        <InputLabel htmlFor="fullName" >Full Name</InputLabel>
                        <Input id="fullName" type="text" onChange={this.fullNameChangeHandler} />
                        <FormHelperText className={this.state.userNameReq}><span style={{ color: 'red' }} >required</span>
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <br />
                    <Button variant="contained" color="primary" onClick={this.editFullNameClickHandler} style={{ marginTop: '10px' }}>
                        UPDATE
                    </Button>
                </Modal>
            </div>
        )
    }
}

export default ProfileInner;