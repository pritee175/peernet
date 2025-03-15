import React, { useState } from 'react';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Rating,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  Edit2,
  Globe,
  Github,
  Linkedin,
  Link as LinkIcon,
  MapPin,
  School,
  Share,
  Star,
  Trophy,
  Users,
} from 'lucide-react';
import BackToHome from '../components/BackToHome';

// Mock data for demonstration
const mockProgress = [
  { skill: 'React', level: 85, projects: 12 },
  { skill: 'Node.js', level: 75, projects: 8 },
  { skill: 'Python', level: 90, projects: 15 },
  { skill: 'Machine Learning', level: 65, projects: 5 },
  { skill: 'UI/UX Design', level: 80, projects: 10 },
];

const mockBadges = [
  { id: 1, title: 'Early Adopter', icon: '', description: 'One of the first 100 users' },
  { id: 2, title: 'Project Master', icon: '', description: 'Completed 10+ projects' },
  { id: 3, title: 'Team Player', icon: '', description: 'Joined 5+ study groups' },
  { id: 4, title: 'Knowledge Sharer', icon: '', description: 'Helped 20+ students' },
];

const mockProfile = {
  name: 'Alex Kumar',
  avatar: 'https://source.unsplash.com/random/150x150/?portrait',
  bio: 'Computer Science student passionate about AI and Web Development. Always looking to learn and collaborate on innovative projects.',
  university: 'Tech University',
  year: '3rd Year',
  location: 'San Francisco, CA',
  skills: ['React', 'Node.js', 'Python', 'Machine Learning', 'UI/UX Design'],
  achievements: [
    'Hackathon Winner 2024',
    "Dean's List 2023",
    'Best Project Award',
  ],
  social: {
    github: 'github.com/alexk',
    linkedin: 'linkedin.com/in/alexk',
    portfolio: 'alexk.dev',
  },
};

const mockActivities = [
  {
    type: 'event',
    title: 'TechCrunch Hackathon 2025',
    date: '2025-04-15',
    status: 'Registered',
    description: 'Join us for a 48-hour hackathon focused on AI and Web3 technologies.',
    tags: ['AI/ML', 'Blockchain', 'Web3'],
  },
  {
    type: 'study_group',
    title: 'Machine Learning Study Circle',
    date: '2025-03-20',
    status: 'Active',
    description: 'Weekly meetups to discuss ML concepts and work on projects.',
    tags: ['Machine Learning', 'Python', 'Data Science'],
  },
  {
    type: 'marketplace',
    title: 'Data Structures Textbook',
    date: '2025-03-10',
    status: 'Listed',
    description: 'Like new condition, perfect for CS students.',
    price: '₹499',
  },
];

const ProgressCard = ({ progress }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 4,
        background: theme.palette.background.paper,
        backdropFilter: 'blur(8px)',
        boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 3,
        }}
      >
        Skills & Progress
      </Typography>
      <Stack spacing={3}>
        {progress.map((item, index) => (
          <Box key={index}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body1" fontWeight={500}>
                {item.skill}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.projects} projects
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={item.level}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                '& .MuiLinearProgress-bar': {
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                },
              }}
            />
          </Box>
        ))}
      </Stack>
    </Card>
  );
};

const BadgesCard = ({ badges }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 4,
        background: theme.palette.background.paper,
        backdropFilter: 'blur(8px)',
        boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 3,
        }}
      >
        Badges & Achievements
      </Typography>
      <Grid container spacing={2}>
        {badges.map((badge) => (
          <Grid item xs={6} key={badge.id}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: alpha(theme.palette.primary.main, 0.05),
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" sx={{ mb: 1 }}>
                {badge.icon}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {badge.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

const ProfileHeader = ({ profile }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 4,
        background: theme.palette.background.paper,
        backdropFilter: 'blur(8px)',
        boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Avatar
          src={profile.avatar}
          sx={{ width: 80, height: 80, border: `2px solid ${theme.palette.primary.main}` }}
        />
        <Box>
          <Typography variant="h5" fontFamily="Poppins" fontWeight={600}>
            {profile.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.university} • {profile.year}
          </Typography>
        </Box>
      </Box>

      <Typography variant="body1" sx={{ mb: 3 }}>
        {profile.bio}
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
        {profile.skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            size="small"
            sx={{
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              borderRadius: 2,
            }}
          />
        ))}
      </Stack>

      <Stack spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <School size={16} />
          <Typography variant="body2">{profile.university}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MapPin size={16} />
          <Typography variant="body2">{profile.location}</Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Stack direction="row" spacing={2}>
        <IconButton
          component="a"
          href={`https://${profile.social.github}`}
          target="_blank"
          sx={{ color: theme.palette.text.secondary }}
        >
          <Github size={20} />
        </IconButton>
        <IconButton
          component="a"
          href={`https://${profile.social.linkedin}`}
          target="_blank"
          sx={{ color: theme.palette.text.secondary }}
        >
          <Linkedin size={20} />
        </IconButton>
        <IconButton
          component="a"
          href={`https://${profile.social.portfolio}`}
          target="_blank"
          sx={{ color: theme.palette.text.secondary }}
        >
          <Globe size={20} />
        </IconButton>
      </Stack>
    </Card>
  );
};

const ActivityCard = ({ activity }) => {
  const theme = useTheme();

  const getIcon = () => {
    switch (activity.type) {
      case 'event':
        return <Calendar size={20} />;
      case 'study_group':
        return <Users size={20} />;
      case 'marketplace':
        return <Briefcase size={20} />;
      default:
        return <Star size={20} />;
    }
  };

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 4,
        background: theme.palette.background.paper,
        backdropFilter: 'blur(8px)',
        boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              p: 1,
              borderRadius: 2,
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
            }}
          >
            {getIcon()}
          </Box>
          <Box>
            <Typography variant="h6" fontFamily="Poppins" fontWeight={600}>
              {activity.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(activity.date).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
        <Chip
          label={activity.status}
          size="small"
          sx={{
            bgcolor: alpha(theme.palette.success.main, 0.1),
            color: theme.palette.success.main,
            borderRadius: 2,
          }}
        />
      </Box>

      <Typography variant="body2" sx={{ mb: 2 }}>
        {activity.description}
      </Typography>

      {activity.tags && (
        <Stack direction="row" spacing={1}>
          {activity.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                borderRadius: 2,
              }}
            />
          ))}
        </Stack>
      )}

      {activity.price && (
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            fontFamily: 'Poppins',
            fontWeight: 600,
            color: theme.palette.success.main,
          }}
        >
          {activity.price}
        </Typography>
      )}
    </Card>
  );
};

const Profile = () => {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="xl">
      <BackToHome />

      <Box sx={{ mt: 8, mb: 6 }}>
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
          My Profile
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your profile, track your progress, and showcase your achievements
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <ProfileHeader profile={mockProfile} />
            <ProgressCard progress={mockProgress} />
            <BadgesCard badges={mockBadges} />
          </Stack>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card
            sx={{
              borderRadius: 4,
              background: theme.palette.background.paper,
              backdropFilter: 'blur(8px)',
              boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
            }}
          >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={currentTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  px: 2,
                  '& .MuiTab-root': {
                    minHeight: 64,
                    fontFamily: 'Inter',
                    textTransform: 'none',
                  },
                }}
              >
                <Tab
                  label="Activity"
                  icon={<Calendar size={20} />}
                  iconPosition="start"
                />
                <Tab
                  label="Study Groups"
                  icon={<Users size={20} />}
                  iconPosition="start"
                />
                <Tab
                  label="Marketplace"
                  icon={<Briefcase size={20} />}
                  iconPosition="start"
                />
                <Tab
                  label="Achievements"
                  icon={<Trophy size={20} />}
                  iconPosition="start"
                />
              </Tabs>
            </Box>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Box sx={{ p: 3 }}>
                  {currentTab === 0 && (
                    <Grid container spacing={3}>
                      {mockActivities.map((activity, index) => (
                        <Grid item xs={12} key={index}>
                          <ActivityCard activity={activity} />
                        </Grid>
                      ))}
                    </Grid>
                  )}
                  {currentTab === 1 && (
                    <Grid container spacing={3}>
                      {mockActivities
                        .filter(activity => activity.type === 'study_group')
                        .map((activity, index) => (
                          <Grid item xs={12} md={6} key={index}>
                            <ActivityCard activity={activity} />
                          </Grid>
                        ))}
                    </Grid>
                  )}
                  {currentTab === 2 && (
                    <Grid container spacing={3}>
                      {mockActivities
                        .filter(activity => activity.type === 'marketplace')
                        .map((activity, index) => (
                          <Grid item xs={12} md={6} key={index}>
                            <ActivityCard activity={activity} />
                          </Grid>
                        ))}
                    </Grid>
                  )}
                  {currentTab === 3 && (
                    <Grid container spacing={3}>
                      {mockBadges.map((badge, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <Card
                            component={motion.div}
                            whileHover={{ y: -4 }}
                            sx={{
                              p: 3,
                              height: '100%',
                              borderRadius: 4,
                              background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.paper, 0.8)})`,
                              backdropFilter: 'blur(8px)',
                              boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
                              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              textAlign: 'center',
                            }}
                          >
                            <Typography variant="h2" sx={{ mb: 2 }}>
                              {badge.icon}
                            </Typography>
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
                              {badge.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {badge.description}
                            </Typography>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </Box>
              </motion.div>
            </AnimatePresence>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
