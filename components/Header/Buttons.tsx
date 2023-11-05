import { scroller } from "react-scroll";
import ForumIcon from "@material-ui/icons/Forum";
import CodeIcon from "@material-ui/icons/Code";
import { Box, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import NextLink from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bigButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        width: "48%",
        marginRight: theme.spacing(0),
      },
    },
    bigButtonsContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
  })
);

function Buttons() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.bigButtonsContainer} mt={2}>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.bigButton}
          startIcon={<ForumIcon />}
          onClick={() => {
            scroller.scrollTo("contact", {
              smooth: "easeInOutQuad",
            });
          }}
        >
          Get in touch
        </Button>
        <NextLink href="/projects">
          <Button
            component="a"
            variant="outlined"
            color="secondary"
            className={classes.bigButton}
            startIcon={<CodeIcon />}
            href="/projects"
          >
            See my work
          </Button>
        </NextLink>
      </Box>
    </>
  );
}

export default Buttons;
