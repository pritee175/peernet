import React, { useState, useMemo } from 'react';
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
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Calendar,
  MapPin,
  Users,
  Plus,
  ExternalLink,
  Heart,
  Share2,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Mock data for demonstration
const events = [
  {
    id: 1,
    title: 'Hackit Hackathon',
    date: '2025-04-02',
    location: 'Cummins College of Engineering, Pune',
    category: 'Hackathon',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    description: 'Real-world problem solving using emerging tech',
    tags: ['AI/ML', 'Blockchain', 'IoT'],
    attendees: 250,
  },
  {
    id: 2,
    title: 'Web3 Development Workshop',
    date: '2025-04-05',
    location: 'Virtual Event',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    description: 'Smart contracts and DApp development',
    tags: ['Ethereum', 'Smart Contracts', 'DApps'],
    attendees: 150,
  },
  {
    id: 3,
    title: 'AI Innovation Summit',
    date: '2025-04-08',
    location: 'COEP Technological University',
    category: 'Conference',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    description: 'Latest developments in AI/ML',
    tags: ['AI', 'ML', 'Deep Learning'],
    attendees: 300,
  },
  {
    id: 4,
    title: 'CodeCraft Competition',
    date: '2025-04-12',
    location: 'MIT World Peace University',
    category: 'Competition',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80',
    description: 'Competitive programming challenge',
    tags: ['Algorithms', 'Data Structures'],
    attendees: 200,
  },
  {
    id: 5,
    title: 'Quantum Computing Workshop',
    date: '2025-04-15',
    location: 'Hybrid Event',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    description: 'Quantum computing principles and applications',
    tags: ['Quantum', 'Computing', 'Future Tech'],
    attendees: 100,
  }
];

const Events = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [filters, setFilters] = useState({
    category: 'all',
    location: 'all',
  });

  const handleFilterClick = () => {
    setFilterOpen(true);
  };

  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const categories = ['Hackathon', 'Workshop', 'Conference', 'Competition'];
  const locations = ['Pune', 'Virtual Event', 'Hybrid Event'];

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = filters.category === 'all' ||
        filters.category === event.category;
      
      const matchesLocation = filters.location === 'all' ||
        event.location.includes(filters.location);
      
      const matchesDate = !selectedDate ||
        new Date(event.date).toDateString() === selectedDate.toDateString();

      return matchesSearch && matchesCategory && matchesLocation && matchesDate;
    });
  }, [searchQuery, filters, selectedDate]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
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
            Tech Events
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Discover and join exciting tech events in your university network
          </Typography>
        </Box>

        <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={20} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: 48,
                borderRadius: 2,
                bgcolor: alpha(theme.palette.background.paper, 0.8),
                '&:hover': {
                  bgcolor: alpha(theme.palette.background.paper, 0.9),
                },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleFilterClick}
            startIcon={<Filter size={20} />}
            sx={{
              height: 48,
              borderRadius: 2,
              px: 3,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              '&:hover': {
                opacity: 0.9,
              },
            }}
          >
            Filter
          </Button>
          <Button
            variant="contained"
            onClick={handleSortClick}
            startIcon={<Sparkles size={20} />}
            sx={{
              height: 48,
              borderRadius: 2,
              px: 3,
              background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
              '&:hover': {
                opacity: 0.9,
              },
            }}
          >
            Sort
          </Button>
        </Box>

        <AnimatePresence>
          <Grid container spacing={3}>
            {filteredEvents.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
                      '&:hover': {
                        boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.15)}`,
                        cursor: 'pointer',
                      },
                    }}
                    onClick={() => navigate(`/events/${event.id}`)}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={event.image}
                        alt={event.title}
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.3s',
                          '&:hover': { transform: 'scale(1.05)' },
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
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                          position: 'absolute',
                          bottom: 16,
                          left: 16,
                          right: 16,
                        }}
                      >
                        {event.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              bgcolor: alpha(theme.palette.primary.main, 0.9),
                              color: 'white',
                              fontFamily: 'Inter',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Stack spacing={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {event.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" noWrap>
                          {event.description}
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Calendar size={16} />
                            <Typography variant="body2">
                              {new Date(event.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <MapPin size={16} />
                            <Typography variant="body2" noWrap>
                              {event.location}
                            </Typography>
                          </Box>
                        </Stack>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Users size={16} />
                          <Typography variant="body2">
                            {event.attendees} Attendees
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>

        <Dialog
          open={filterOpen}
          onClose={handleFilterClose}
          PaperProps={{
            sx: {
              borderRadius: 4,
              p: 2,
              minWidth: 300,
            },
          }}
        >
          <DialogTitle sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
            Filter Events
          </DialogTitle>
          <DialogContent>
            <Stack spacing={3}>
              <Box>
                <Typography gutterBottom sx={{ fontFamily: 'Poppins', mb: 1 }}>
                  Date
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>

              <Box>
                <Typography gutterBottom sx={{ fontFamily: 'Poppins', mb: 1 }}>
                  Category
                </Typography>
                <FormGroup>
                  {categories.map((category) => (
                    <FormControlLabel
                      key={category}
                      control={
                        <Checkbox
                          checked={filters.category === category}
                          onChange={() =>
                            setFilters(prev => ({
                              ...prev,
                              category: prev.category === category ? 'all' : category,
                            }))
                          }
                        />
                      }
                      label={category}
                    />
                  ))}
                </FormGroup>
              </Box>

              <Box>
                <Typography gutterBottom sx={{ fontFamily: 'Poppins', mb: 1 }}>
                  Location
                </Typography>
                <FormGroup>
                  {locations.map((location) => (
                    <FormControlLabel
                      key={location}
                      control={
                        <Checkbox
                          checked={filters.location === location}
                          onChange={() =>
                            setFilters(prev => ({
                              ...prev,
                              location: prev.location === location ? 'all' : location,
                            }))
                          }
                        />
                      }
                      label={location}
                    />
                  ))}
                </FormGroup>
              </Box>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setFilters({ category: 'all', location: 'all' });
                setSelectedDate(null);
              }}
              sx={{ color: theme.palette.text.secondary }}
            >
              Reset
            </Button>
            <Button
              onClick={handleFilterClose}
              variant="contained"
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              }}
            >
              Apply
            </Button>
          </DialogActions>
        </Dialog>

        <Menu
          anchorEl={sortAnchorEl}
          open={Boolean(sortAnchorEl)}
          onClose={handleSortClose}
          PaperProps={{
            sx: {
              borderRadius: 2,
              mt: 1,
            },
          }}
        >
          <MenuItem onClick={handleSortClose}>
            <Calendar size={16} style={{ marginRight: 8 }} />
            Date: Newest First
          </MenuItem>
          <MenuItem onClick={handleSortClose}>
            <Calendar size={16} style={{ marginRight: 8 }} />
            Date: Oldest First
          </MenuItem>
          <MenuItem onClick={handleSortClose}>
            <Users size={16} style={{ marginRight: 8 }} />
            Most Attendees
          </MenuItem>
          <MenuItem onClick={handleSortClose}>
            <MapPin size={16} style={{ marginRight: 8 }} />
            Location
          </MenuItem>
        </Menu>
      </motion.div>
    </Container>
  );
};

export default Events;
