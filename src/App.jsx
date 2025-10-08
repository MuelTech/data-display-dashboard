import { Container, Typography, Box, Grid, Divider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import custom theme
import theme from './theme';

// Import all dashboard components
import DashboardAppBar from './components/DashboardAppBar';
import ProfileCard from './components/ProfileCard';
import UserList from './components/UserList';
import UsersTable from './components/UsersTable';
import FAQAccordion from './components/FAQAccordion';

/**
 * Main App Component
 * Serves as the root component that organizes all dashboard sections
 * Wrapped with ThemeProvider to apply custom theme to all child components
 */
function App() {
  // members data for profile cards
  const members = [
    {
      id: 1,
      name: 'Im Nayeon',
      bio: 'Lead vocalist who focuses on bringing joy & positivity.',
      followers: 312,
      posts: 48,
      image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_01nayeon_7815696ecbf1c96e6894b779456d330e.jpg',
    },
    {
      id: 2,
      name: 'Yoo Jeongyeon',
      bio: 'Lead vocalist who focuses on strength & sincerity.',
      followers: 285,
      posts: 42,
      image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_02jeongyeon_7815696ecbf1c96e6894b779456d330e.jpg',
    },
    {
      id: 3,
      name: 'Hirai Momo',
      bio: 'Main dancer who focuses on passion & dedication.',
      followers: 298,
      posts: 56,
      image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_03momo_7815696ecbf1c96e6894b779456d330e.jpg',
    },
    {
      id: 4,
      name: 'Minatozaki Sana',
      bio: 'Vocalist who focuses on charm & brightness.',
      followers: 305,
      posts: 63,
      image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_04sana_7815696ecbf1c96e6894b779456d330e.jpg',
    },
    {
      id: 5,
      name: 'Park Jihyo',
      bio: 'Leader & main vocalist who focuses on leadership & harmony.',
      followers: 320,
      posts: 51,
      image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_05jihyo_7815696ecbf1c96e6894b779456d330e.jpg',
    },
    {
      id: 6,
      name: 'Myoui Mina',
      bio: 'Main dancer who focuses on elegance & grace.',
      followers: 278,
      posts: 39,
      image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_06mina_7815696ecbf1c96e6894b779456d330e.jpg',
    },
    {
      id: 7,
      name: 'Kim Dahyun',
      bio: 'Lead rapper who focuses on energy & creativity.',
      followers: 291,
      posts: 47,
      image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_07dahyun_7815696ecbf1c96e6894b779456d330e.jpg',
    },
    {
      id: 8,
      name: 'Son Chaeyoung',
      bio: 'Main rapper who focuses on artistry & uniqueness.',
      followers: 283,
      posts: 54,
      image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_08chaeyoung_7815696ecbf1c96e6894b779456d330e.jpg',
    },
    {
      id: 9,
      name: 'Chou Tzuyu',
      bio: 'Lead dancer who focuses on beauty & perfection.',
      followers: 315,
      posts: 44,
      image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_09tzuyu_7815696ecbf1c96e6894b779456d330e.jpg',
    },
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      {/* ThemeProvider applies the custom theme to all Material-UI components */}
      <ThemeProvider theme={theme}>
      {/* CssBaseline provides consistent baseline styles across browsers */}
      <CssBaseline />
      
      {/* Top Navigation Bar with Notification Avatar */}
      <DashboardAppBar />
      
      {/* Main container with responsive padding */}
      <Container
        maxWidth={false}
        sx={{
          py: { xs: 2, sm: 3, lg: 4, xl: 5 },
          px: { xs: 2, sm: 3, lg: 4, xl: 6 },
          maxWidth: {
            xs: '100%',
            sm: '100%',
            md: '1200px',
            lg: '1400px',
            xl: '1600px'
          },
          mx: 'auto',
          width: '100%',
          // Use full width on very large screens
          '@media (min-width: 1920px)': {
            maxWidth: '1800px'
          }
        }}
      >
        {/* Main Layout: Content + Sidebar */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: { xs: 3, sm: 4, lg: 5, xl: 6 } }}>
          {/* Main Content Area */}
          <Box sx={{ flex: { lg: '1 1 auto', xl: '1 1 75%' } }}>
            {/* Section 1: Profile Cards - TWICE Members */}
            <Box mb={{ xs: 3, sm: 4, lg: 5, xl: 6 }}>
              <Typography
                variant="h5"
                gutterBottom
                color="primary"
                mb={{ xs: 2, sm: 3, lg: 4 }}
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem' }
                }}
              >
                👤 Profile Cards
              </Typography>
              {/* Grid layout for multiple profile cards */}
              <Grid
                container
                spacing={{ xs: 2, sm: 3, lg: 4, xl: 3 }}
                justifyContent="center"
              >
                {members.map((member) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={4}
                    key={member.id}
                    sx={{
                      // Custom sizing for very large screens
                      '@media (min-width: 1920px)': {
                        flexBasis: '25%', // 4 cards per row on very large screens
                        maxWidth: '25%'
                      }
                    }}
                  >
                    <ProfileCard
                      name={member.name}
                      bio={member.bio}
                      followers={member.followers}
                      posts={member.posts}
                      image={member.image}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Divider sx={{ my: { xs: 3, sm: 4, lg: 5, xl: 6 } }} />

            {/* Section 3: Table with Pagination and Sorting */}
            <Box mb={{ xs: 3, sm: 4, lg: 5, xl: 6 }}>
              <Typography
                variant="h5"
                gutterBottom
                color="primary"
                mb={{ xs: 2, sm: 3, lg: 4 }}
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem' }
                }}
              >
                📋 Members Directory
              </Typography>
              <UsersTable />
            </Box>

            <Divider sx={{ my: { xs: 3, sm: 4, lg: 5, xl: 6 } }} />

            {/* Section 4: Accordion (FAQs) */}
            <Box mb={{ xs: 3, sm: 4, lg: 5, xl: 6 }}>
              <Typography
                variant="h5"
                gutterBottom
                color="primary"
                mb={{ xs: 2, sm: 3, lg: 4 }}
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem' }
                }}
              >
                ❓ FAQs
              </Typography>
              <FAQAccordion />
            </Box>
          </Box>

          {/* Right Sidebar: Members */}
          <Box
            sx={{
              flex: { lg: '0 0 auto', xl: '0 0 25%' },
              minWidth: { lg: '300px', xl: '320px' },
              maxWidth: { lg: '400px', xl: '420px' },
              position: { lg: 'sticky' },
              top: { lg: '2rem' },
              height: { lg: 'fit-content' }
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              color="primary"
              mb={{ xs: 2, sm: 3, lg: 4 }}
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem' }
              }}
            >
              👥 Members
            </Typography>
            <UserList />
          </Box>
        </Box>

        {/* Footer */}
        <Box
          textAlign="center"
          mt={{ xs: 4, sm: 5, lg: 6, xl: 8 }}
          py={{ xs: 2, sm: 3, lg: 4 }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem', lg: '1.5rem' }
            }}
          >
            Created by Lemuel 
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default App;
