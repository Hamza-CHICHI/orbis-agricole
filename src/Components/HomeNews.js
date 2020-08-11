import React, { Component } from 'react';
import { Card } from 'reactstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { FadeTransform } from 'react-animation-components';

class News extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){

        const news = this.props.articles.map((article) => {
            return (
              <div key={article.id} className="col-12 col-md-5 m-1">
                    <FadeTransform in
                        transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                        <Card>
                            <Link to={`/news/${article.id}`} style={{textDecoration: 'none'}}>
                                <CardActionArea className="myCard">
                                    <CardMedia className="image" component="img" height="140" image={article.image}/>
                                    <CardContent>
                                        <Typography gutterBottom className="card-title body" > {article.name} </Typography>
                                        <Typography variant="subtitle1" size="small" color="secondary">{article.theme}</Typography>
                                        <Typography variant="body1" color="textPrimary" component="p">
                                                {article.description}
                                        </Typography>
                                        <br></br>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(article.date)))}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    {/* <Link href="#">Card Link </Link> */}
                                    <Button size="small" color="default" className="cardButton">En savoir plus</Button>
                                </CardActions>
                            </Link>
                        </Card>
                    </FadeTransform>
                </div>
            );
        });

        return(
            <div className="container news">
                <div className="row d-flex justify-content-center">
                    {news}
                </div>
            </div>
        );
    }
}

export default News;