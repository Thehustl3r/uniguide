import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Element } from 'react-scroll';


const cards = [
    {
        id: 1,
        imageUrl: 'usearch.png',
        heading: 'University Search',
        content: 'We provide reliable information about universities.',
    },
    {
        id: 1,
        imageUrl: 'uassistance.png',
        heading: 'Application Assists',
        content: 'We help people apply for African university schools.',
    },
    {
        id: 1,
        imageUrl: 'uscholarship.png',
        heading: 'Scholarship Search',
        content: 'We assist people in finding scholarships for their studies',
    },
];

const defaultTheme = createTheme();

export default function Services() {
  return (
    <Element name='Services'>
      <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 2,
            pb: 6,
          }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                Our Services
            </Typography>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="xl">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} style={{ width: '100%' }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 10,
                    width: '100%',
                    maxWidth: '300px',
                    margin: '0 auto',
                    }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.imageUrl}
                  />
                  <CardContent
                    sx={{
                        flexGrow: 1,
                        bgcolor: '#778291',
                        }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
    </Element>
  );
}