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
    role:'Data Scientist',
    lastBook:' Strategy - Lawrence Freedman',
    secretTalent:' I don’t know what language I think in',
    portfolioLink: 'https://nburkhal.github.io/',
    linkedInLink: 'https://www.linkedin.com/in/nick-burkhalter-4b0377108/',
    gitHubLink: 'https://github.com/Nburkhal',
    img_url: 'https://avatars2.githubusercontent.com/u/6277592?s=460&v=4'
    },
    {
    name: 'Andrew Ogle',
    bio: 'I write code and eat food, sometimes at the same time.',
    role:'Project Manager',
    lastBook:'Starsight By Brandon Sanderson',
    secretTalent:'I can forget what I am talking about while I am talking about it.',
    portfolioLink: 'andrewryanogle.com',
    linkedInLink: 'https://www.linkedin.com/in/andrew-ogle/',
    gitHubLink: 'https://github.com/andrewogle',
    img_url: 'https://avatars3.githubusercontent.com/u/35720141?s=460&v=4'
    },
    {
    name: 'Danniel Vidal',
    bio: 'I have been a self taught developer since early 2016 I have experience with multiple languages. Currently I consider JavaScript to be my main language.',
    role:'Full Stack Developer',
    lastBook:'YDKJS book series ',
    secretTalent:'Can play piano',
    portfolioLink: 'https://www.dannyvidal.codes',
    linkedInLink: 'https://www.linkedin.com/in/danny-vidal-51798919a/',
    gitHubLink: 'https://github.com/dannyvidal',
    img_url: 'https://avatars2.githubusercontent.com/u/56495634?s=460&v=4'
    },
    {
    name: 'Han Lee',
    bio: 'Unprofessional Troll hiding under the bridge with Python and Tensorflow.',
    role:'Data Scientist',
    lastBook:'Introduction to Natural Language Processing - Jacob Eisenstin',
    secretTalent:'The first rule of Fight Club is...',
    portfolioLink: 'https://leehanchung.github.io/',
    linkedInLink: 'https://www.linkedin.com/in/hanchunglee/',
    gitHubLink: 'https://github.com/leehanchung',
    img_url: 'https://avatars2.githubusercontent.com/u/4794839?s=460&v=4'
    },
    {
    name: 'Lindsey Cason',
    bio: 'Florida raised, New Orleans transplant. When I’m not coding or listening to live music in the city, you can find me recharging by a body of water with friends.',
    role:'Full Stack Developer',
    lastBook:'The Magic-Rhonda Byrne',
    secretTalent:'The cherry stem in a knot thing. Nailed it.',
    portfolioLink: 'https://www.linkedin.com/in/lindseyacason/',
    linkedInLink: ' https://www.linkedin.com/in/lindseyacason/',
    gitHubLink: 'https://github.com/LindseyCason',
    img_url: 'https://avatars3.githubusercontent.com/u/29295649?s=460&v=4'
    },
    {
    name: 'Harsh Desai',
    bio: 'Stared as Chemist, evolved into Tech, now plan to become AI/ML pro',
    role:'Data Scientist',
    lastBook:'Life 3.0: Being Human in the Age of AI',
    secretTalent:'You didn’t see this… ',
    portfolioLink: 'https://hurshdesai.com/',
    linkedInLink: 'https://www.linkedin.com/in/harsh-d-6b153a155/',
    gitHubLink: 'https://github.com/hurshd0',
    img_url: 'https://avatars0.githubusercontent.com/u/16807421?s=460&v=4'
    },
    {
    name: 'Derek Etman',
    bio: 'Full stack developer with a degree in music composition',
    role:'Full Stack Developer',
    lastBook: "You Don't Know JS Scope & Closures",
    secretTalent:'Can cook or bake anything',
    portfolioLink: 'https://www.DerekEtman.com',
    linkedInLink: 'https://www.linkedin.com/in/dereketman/',
    gitHubLink: 'https://github.com/DerekEtman',
    img_url: 'https://avatars0.githubusercontent.com/u/49086915?s=460&v=4'  
    }
    ]
};


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©'}
      <Link color="inherit" href="https://memeflyai.com/">
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


export function LearnMore() {
  const classes = useStyles();

  console.log(Data.team)

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Tiny Team, Big Goals.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              MemeFly Ai is a small team of full stack developers and data engineers from Lambda School. 
              Despite losing 40% of its web team and the rest to a nasty flu, they continued to push to finish together. 
            </Typography>
            {/* <div className={classes.heroButtons}>
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
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Data.team.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img_url}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="h2">
                    {card.role}
                    </Typography>
                    <Typography>
                      {card.bio}
                    </Typography>
                    <br/>
                    <Typography gutterBottom variant="h6" component="h2">
                    Secret Talent
                    </Typography>
                    <Typography>
                      {card.secretTalent}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={card.linkedInLink}>
                      Linked in
                    </Button>
                    <Button size="small" color="primary" href={card.portfolioLink}>
                      Portfolio
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
          Thanks for visiting!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Computers think, so you don't have to!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}