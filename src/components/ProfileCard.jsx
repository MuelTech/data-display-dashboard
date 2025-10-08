import { Card, Typography, Button, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

/**
 * ProfileCard Component
 * Displays a clean, minimalist user profile card
 * Design inspired by modern social media profile cards
 * 
 * Props:
 * - name: Member's full name
 * - bio: Short description/bio
 * - followers: Number of followers
 * - posts: Number of posts
 * - image: Profile image URL
 */
function ProfileCard({ name, bio, followers, posts, image }) {
  return (
    <Card
      sx={{
        maxWidth: { xs: 340, sm: 360, md: 380, lg: 400, xl: 420 },
        margin: 'auto',
        borderRadius: { xs: 3, sm: 4 },
        padding: { xs: 2.5, sm: 3, lg: 3.5 },
        textAlign: 'center',
        backgroundColor: '#ffffff',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      elevation={2}
    >
      {/* Profile Image */}
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: '100%',
          height: { xs: 300, sm: 340, md: 360, lg: 380, xl: 400 },
          borderRadius: { xs: 3, sm: 4 },
          objectFit: 'cover',
          mb: { xs: 2.5, sm: 3 },
        }}
      />

      {/* Name */}
      <Typography
        variant="h5"
        component="div"
        fontWeight="bold"
        color="text.primary"
        textAlign="center"
        sx={{
          fontSize: { xs: '1.3rem', sm: '1.45rem', md: '1.5rem', lg: '1.55rem', xl: '1.6rem' },
          mb: { xs: 1.5, sm: 2 }
        }}
      >
        {name}
      </Typography>

      {/* Bio/Description */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mb: { xs: 2.5, sm: 3 },
          lineHeight: 1.6,
          fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem', lg: '1.1rem', xl: '1.15rem' },
          flexGrow: 1,
        }}
      >
        {bio}
      </Typography>
      
      {/* Stats and Follow Button */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 'auto', pt: { xs: 1.5, sm: 2 } }}
      >
        {/* Followers */}
        <Box display="flex" alignItems="center" gap={{ xs: 0.3, sm: 0.5 }}>
          <PersonIcon
            sx={{
              fontSize: { xs: 20, sm: 22, md: 24, lg: 26, xl: 28 },
              color: 'text.secondary'
            }}
          />
          <Typography
            variant="body1"
            fontWeight="600"
            color="text.primary"
            sx={{
              fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem', lg: '1.15rem', xl: '1.2rem' }
            }}
          >
            {followers}
          </Typography>
        </Box>

        {/* Posts */}
        <Box display="flex" alignItems="center" gap={{ xs: 0.3, sm: 0.5 }}>
          <PhotoLibraryIcon
            sx={{
              fontSize: { xs: 20, sm: 22, md: 24, lg: 26, xl: 28 },
              color: 'text.secondary'
            }}
          />
          <Typography
            variant="body1"
            fontWeight="600"
            color="text.primary"
            sx={{
              fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem', lg: '1.15rem', xl: '1.2rem' }
            }}
          >
            {posts}
          </Typography>
        </Box>

        {/* Follow Button */}
        <Button
          variant="text"
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem', lg: '1.1rem', xl: '1.15rem' },
            color: 'primary.main',
            px: { xs: 1.5, sm: 2 },
            py: { xs: 0.75, sm: 1 },
            minWidth: 'auto',
            '&:hover': {
              backgroundColor: 'rgba(37, 99, 235, 0.08)',
              color: 'primary.dark',
            },
          }}
        >
          Follow +
        </Button>
      </Box>
    </Card>
  );
}

export default ProfileCard;

