import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { Info } from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";

const useStyles = makeStyles(() => ({
  card: {
    boxShadow: "none",
    position: "relative",
    width: "100%",
    maxHeight: 450,
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "100%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "relative",

    zIndex: 2,
    top: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: "100%",
  },
}));

export const TypeIntro = React.memo(function GalaxyCard(props) {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const styles = useStyles();
  return (
    <>
      <Card className={styles.card}>
        <CardMedia classes={mediaStyles} image={props.images} />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <Typography
              style={{
                display: "inline-block",
                borderBottom: "4px #b100e8 solid",
                color: "#f4f3ee",
              }}
            >
              {props.store}
            </Typography>
            <Typography
              variant="h1"
              style={{
                color: "#f4f3ee",
                marginTop: 10,
                marginBottom: 40,
                fontWeight: "400",
              }}
            >
              {props.title}
            </Typography>
            <Typography style={{ color: "#bcb8b1" }}>{props.intro}</Typography>
          </Info>
        </Box>
      </Card>
    </>
  );
});
export default TypeIntro;
