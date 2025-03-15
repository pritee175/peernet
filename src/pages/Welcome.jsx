import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  Grid,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Calendar, Users, ShoppingBag, Briefcase } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card
    component={motion.div}
    whileHover={{ y: -5 }}
    sx={{
      p: 3,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
    <Icon size={32} style={{ marginBottom: '1rem' }} />
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Card>
);

const features = [
  {
    icon: Calendar,
    title: 'Find Events',
    description: 'Discover and join campus events, workshops, and meetups.',
  },
  {
    icon: Users,
    title: 'Network Beyond Your Campus',
    description: 'Connect with students from other universities and expand your network.',
  },
  {
    icon: ShoppingBag,
    title: 'Student Marketplace',
    description: 'Buy and sell books, electronics, and more within your campus community.',
  },
  {
    icon: Briefcase,
    title: 'Freelance Gigs',
    description: 'Find part-time opportunities and freelance work suited for students.',
  },
];

const Welcome = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 6,
        }}
      >
        <motion.img
          src="/images/peernet-logo-dark.png"
          alt="PeerNet Logo"
          style={{ width: 240, height: 240, objectFit: 'contain', marginBottom: 24 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
            textAlign: 'center',
          }}
        >
          PeerNet
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ color: 'text.secondary', textAlign: 'center' }}
        >
          Connect. Learn. Grow.
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
          Your gateway to a vibrant university community
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/home')}
          sx={{
            minWidth: 200,
            mb: 8,
          }}
        >
          Get Started
        </Button>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <FeatureCard {...feature} />
          </Grid>
        ))}
      </Grid>

      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        sx={{
          mt: 8,
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Join thousands of students already connected on PeerNet
        </Typography>
      </Box>
    </Container>
  );
};

export default Welcome;
