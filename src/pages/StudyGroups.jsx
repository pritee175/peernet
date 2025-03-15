import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useTheme,
  alpha,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Search,
  Filter,
  Plus,
  BookOpen,
} from 'lucide-react';

// Mock data for demonstration
const mockGroups = [
  {
    id: 1,
    name: 'Data Structures & Algorithms',
    description: 'Weekly study sessions focusing on DSA problems and solutions.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    schedule: 'Every Tuesday, 4:00 PM',
    location: 'Engineering Building, Room 204',
    members: 15,
    course: 'CS301',
    tags: ['Programming', 'Algorithms', 'Computer Science'],
  },
  {
    id: 2,
    name: 'Physics Study Circle',
    description: 'Group discussions on quantum mechanics and relativity.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    schedule: 'Every Wednesday, 5:00 PM',
    location: 'Science Building, Lab 103',
    members: 12,
    course: 'PHY401',
    tags: ['Physics', 'Quantum Mechanics', 'Science'],
  },
  {
    id: 3,
    name: 'Business Case Analysis',
    description: 'Analyzing real-world business cases and strategies.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    schedule: 'Every Thursday, 3:00 PM',
    location: 'Business School, Room 305',
    members: 18,
    course: 'BUS202',
    tags: ['Business', 'Case Studies', 'Strategy'],
  },
];

const StudyGroupCard = ({ group }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [openJoinDialog, setOpenJoinDialog] = useState(false);

  const handleGroupClick = () => {
    navigate(`/study-groups/${group.id}`, { state: { group } });
  };

  const handleJoinClick = (e) => {
    e.stopPropagation();
    setOpenJoinDialog(true);
  };

  return (
    <>
      <Card
        component={motion.div}
        whileHover={{ y: -4 }}
        sx={{
          height: '100%',
          borderRadius: 4,
          overflow: 'hidden',
          cursor: 'pointer',
          bgcolor: theme.palette.background.paper,
          transition: 'all 0.3s ease-in-out',
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          '&:hover': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
          },
        }}
        onClick={handleGroupClick}
      >
        <CardMedia
          component="img"
          height="200"
          image={group.image}
          alt={group.name}
          sx={{
            borderRadius: '16px 16px 0 0',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
          }}
        />
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {group.name}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            {group.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  borderRadius: 2,
                  bgcolor: `${theme.palette.primary.main}15`,
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>

          <Stack spacing={1.5} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Calendar size={16} color={theme.palette.primary.main} />
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                {group.schedule}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MapPin size={16} color={theme.palette.primary.main} />
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                {group.location}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Users size={16} color={theme.palette.primary.main} />
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                {group.members} members
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                borderRadius: 2,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  opacity: 0.9,
                },
              }}
              onClick={handleJoinClick}
            >
              Join Group
            </Button>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
                sx={{
                  color: isLiked ? theme.palette.error.main : theme.palette.text.secondary,
                  '&:hover': { backgroundColor: alpha(theme.palette.error.main, 0.1) },
                }}
              >
                <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
              </IconButton>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle share logic
                }}
                sx={{
                  '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.1) },
                }}
              >
                <Share2 size={18} />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Dialog
        open={openJoinDialog}
        onClose={() => setOpenJoinDialog(false)}
        PaperProps={{
          sx: {
            borderRadius: 4,
            bgcolor: theme.palette.background.paper,
          }
        }}
      >
        <DialogTitle sx={{
          fontFamily: 'Poppins',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Join {group.name}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mt: 2, mb: 2, color: theme.palette.text.secondary }}>
            Please introduce yourself to the group members:
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            multiline
            rows={4}
            placeholder="Write a brief introduction..."
            variant="outlined"
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={() => setOpenJoinDialog(false)}
            sx={{
              color: theme.palette.text.secondary,
              '&:hover': { backgroundColor: alpha(theme.palette.text.secondary, 0.1) },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              // Handle join group logic
              setOpenJoinDialog(false);
            }}
            sx={{
              borderRadius: 2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              color: '#fff',
              '&:hover': { opacity: 0.9 },
            }}
          >
            Send Request
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const StudyGroups = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);

  const allTags = Array.from(new Set(mockGroups.flatMap(group => group.tags)));

  const filteredGroups = mockGroups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 ||
      group.tags.some(tag => selectedTags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Study Groups
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontFamily: 'Inter' }}>
          Join study groups to collaborate with fellow students and enhance your learning experience
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              placeholder="Search by group name, course, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={20} color={theme.palette.text.secondary} />
                  </InputAdornment>
                ),
                sx: {
                  height: 48,
                  fontFamily: 'Inter',
                }
              }}
              sx={{
                bgcolor: theme.palette.background.paper,
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  borderColor: alpha(theme.palette.primary.main, 0.2),
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Filter size={20} />}
                onClick={(e) => setFilterAnchorEl(e.currentTarget)}
                sx={{
                  height: 48,
                  borderRadius: 2,
                  fontFamily: 'Inter',
                  borderColor: alpha(theme.palette.primary.main, 0.2),
                  color: theme.palette.text.primary,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  },
                }}
              >
                Filters {selectedTags.length > 0 && `(${selectedTags.length})`}
              </Button>
              <Button
                fullWidth
                variant="contained"
                startIcon={<Plus size={20} />}
                sx={{
                  height: 48,
                  borderRadius: 2,
                  fontFamily: 'Inter',
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  color: '#fff',
                  textTransform: 'none',
                  '&:hover': {
                    opacity: 0.9,
                  },
                }}
              >
                Create Group
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Menu
        anchorEl={filterAnchorEl}
        open={Boolean(filterAnchorEl)}
        onClose={() => setFilterAnchorEl(null)}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 2,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
          },
        }}
      >
        {allTags.map((tag) => (
          <MenuItem
            key={tag}
            onClick={() => {
              setSelectedTags(prev =>
                prev.includes(tag)
                  ? prev.filter(t => t !== tag)
                  : [...prev, tag]
              );
            }}
            sx={{
              fontFamily: 'Inter',
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              },
            }}
          >
            <Checkbox
              checked={selectedTags.includes(tag)}
              sx={{
                color: alpha(theme.palette.primary.main, 0.5),
                '&.Mui-checked': {
                  color: theme.palette.primary.main,
                },
              }}
            />
            {tag}
          </MenuItem>
        ))}
      </Menu>

      <Grid container spacing={3}>
        {filteredGroups.map((group) => (
          <Grid item xs={12} md={4} key={group.id}>
            <StudyGroupCard group={group} />
          </Grid>
        ))}
        {filteredGroups.length === 0 && (
          <Grid item xs={12}>
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
                color: theme.palette.text.secondary,
              }}
            >
              <Typography variant="h6" sx={{ fontFamily: 'Poppins', mb: 1 }}>
                No study groups found
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Inter' }}>
                Try adjusting your search or filters
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default StudyGroups;
