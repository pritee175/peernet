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
  TextField,
  Typography,
  useTheme,
  alpha,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  Slider,
  FormControl,
  FormGroup,
  FormControlLabel,
  Tooltip,
  Zoom,
  Avatar,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Heart,
  MessageCircle,
  Share2,
  Plus,
  DollarSign,
  MapPin,
  Star,
  Clock,
  Tag,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Mock data for demonstration
const mockItems = [
  {
    id: 1,
    title: 'Data Structures & Algorithms Textbook',
    price: 45,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    condition: 'Like New',
    category: 'Books',
    seller: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      rating: 4.8,
    },
    location: 'Engineering Building',
    description: 'Perfect condition, barely used. Includes practice problems and solutions.',
  },
  {
    id: 3,
    title: 'Study Desk & Chair Set',
    price: 120,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    condition: 'Excellent',
    category: 'Furniture',
    seller: {
      name: 'Emily Wong',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating: 4.9,
    },
    location: 'Off Campus',
    description: 'Ergonomic chair and spacious desk, perfect for studying.',
  },
  {
    id: 4,
    title: 'MacBook Pro (2023)',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    condition: 'Excellent',
    category: 'Electronics',
    seller: {
      name: 'Alex Turner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 4.7,
    },
    location: 'Library',
    description: 'M2 chip, 16GB RAM, 512GB SSD. Includes charger and case.',
  },
  {
    id: 5,
    title: 'Engineering Drawing Kit',
    price: 35,
    image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=800&q=80',
    condition: 'Good',
    category: 'Tools',
    seller: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      rating: 4.6,
    },
    location: 'Engineering Building',
    description: 'Complete set with compass, rulers, and protractors.',
  },
  {
    id: 6,
    title: 'Chemistry Lab Coat',
    price: 25,
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80',
    condition: 'Like New',
    category: 'Lab Equipment',
    seller: {
      name: 'Lisa Chen',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      rating: 4.8,
    },
    location: 'Science Building',
    description: 'White lab coat, size M, worn only twice.',
  }
];

const ItemCard = ({ item }) => {
  const theme = useTheme();
  const [isLiked, setIsLiked] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  return (
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
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
          '&:hover': {
            boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.15)}`,
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="200"
            image={item.image}
            alt={item.title}
            sx={{
              objectFit: 'cover',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
              opacity: 0,
              transition: 'opacity 0.3s ease-in-out',
              '&:hover': {
                opacity: 1,
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              display: 'flex',
              gap: 1,
            }}
          >
            <Tooltip title="Like" TransitionComponent={Zoom}>
              <IconButton
                onClick={handleLike}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.9)',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,1)',
                  },
                }}
              >
                <Heart
                  size={20}
                  fill={isLiked ? theme.palette.error.main : 'none'}
                  color={isLiked ? theme.palette.error.main : theme.palette.text.primary}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share" TransitionComponent={Zoom}>
              <IconButton
                sx={{
                  bgcolor: 'rgba(255,255,255,0.9)',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,1)',
                  },
                }}
              >
                <Share2 size={20} />
              </IconButton>
            </Tooltip>
          </Box>
          {item.condition === 'Like New' && (
            <Chip
              icon={<Sparkles size={16} />}
              label="Like New"
              sx={{
                position: 'absolute',
                top: 12,
                left: 12,
                bgcolor: 'rgba(255,255,255,0.9)',
                '& .MuiChip-label': {
                  color: theme.palette.primary.main,
                },
              }}
            />
          )}
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Stack spacing={2}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '1.1rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {item.title}
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                }}
              >
                ${item.price}
              </Typography>
              <Chip
                size="small"
                label={item.condition}
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                }}
              />
            </Stack>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                fontFamily: 'Inter',
              }}
            >
              {item.description}
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar
                  src={item.seller.avatar}
                  sx={{ width: 24, height: 24 }}
                />
                <Typography variant="body2" sx={{ fontFamily: 'Inter' }}>
                  {item.seller.name}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Star size={16} color={theme.palette.warning.main} fill={theme.palette.warning.main} />
                <Typography variant="body2" sx={{ fontFamily: 'Inter' }}>
                  {item.seller.rating}
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<MessageCircle size={20} />}
                onClick={() => setShowContact(true)}
                sx={{
                  height: 40,
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
                Contact Seller
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Dialog
        open={showContact}
        onClose={() => setShowContact(false)}
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: 2,
          },
        }}
      >
        <DialogTitle sx={{ fontFamily: 'Poppins', pb: 1 }}>
          Contact {item.seller.name}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Write your message here..."
            sx={{
              mt: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                fontFamily: 'Inter',
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={() => setShowContact(false)}
            sx={{
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
            sx={{
              borderRadius: 2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              color: '#fff',
              '&:hover': {
                opacity: 0.9,
              },
            }}
          >
            Send Message
          </Button>
        </DialogActions>
      </Dialog>
    </motion.div>
  );
};

const Marketplace = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);

  const categories = ['Books', 'Electronics', 'Furniture', 'Tools', 'Lab Equipment'];
  const conditions = ['Like New', 'Excellent', 'Good', 'Fair'];

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const filteredItems = useMemo(() => {
    return mockItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
      const matchesCondition = selectedConditions.length === 0 || selectedConditions.includes(item.condition);
      return matchesSearch && matchesPrice && matchesCategory && matchesCondition;
    });
  }, [searchQuery, priceRange, selectedCategories, selectedConditions]);

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
            University Marketplace
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Buy and sell items within your university community
          </Typography>
        </Box>

        <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            placeholder="Search items..."
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
            onClick={() => setFilterOpen(true)}
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
            {filteredItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>

        <Dialog
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
          PaperProps={{
            sx: {
              borderRadius: 4,
              p: 2,
              minWidth: 300,
            },
          }}
        >
          <DialogTitle sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
            Filter Items
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={2000}
              sx={{ mb: 4 }}
            />

            <Typography gutterBottom>Categories</Typography>
            <FormGroup sx={{ mb: 3 }}>
              {categories.map((category) => (
                <FormControlLabel
                  key={category}
                  control={
                    <Checkbox
                      checked={selectedCategories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCategories([...selectedCategories, category]);
                        } else {
                          setSelectedCategories(selectedCategories.filter(c => c !== category));
                        }
                      }}
                    />
                  }
                  label={category}
                />
              ))}
            </FormGroup>

            <Typography gutterBottom>Condition</Typography>
            <FormGroup>
              {conditions.map((condition) => (
                <FormControlLabel
                  key={condition}
                  control={
                    <Checkbox
                      checked={selectedConditions.includes(condition)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedConditions([...selectedConditions, condition]);
                        } else {
                          setSelectedConditions(selectedConditions.filter(c => c !== condition));
                        }
                      }}
                    />
                  }
                  label={condition}
                />
              ))}
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setFilterOpen(false)}>Close</Button>
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
            <DollarSign size={16} style={{ marginRight: 8 }} />
            Price: Low to High
          </MenuItem>
          <MenuItem onClick={handleSortClose}>
            <DollarSign size={16} style={{ marginRight: 8 }} />
            Price: High to Low
          </MenuItem>
          <MenuItem onClick={handleSortClose}>
            <Star size={16} style={{ marginRight: 8 }} />
            Best Rated Sellers
          </MenuItem>
          <MenuItem onClick={handleSortClose}>
            <Clock size={16} style={{ marginRight: 8 }} />
            Newest First
          </MenuItem>
        </Menu>
      </motion.div>
    </Container>
  );
};

export default Marketplace;
