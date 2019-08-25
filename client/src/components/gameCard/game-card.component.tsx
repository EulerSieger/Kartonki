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
import CardAction from "../../models/card-action.model";
import ActionTextPrinterService from "../../services/action-text-printer.service";

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 140,
    },
});

// TODO understand why typing is not working
// function ActionList(props: {actions: CardAction[]}) {
function ActionList(props) {
    return props.actions.map(action =>
        <ListAction key={action.actionIndex} action={action}/>
    );
}

function ListAction(props: {action: CardAction}) {
    return <Typography variant="body1" color="textSecondary" component="p">{ActionTextPrinterService.getActionText(props.action)}</Typography>;
}

export default function GameCard(props: {info: CardInfo}) {
    // TODO find out how to use hooks with ts in a proper way
    // @ts-ignore
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
                        {props.info.getFullName()}
                    </Typography>
                    <ActionList actions={props.info.actions} />
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