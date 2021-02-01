import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
  rootList: {
      marginBottom:10,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  }
  
}));



export default function ItemImageEditList(props) {
  const classes = useStyles();

  return (
    <div className={classes.rootList}>
      <GridList className={classes.gridList} cols={4} cellHeight={100} >
        {props.itemImages.map((tile) => (
          <GridListTile key={tile}>
            <img src={tile}  />
            
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}