import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Paper, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

/**
 * UserList Component
 * Displays members with their roles and avatars
 * Aligned with the profile cards section showing all 9 members
 * Shows list items with avatars and member details (no internal title)
 */
function UserList() {
  // members data aligned with profile cards
  const users = [
    { id: 1, name: 'Im Nayeon', role: 'Lead Vocalist', image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_01nayeon_7815696ecbf1c96e6894b779456d330e.jpg' },
    { id: 2, name: 'Yoo Jeongyeon', role: 'Lead Vocalist', image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_02jeongyeon_7815696ecbf1c96e6894b779456d330e.jpg' },
    { id: 3, name: 'Hirai Momo', role: 'Main Dancer', image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_03momo_7815696ecbf1c96e6894b779456d330e.jpg' },
    { id: 4, name: 'Minatozaki Sana', role: 'Vocalist', image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_04sana_7815696ecbf1c96e6894b779456d330e.jpg' },
    { id: 5, name: 'Park Jihyo', role: 'Leader & Main Vocalist', image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_05jihyo_7815696ecbf1c96e6894b779456d330e.jpg' },
    { id: 6, name: 'Myoui Mina', role: 'Main Dancer', image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_06mina_7815696ecbf1c96e6894b779456d330e.jpg' },
    { id: 7, name: 'Kim Dahyun', role: 'Lead Rapper', image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_07dahyun_7815696ecbf1c96e6894b779456d330e.jpg' },
    { id: 8, name: 'Son Chaeyoung', role: 'Main Rapper', image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_08chaeyoung_7815696ecbf1c96e6894b779456d330e.jpg' },
    { id: 9, name: 'Chou Tzuyu', role: 'Lead Dancer', image: 'https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_09tzuyu_7815696ecbf1c96e6894b779456d330e.jpg' },
  ];

  return (
    <Paper
      elevation={2}
      sx={{
        padding: { xs: 2, sm: 3, lg: 4 },
        borderRadius: { xs: 2, sm: 3 }
      }}
    >
      {/* Material-UI List with Avatars */}
      <List sx={{ py: 0 }}>
        {users.map((user, index) => (
          <div key={user.id}>
            <ListItem
              alignItems="flex-start"
              sx={{
                py: { xs: 1.5, sm: 2 },
                px: { xs: 0, sm: 1 }
              }}
            >
              {/* Avatar component showing profile images */}
              <ListItemAvatar sx={{ minWidth: { xs: 48, sm: 56 } }}>
                <Avatar
                  src={user.image}
                  alt={user.name}
                  sx={{
                    width: { xs: 40, sm: 48, lg: 56 },
                    height: { xs: 40, sm: 48, lg: 56 },
                    border: '2px solid #e0e0e0'
                  }}
                />
              </ListItemAvatar>

              {/* User information */}
              <ListItemText
                primary={user.name}
                secondary={user.role}
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.1rem', lg: '1.2rem' }
                }}
                secondaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.1rem' }
                }}
                sx={{ ml: { xs: 1, sm: 2 } }}
              />
            </ListItem>

            {/* Divider between list items (except for the last item) */}
            {index < users.length - 1 && (
              <Divider
                variant="inset"
                component="li"
                sx={{
                  ml: { xs: '48px', sm: '56px' },
                  mr: { xs: 0, sm: 2 }
                }}
              />
            )}
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default UserList;

