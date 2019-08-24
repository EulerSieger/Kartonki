import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CardInfo from "../../models/card-info.model";

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 140,
    },
});

function ActionList(props) {
    const actions = props.actions;
    const listActions = actions.map(action =>
        <ListAction key={action.actionIndex} action={action} />
    );
    return ({listActions});
}

function ListAction(props) {
    return <Typography variant="body1" color="textSecondary" component="p">{props.action.textFiller(props.action)}</Typography>;
}

export default function GameCard(props: {info: CardInfo}) {
    // @ts-ignore
    const classes = useStyles();

    const actions = props.info.actions;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="cavalry_card.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.info.getFullName()}
                    </Typography>
                    <ActionList actions={actions}/>
                    <hr/>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.info.notation}
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