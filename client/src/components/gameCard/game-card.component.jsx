import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './game-card.style.css';

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 140,
    },
});

export default function GameCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="cavalry_card.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Cavalry
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Draw 2 cards.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Deal 5 damage to an enemy.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Deal 3 damage to itself.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" color="secondary">
                    Attack
                </Button>
                <Button size="medium" color="primary">
                    Defence
                </Button>
                <Button size="medium" color="default">
                    Idle
                </Button>
            </CardActions>
        </Card>
    );
}