import React, { Component } from 'react';
import Header from '../../common/header/Header';
import { Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import SvgIcon from '@material-ui/core/SvgIcon';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    card: {
        maxWidth: 550,
        margin: 20,
        height: 'auto',
        marginLeft: '4%',
    },
    avatar: {
        margin: 15,
        width: 60,
        height: 60,
    },
    hr: {
        width: 460,
    },
    icon: {
        margin: theme.spacing(1),
        fontSize: 32,
    }
});

class Home extends Component {
    constructor() {
        super();
        this.state = {
            imageWithCaptions: [],
            imageList: [],
            accessToken: sessionStorage.getItem("access-token"),
            isUserLoggedIn: sessionStorage.getItem("access-token") === null ? false : true
        }
    }

    UNSAFE_componentWillMount() {
        let images = []
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    imageWithCaptions: JSON.parse(this.responseText).data
                });
            }
        });

        xhr.open("GET", this.props.baseUrl + "me/media?fields=id,caption&access_token=" + sessionStorage.getItem("access-token"));
        xhr.setRequestHeader("Cache-Control", "no-cache");
        //xhr.send(data);        
    }

    fetchPostDetails = (id) => {
        let data = null;
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                let response = JSON.parse(this.responseText);
                return response;
            }
        });
        xhr.open("GET", this.props.baseUrl + id + "?fields=id,media_type,media_url,username,timestamp&access_token=" + sessionStorage.getItem("access-token"));
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data)
    }



    render() {
        const { classes } = this.props;

        return (
            <div>
                <Header showSearchBox={true} showProfileIcon={true} showMyAccount={true} />
                {this.state.isUserLoggedIn === true
                    ?
                    <div>
                        {<GridList cols={2} cellHeight='auto'>
                            {/* {this.state.imageWithCaptions.map(image => (
                                <Card className={classes.card} key={"card" + image.id}>
                                    <CardHeader>
                                        title={image.id}
                                        subheader={image.caption}
                                    </CardHeader>
                                </Card>
                            ))} */}
                        </GridList>}


                    </div>
                    : <Redirect to="/" />
                }
            </div>
        )
    }
}

export default withStyles(styles)(Home);