import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  useTheme,
  alpha,
  Card,
  CardContent,
  Stack,
  Avatar,
  Chip,
  IconButton,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Sparkles,
  FileText,
  Briefcase,
  Brain,
  Crown,
  CheckCircle,
  Search,
  Bell,
  BookOpen,
  MessageCircle,
  Share2,
  ThumbsUp,
  Tag,
  Filter,
} from 'lucide-react';

// Import mock data from our memories
const upcomingEvents = [
  {
    id: 1,
    title: 'Hackit Hackathon',
    date: '2025-04-02',
    location: 'Cummins College of Engineering, Pune',
    tags: ['AI/ML', 'Blockchain', 'IoT']
  },
  {
    id: 2,
    title: 'Web3 Development Workshop',
    date: '2025-04-05',
    location: 'Virtual Event',
    tags: ['Ethereum', 'Smart Contracts']
  },
  {
    id: 3,
    title: 'AI Innovation Summit',
    date: '2025-04-08',
    location: 'COEP Technological University',
    tags: ['AI', 'ML', 'Deep Learning']
  }
];

const premiumFeatures = [
  {
    icon: Brain,
    title: 'AI-Powered Personalized Suggestions',
    description: 'Get tailored recommendations for events, study groups, and opportunities based on your interests and goals.',
  },
  {
    icon: FileText,
    title: 'Professional Resume Builder',
    description: 'Create stunning resumes with our AI-powered builder. Stand out with modern templates and smart content suggestions.',
  },
  {
    icon: Briefcase,
    title: 'Smart Job Finder',
    description: 'Discover job opportunities that match your skills and aspirations with our intelligent job matching system.',
  },
  {
    icon: Sparkles,
    title: 'Premium Study Resources',
    description: 'Access exclusive study materials, practice tests, and expert-curated content.',
  },
];

const trendingTopics = [
  { id: 1, name: 'AI/ML', count: 245 },
  { id: 2, name: 'Web Development', count: 189 },
  { id: 3, name: 'Blockchain', count: 156 },
  { id: 4, name: 'Data Science', count: 134 },
  { id: 5, name: 'Cloud Computing', count: 98 },
];

const recentPosts = [
  {
    id: 1,
    user: {
      name: 'Priya Sharma',
      avatar: '/avatars/priya.jpg',
      role: 'Computer Science Student',
    },
    content: 'Just completed my first machine learning project using TensorFlow! 🚀 Check out my GitHub repo for the code.',
    likes: 42,
    comments: 8,
    shares: 3,
    tags: ['MachineLearning', 'TensorFlow', 'AI'],
    timeAgo: '2h ago',
  },
  {
    id: 2,
    user: {
      name: 'Rahul Patel',
      avatar: '/avatars/rahul.jpg',
      role: 'Full Stack Developer',
    },
    content: 'Hosting a React.js workshop this weekend! Learn modern web development practices and build a real-world application.',
    likes: 35,
    comments: 12,
    shares: 7,
    tags: ['ReactJS', 'WebDev', 'Workshop'],
    timeAgo: '4h ago',
  },
];

const EventCard = ({ event }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: 4,
          bgcolor: theme.palette.background.paper,
          boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        }}
      >
        <Typography variant="h6" gutterBottom fontFamily="Poppins" fontWeight={600}>
          {event.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Calendar size={16} />
          <Typography variant="body2" color="text.secondary">
            {new Date(event.date).toLocaleDateString()}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <MapPin size={16} />
          <Typography variant="body2" color="text.secondary">
            {event.location}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {event.tags.map((tag, index) => (
            <Box
              key={index}
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                bgcolor: `${theme.palette.primary.main}15`,
                color: theme.palette.primary.main,
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

const StatCard = ({ icon: Icon, title, value, color }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 4,
        bgcolor: theme.palette.background.paper,
        boxShadow: `0 4px 20px ${alpha(color, 0.15)}`,
        border: `1px solid ${alpha(color, 0.1)}`,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Box
          sx={{
            p: 1,
            borderRadius: 2,
            bgcolor: `${color}15`,
            color: color,
          }}
        >
          <Icon size={24} />
        </Box>
        <Typography variant="h6" fontFamily="Poppins" fontWeight={600}>
          {value}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
    </Box>
  );
};

const PremiumFeatureCard = ({ icon: Icon, title, description }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        sx={{
          height: '100%',
          borderRadius: 4,
          background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.paper, 0.8)})`,
          backdropFilter: 'blur(8px)',
          boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        }}
      >
        <CardContent>
          <Stack spacing={2}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: 'white',
              }}
            >
              <Icon size={24} />
            </Box>
            <Typography variant="h6" fontFamily="Poppins" fontWeight={600}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeedPost = ({ post }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card sx={{
        borderRadius: 4,
        mb: 2,
        background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.paper, 0.8)})`,
        backdropFilter: 'blur(8px)',
        boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar src={post.user.avatar} sx={{ width: 48, height: 48 }} />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle1" fontWeight={600} fontFamily="Poppins">
                {post.user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.user.role} • {post.timeAgo}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {post.content}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {post.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                icon={<Tag size={14} />}
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  color: 'white',
                  '& .MuiChip-icon': { color: 'white' },
                }}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                <ThumbsUp size={20} /> <Typography sx={{ ml: 1 }}>{post.likes}</Typography>
              </IconButton>
              <IconButton size="small" sx={{ color: theme.palette.secondary.main }}>
                <MessageCircle size={20} /> <Typography sx={{ ml: 1 }}>{post.comments}</Typography>
              </IconButton>
              <IconButton size="small" sx={{ color: theme.palette.success.main }}>
                <Share2 size={20} /> <Typography sx={{ ml: 1 }}>{post.shares}</Typography>
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Home = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleFilterClick = () => {
    // Add filter click logic here
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ 
        textAlign: 'center', 
        mb: 6,
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        borderRadius: 4,
        p: 6,
        color: 'white',
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <motion.img
              src="/images/peernet-logo.jpg"
              alt="PeerNet Logo"
              style={{ width: 180, height: 180, objectFit: 'contain' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Box>
          <Typography variant="h3" fontFamily="Poppins" fontWeight={700} gutterBottom>
            PeerNet
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Your gateway to academic excellence and professional growth
          </Typography>
          <Box sx={{ mb: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <TextField
              fullWidth
              placeholder="Search events, study groups, or marketplace items..."
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
                maxWidth: 600,
                '& .MuiOutlinedInput-root': {
                  height: 48,
                  borderRadius: 2,
                  bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.9) : 'white',
                  color: theme.palette.text.primary,
                  '&:hover': {
                    '& fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                  '& .MuiInputAdornment-root': {
                    color: theme.palette.text.secondary,
                  },
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.main, 0.2) : alpha(theme.palette.primary.main, 0.1),
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleFilterClick}
              sx={{
                height: 48,
                minWidth: 48,
                borderRadius: 2,
                background: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.9) : 'white',
                color: theme.palette.primary.main,
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.1),
                },
              }}
            >
              <Filter size={20} />
            </Button>
          </Box>
        </motion.div>
      </Box>

      {/* Stats Section */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={Users}
            title="Active Users"
            value="5,234"
            color={theme.palette.primary.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={Calendar}
            title="Events This Month"
            value="48"
            color={theme.palette.secondary.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={BookOpen}
            title="Study Groups"
            value="156"
            color={theme.palette.success.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={TrendingUp}
            title="Job Opportunities"
            value="89"
            color={theme.palette.info.main}
          />
        </Grid>
      </Grid>

      {/* Main Content Tabs */}
      <Box sx={{ mb: 4 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '1rem',
              textTransform: 'none',
              minHeight: 56,
            }
          }}
        >
          <Tab label="Feed" icon={<MessageCircle size={20} />} iconPosition="start" />
          <Tab label="Events" icon={<Calendar size={20} />} iconPosition="start" />
          <Tab label="Trending" icon={<TrendingUp size={20} />} iconPosition="start" />
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <AnimatePresence mode="wait">
            {tabValue === 0 && (
              <motion.div
                key="feed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {recentPosts.map((post) => (
                  <FeedPost key={post.id} post={post} />
                ))}
              </motion.div>
            )}
            {tabValue === 1 && (
              <motion.div
                key="events"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Grid container spacing={3}>
                  {upcomingEvents.map((event) => (
                    <Grid item xs={12} sm={6} key={event.id}>
                      <EventCard event={event} />
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            )}
            {tabValue === 2 && (
              <motion.div
                key="trending"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Box sx={{ bgcolor: theme.palette.background.paper, borderRadius: 4, p: 3 }}>
                  <Typography variant="h6" fontFamily="Poppins" gutterBottom>
                    Trending Topics
                  </Typography>
                  {trendingTopics.map((topic, index) => (
                    <Box
                      key={topic.id}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 2,
                        borderBottom: index < trendingTopics.length - 1 ? `1px solid ${theme.palette.divider}` : 'none',
                      }}
                    >
                      <Typography variant="body1" fontWeight={500}>
                        #{topic.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {topic.count} discussions
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            {/* Premium Features Card */}
            <Card sx={{
              borderRadius: 4,
              background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${alpha(theme.palette.background.paper, 0.8)})`,
              backdropFilter: 'blur(8px)',
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Crown size={24} color={theme.palette.warning.main} />
                  <Typography variant="h6" fontFamily="Poppins" fontWeight={600}>
                    Unlock Premium
                  </Typography>
                </Box>
                <Stack spacing={2}>
                  {premiumFeatures.slice(0, 3).map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckCircle size={20} color={theme.palette.success.main} />
                      <Typography variant="body2">{feature.title}</Typography>
                    </Box>
                  ))}
                </Stack>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    height: 48,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                >
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
