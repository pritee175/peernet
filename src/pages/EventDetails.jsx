import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Typography,
  Avatar,
  AvatarGroup,
  useTheme,
  Container,
  alpha,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Clock,
  Share2,
  Users,
  Building,
  ChevronLeft,
  Heart,
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Mock data for demonstration
const mockEvent = {
  id: 1,
  title: 'Tech Hackathon 2025',
  image: 'https://source.unsplash.com/random/1200x400/?hackathon',
  date: '2025-03-15',
  time: '9:00 AM - 6:00 PM',
  location: 'Engineering Building',
  organizer: 'Tech Society',
  category: 'Hackathon',
  attendees: [
    { id: 1, name: 'Alex K.', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
    { id: 2, name: 'Sarah C.', avatar: 'https://source.unsplash.com/random/40x40/?woman' },
    { id: 3, name: 'Mike R.', avatar: 'https://source.unsplash.com/random/40x40/?man' },
    { id: 4, name: 'Emily W.', avatar: 'https://source.unsplash.com/random/40x40/?girl' },
  ],
  description: `Join us for an exciting 24-hour hackathon where students from all backgrounds come together to build innovative solutions! 

  Prizes:
  - First Place: $1000
  - Second Place: $500
  - Third Place: $250
  - Best UI/UX: $200

  What to bring:
  - Laptop & charger
  - Student ID
  - Enthusiasm and creativity!

  Theme:
  This year's theme is "Tech for Social Good" - build solutions that make a positive impact on society.

  Schedule:
  - 9:00 AM: Registration & Team Formation
  - 10:00 AM: Opening Ceremony
  - 11:00 AM: Hacking Begins
  - 6:00 PM: Project Submissions
  - 7:00 PM: Presentations & Judging`,
  requirements: [
    'Valid student ID required',
    'Teams of 2-4 members',
    'Basic programming knowledge',
    'Own laptop',
  ],
};

const EventDetails = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [showRSVP, setShowRSVP] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#4A90E2', '#9B59B6', '#1ABC9C']
      });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Button
          component={motion.button}
          whileHover={{ x: -5 }}
          startIcon={<ChevronLeft size={20} />}
          onClick={() => navigate('/events')}
          sx={{
            mb: 4,
            height: 48,
            borderRadius: '16px',
            fontFamily: 'Inter',
            textTransform: 'none',
            color: '#4A90E2',
            '&:hover': {
              backgroundColor: alpha('#4A90E2', 0.05),
            },
          }}
        >
          Back to Events
        </Button>

        <Card 
          component={motion.div}
          whileHover={{ y: -5 }}
          sx={{ 
            mb: 4,
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: `0 8px 24px ${alpha('#4A90E2', 0.1)}`,
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              height="400"
              image={mockEvent.image}
              alt={mockEvent.title}
              sx={{
                objectFit: 'cover',
                filter: 'brightness(0.8)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 32,
                left: 32,
                right: 32,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {mockEvent.title}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Chip
                  icon={<Building size={16} />}
                  label={mockEvent.organizer}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.9)',
                    '& .MuiChip-label': {
                      color: '#4A90E2',
                      fontFamily: 'Inter',
                    },
                  }}
                />
                <Chip
                  label={mockEvent.category}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.9)',
                    '& .MuiChip-label': {
                      color: '#9B59B6',
                      fontFamily: 'Inter',
                    },
                  }}
                />
              </Stack>
            </Box>
          </Box>
        </Card>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                background: 'linear-gradient(45deg, #4A90E2, #9B59B6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
              }}
            >
              About this event
            </Typography>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: 'pre-line',
                mb: 4,
                fontFamily: 'Inter',
                color: theme.palette.text.secondary,
              }}
            >
              {mockEvent.description}
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                background: 'linear-gradient(45deg, #4A90E2, #9B59B6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
              }}
            >
              Requirements
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {mockEvent.requirements.map((req, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body1"
                  sx={{
                    mb: 1,
                    fontFamily: 'Inter',
                    color: theme.palette.text.secondary,
                  }}
                >
                  {req}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Card
                component={motion.div}
                whileHover={{ y: -5 }}
                sx={{
                  p: 3,
                  borderRadius: '16px',
                  boxShadow: `0 8px 24px ${alpha('#4A90E2', 0.1)}`,
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                  }}
                >
                  Event Details
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Calendar size={20} color="#4A90E2" />
                    <Typography variant="body1" sx={{ ml: 2, fontFamily: 'Inter' }}>
                      {new Date(mockEvent.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Clock size={20} color="#4A90E2" />
                    <Typography variant="body1" sx={{ ml: 2, fontFamily: 'Inter' }}>
                      {mockEvent.time}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MapPin size={20} color="#4A90E2" />
                    <Typography variant="body1" sx={{ ml: 2, fontFamily: 'Inter' }}>
                      {mockEvent.location}
                    </Typography>
                  </Box>
                </Stack>

                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<Calendar size={20} />}
                  onClick={() => setShowRSVP(true)}
                  sx={{
                    mt: 3,
                    height: 48,
                    borderRadius: '16px',
                    fontFamily: 'Inter',
                    background: 'linear-gradient(45deg, #4A90E2, #9B59B6)',
                    textTransform: 'none',
                    '&:hover': { opacity: 0.9 },
                  }}
                >
                  RSVP Now
                </Button>
              </Card>

              <Card
                component={motion.div}
                whileHover={{ y: -5 }}
                sx={{
                  p: 3,
                  borderRadius: '16px',
                  boxShadow: `0 8px 24px ${alpha('#4A90E2', 0.1)}`,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Users size={20} color="#4A90E2" />
                    <Typography variant="body1" sx={{ ml: 2, fontFamily: 'Inter' }}>
                      {mockEvent.attendees.length} Going
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      onClick={handleLike}
                      sx={{
                        '&:hover': { backgroundColor: alpha('#9B59B6', 0.1) },
                      }}
                    >
                      <Heart
                        size={20}
                        fill={isLiked ? '#9B59B6' : 'none'}
                        color={isLiked ? '#9B59B6' : 'inherit'}
                      />
                    </IconButton>
                    <IconButton
                      sx={{
                        '&:hover': { backgroundColor: alpha('#4A90E2', 0.1) },
                      }}
                    >
                      <Share2 size={20} />
                    </IconButton>
                  </Box>
                </Box>
                <AvatarGroup
                  max={4}
                  sx={{
                    '& .MuiAvatar-root': {
                      width: 40,
                      height: 40,
                      fontSize: '1rem',
                      border: `2px solid ${theme.palette.background.paper}`,
                    },
                  }}
                >
                  {mockEvent.attendees.map((attendee) => (
                    <Avatar
                      key={attendee.id}
                      alt={attendee.name}
                      src={attendee.avatar}
                    />
                  ))}
                </AvatarGroup>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </motion.div>

      <Dialog
        open={showRSVP}
        onClose={() => setShowRSVP(false)}
        PaperProps={{
          sx: {
            borderRadius: '16px',
            p: 2,
            maxWidth: 400,
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            background: 'linear-gradient(45deg, #4A90E2, #9B59B6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          RSVP for {mockEvent.title}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Calendar size={18} color="#4A90E2" />
              <Typography variant="body1" sx={{ ml: 2, fontFamily: 'Inter' }}>
                {new Date(mockEvent.date).toLocaleDateString()} • {mockEvent.time}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MapPin size={18} color="#4A90E2" />
              <Typography variant="body1" sx={{ ml: 2, fontFamily: 'Inter' }}>
                {mockEvent.location}
              </Typography>
            </Box>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Any questions or comments?"
              sx={{
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '16px',
                  fontFamily: 'Inter',
                },
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={() => setShowRSVP(false)}
            sx={{
              fontFamily: 'Inter',
              color: theme.palette.text.secondary,
              '&:hover': {
                backgroundColor: alpha(theme.palette.text.secondary, 0.1),
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setShowRSVP(false);
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#4A90E2', '#9B59B6', '#1ABC9C']
              });
            }}
            sx={{
              height: 48,
              borderRadius: '16px',
              fontFamily: 'Inter',
              background: 'linear-gradient(45deg, #4A90E2, #9B59B6)',
              textTransform: 'none',
              '&:hover': { opacity: 0.9 },
            }}
          >
            Confirm RSVP
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default EventDetails;
