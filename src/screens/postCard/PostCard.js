import React, { Component } from 'react';
import "./PostCard.css";
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


class PostCard extends Component {

    state = {
        postTime: "",
        userpost: {},
        comments: [],
        comment: "",
        isLiked: false,
        postLikes: 0
    }
    componentWillMount() {
        this.setState({ likes: Math.ceil(Math.random() * 100) });
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({ userpost: JSON.parse(this.responseText), postTime: that.state.userpost.timestamp })
            }
        })

        let accesstoken = sessionStorage.getItem("access-token");
        xhr.open("GET", "https://graph.instagram.com/" + this.props.userPost.id + "?fields=id,media_type,media_url,username,timestamp&access_token=" + accesstoken);
        //xhr.send(data);

    }

    openProfilePage = (event) => {
        console.log("Open profile page");
    }

    likeHandler = (event) => {
        let numLikes = this.state.postLikes;
        if (this.state.isLiked) {
            this.setState({ likes: numLikes - 1 });
            this.setState({ isLiked: false });
        } else {
            this.setState({ likes: numLikes + 1 });
            this.setState({ isLiked: true });
        }
    }

    commentHandler = (e) => {
        let newComment = e.target.value;
        this.setState({ comment: newComment });
    }

    addCommentHandler = () => {
        let newComments = this.state.comments;
        if (this.state.comment !== "") {
            newComments.push(this.state.comment);
            this.setState({ comments: newComments });
            this.setState({ comment: "" });
        } else {
            return;
        }
    }

    render() {
        return (
            <div className="post-card">
                <Card >
                    <CardHeader
                        avatar={
                            <IconButton onClick={event => this.openProfilePage}>
                                <Avatar className="avatar" src="https://pbs.twimg.com/profile_images/1222654825403424768/-ySQePLc.jpg"></Avatar>
                            </IconButton>
                        }
                        title={this.state.userpost.username}
                        subheader={
                            new Date(this.state.userpost.timestamp).getDate() +
                            "/" + (new Date(this.state.userpost.timestamp).getMonth() + 1) +
                            "/" + new Date(this.state.userpost.timestamp).getFullYear() +
                            " " + new Date(this.state.userpost.timestamp).getHours() +
                            ":" + new Date(this.state.userpost.timestamp).getMinutes() +
                            ":" + new Date(this.state.userpost.timestamp).getSeconds()
                        }
                    />

                    <CardMedia
                        component="img"
                        src={this.state.userpost.media_url}
                    />
                    <div className="divider"> </div>
                    <CardContent >
                        <Typography variant="body1" color="black" component="p">
                            {this.props.userPost.caption}
                        </Typography>

                        <div style={{ display: 'flex', marginTop: 10, marginBottom: 50 }}>
                            <IconButton aria-label="add to favorites" className="like" onClick={this.likeHandler}>
                                {this.state.isLiked ? <Favorite style={{ color: "red", marginRight: 10 }} /> : <FavoriteIcon />}
                                <Typography className="like-count">{this.state.likes} likes</Typography>
                            </IconButton>
                        </div>

                        <div className="postcomments-section">
                            <div className="all-comments">
                                <CommentList list={this.state.comments} user={this.state.userpost.username} />
                            </div>
                            <TextField id="standard-basic" placeholder="Add a comment" value={this.state.comment} onChange={this.commentHandler} className="add-comment" />
                            <Button variant="contained" color="primary" onClick={this.addCommentHandler} style={{ float: 'right' }}>
                                ADD
                        </Button>
                        </div>
                    </CardContent>

                </Card>
            </div>
        )
    }
}

const CommentList = ({ list, user }) => (
    <ul>
        {list.map((item) => (
            <li key={item + "" + 1}><span style={{ fontWeight: "bold", marginTop: 10 }}>{user}:</span> {item}</li>
        ))}
    </ul>
);

export default PostCard;