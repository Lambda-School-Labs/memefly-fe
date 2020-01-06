import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';

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

export function LearnMore() {


    return (
					<Box component="div" className="LearnMoreBox">
						<Container className="LearnMoreContainer" maxWidth="lg">
							<h1>LEARN MORE ABOUT US</h1>
							<p>Lorem</p>
						</Container>
						<Container maxWidth="md">
							<Grid container spacing={1}>
								<Grid container item xs={12} spacing={1}>
                                    <p>TEST 1</p>
                                    <p>TEST 2</p>
                                    <p>TEST 3</p>
								</Grid>
								<Grid container item xs={12} spacing={3}>
                                <p>TEST 1</p>
                                    <p>TEST 2</p>
                                    <p>TEST 3</p>
								</Grid>
								<Grid container item xs={12} spacing={3}>
                                <p>TEST 1</p>
                                    <p>TEST 2</p>
                                    <p>TEST 3</p>
								</Grid>
							</Grid>
						</Container>
					</Box>
				);
}