import React from 'react';
import { Box} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const Data = {
   team: [{
    name: 'Nick Burkhalter',
    bio: 'Business School -> Musician -> Military -> Data Scientist',
    lastBook:' Strategy - Lawrence Freedman',
    secretTalent:' I don’t know what language I think in',
    portfolioLink: 'https://nburkhal.github.io/',
    linkedInLink: 'https://www.linkedin.com/in/nick-burkhalter-4b0377108/',
    gitHubLink: 'https://github.com/Nburkhal',
    },
    {
    name: 'Andrew Ogle',
    bio: '',
    lastBook:'',
    secretTalent:'',
    portfolioLink: '',
    linkedInLink: '',
    gitHubLink: '',
    },
    {
    name: 'Danniel Vidal',
    bio: '',
    lastBook:'',
    secretTalent:'',
    portfolioLink: '',
    linkedInLink: '',
    gitHubLink: '',
    },
    {
    name: 'Han Lee',
    bio: 'Unprofessional Troll hiding under the bridge with Python and Tensorflow.',
    lastBook:'Introduction to Natural Language Processing - Jacob Eisenstin',
    secretTalent:'The first rule of Fight Club is...',
    portfolioLink: 'https://leehanchung.github.io/',
    linkedInLink: 'https://www.linkedin.com/in/hanchunglee/',
    gitHubLink: 'https://github.com/leehanchung',
    },
    {
    name: 'Lindsey Cason',
    bio: 'Florida raised, New Orleans transplant. When I’m not coding or listening to live music in the city, you can find me recharging by a body of water with friends.',
    lastBook:'The Magic-Rhonda Byrne',
    secretTalent:'The cherry stem in a knot thing. Nailed it.',
    portfolioLink: 'https://www.linkedin.com/in/lindseyacason/',
    linkedInLink: ' https://www.linkedin.com/in/lindseyacason/',
    gitHubLink: 'https://github.com/LindseyCason',
    },
    {
    name: 'Harsh Desai',
    bio: '',
    lastBook:'',
    secretTalent:'',
    portfolioLink: '',
    linkedInLink: '',
    gitHubLink: '',
    },
    {
    name: 'Derek Etman',
    bio: '',
    lastBook: "You Don't Know JS Scope & Closures",
    secretTalent:'Can cook or bake anything',
    portfolioLink: 'https://www.DerekEtman.com',
    linkedInLink: 'https://www.linkedin.com/in/dereketman/',
    gitHubLink: 'https://github.com/DerekEtman',  
    }
    ]
};


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©'}
      <Link color="inherit" href="https://material-ui.com/">
        www.MemeFlyAi.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, ];

export function LearnMore() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}