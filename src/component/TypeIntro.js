import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

const useStyles = makeStyles(() => ({
  card: {
    
    boxShadow: 'none',
    position: 'relative',
    width:"100%",
    minWidth: 500,
    minHeight: 350,
    '&:after': {
      content: '""',
     display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'relative',
    zIndex: 2,
    top: "10%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",

    width: '800',
  },
}));

export const TypeIntro = React.memo(function GalaxyCard(props) {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();
  return (
    <>
      
      <Card className={styles.card}>
        <CardMedia
       
          classes={mediaStyles}
          image={
            props.images
          }
        />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles} >
            <InfoSubtitle style={{display: "inline-block",borderBottom:"4px #b100e8 solid"}}>{props.store}</InfoSubtitle>
            <InfoTitle style={{fontSize:"5em"}}>{props.title}</InfoTitle>
            <InfoCaption>{props.intro}</InfoCaption>
          </Info>
        </Box>
      </Card>
    </>
  );
});
export default TypeIntro