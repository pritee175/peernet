import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Building,
  Bookmark,
  Share2,
  Plus,
  Filter,
} from 'lucide-react';

// Mock data for demonstration
const mockJobs = [
  {
    id: 1,
    title: 'Campus Brand Ambassador',
    company: 'TechStart Inc.',
    companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=150&q=80',
    location: 'Remote',
    type: 'Part-time',
    rate: '15-20',
    description: 'Represent our brand on campus, organize events, and grow our student community.',
    requirements: [
      'Strong communication skills',
      'Event planning experience',
      'Active on social media',
      'Min. GPA 3.0',
    ],
    skills: ['Marketing', 'Event Planning', 'Social Media'],
    postedDate: '2025-03-10',
    applicants: 12,
  },
  {
    id: 2,
    title: 'Web Development Tutor',
    company: 'CodeMentor',
    companyLogo: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=150&q=80',
    location: 'Hybrid',
    type: 'Freelance',
    rate: '25-35',
    description: 'Help fellow students learn web development technologies like React, Node.js, and MongoDB.',
    requirements: [
      'Strong knowledge of web technologies',
      'Previous tutoring experience',
      'Good communication skills',
      'Available 10hrs/week',
    ],
    skills: ['React', 'Node.js', 'Teaching'],
    postedDate: '2025-03-11',
    applicants: 8,
  },
  {
    id: 3,
    title: 'Research Assistant',
    company: 'University Lab',
    companyLogo: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=150&q=80',
    location: 'On-campus',
    type: 'Part-time',
    rate: '18-22',
    description: 'Assist in conducting research experiments and data analysis in our AI lab.',
    requirements: [
      'Background in AI/ML',
      'Python programming skills',
      'Research methodology knowledge',
      'Min. GPA 3.5',
    ],
    skills: ['Research', 'Data Analysis', 'Python'],
    postedDate: '2025-03-12',
    applicants: 15,
  },
  {
    id: 4,
    title: 'UI/UX Design Intern',
    company: 'DesignHub',
    companyLogo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=150&q=80',
    location: 'Remote',
    type: 'Internship',
    rate: '20-25',
    description: 'Join our design team to create beautiful and intuitive user interfaces for web and mobile applications.',
    requirements: [
      'Knowledge of design principles',
      'Proficiency in Figma',
      'Understanding of user research',
      'Portfolio required',
    ],
    skills: ['UI Design', 'UX Research', 'Figma'],
    postedDate: '2025-03-13',
    applicants: 20,
  },
  {
    id: 5,
    title: 'Data Science Intern',
    company: 'DataTech Solutions',
    companyLogo: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?auto=format&fit=crop&w=150&q=80',
    location: 'Hybrid',
    type: 'Internship',
    rate: '22-28',
    description: 'Work on real-world data analysis projects using machine learning and statistical methods.',
    requirements: [
      'Strong statistical background',
      'Python/R programming',
      'Experience with ML libraries',
      'Min. GPA 3.3',
    ],
    skills: ['Python', 'Machine Learning', 'Statistics'],
    postedDate: '2025-03-14',
    applicants: 18,
  },
  {
    id: 6,
    title: 'Content Creator',
    company: 'EduTech Media',
    companyLogo: 'https://images.unsplash.com/photo-1497015289639-54688650d173?auto=format&fit=crop&w=150&q=80',
    location: 'Remote',
    type: 'Part-time',
    rate: '16-22',
    description: 'Create engaging educational content for our social media platforms and blog.',
    requirements: [
      'Excellent writing skills',
      'Social media savvy',
      'Basic video editing',
      'Creative mindset',
    ],
    skills: ['Content Writing', 'Social Media', 'Video Editing'],
    postedDate: '2025-03-14',
    applicants: 10,
  }
];

const JobCard = ({ job }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  return (
    <Card
      component={motion.div}
      whileHover={{ y: -4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: isHovered
          ? '0 8px 24px rgba(0,0,0,0.12)'
          : '0 2px 12px rgba(0,0,0,0.08)',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box
              component="img"
              src={job.companyLogo}
              alt={job.company}
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                objectFit: 'cover',
              }}
            />
            <Box>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '1.1rem',
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {job.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Building size={16} />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: 1, fontFamily: 'Inter' }}
                >
                  {job.company}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              size="small"
              onClick={() => setIsSaved(!isSaved)}
              sx={{
                color: isSaved ? theme.palette.primary.main : 'inherit',
                '&:hover': { backgroundColor: theme.palette.primary.light + '20' },
              }}
            >
              <Bookmark size={18} fill={isSaved ? 'currentColor' : 'none'} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                '&:hover': { backgroundColor: theme.palette.primary.light + '20' },
              }}
            >
              <Share2 size={18} />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Chip
            label={job.type}
            size="small"
            color="primary"
            sx={{ borderRadius: 2 }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MapPin size={16} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ ml: 1, fontFamily: 'Inter' }}
            >
              {job.location}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <DollarSign size={16} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ ml: 1, fontFamily: 'Inter' }}
            >
              ${job.rate}/hr
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{ mb: 3, fontFamily: 'Inter', minHeight: '40px' }}
        >
          {job.description}
        </Typography>

        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ fontFamily: 'Poppins', color: theme.palette.text.primary }}
        >
          Requirements:
        </Typography>
        <Box sx={{ mb: 3 }}>
          {job.requirements.map((req, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
            >
              <Box
                sx={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  bgcolor: theme.palette.primary.main,
                  mr: 1,
                }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: 'Inter' }}
              >
                {req}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {job.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              size="small"
              variant="outlined"
              sx={{ borderRadius: 2 }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 'auto',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Clock size={16} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ ml: 1, fontFamily: 'Inter' }}
            >
              Posted {new Date(job.postedDate).toLocaleDateString()} • {job.applicants} applicants
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              textTransform: 'none',
              fontFamily: 'Inter',
              px: 3,
            }}
          >
            Apply Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const Jobs = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('all');
  const [location, setLocation] = useState('all');

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
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
          Student Jobs & Gigs
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontFamily: 'Inter' }}
        >
          Find part-time jobs, freelance gigs, and internships suited for students
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            placeholder="Search jobs by title, company, or skills"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={20} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                height: 56,
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel sx={{ fontFamily: 'Inter' }}>Job Type</InputLabel>
            <Select
              value={jobType}
              label="Job Type"
              onChange={(e) => setJobType(e.target.value)}
              sx={{
                borderRadius: 2,
                height: 56,
                fontFamily: 'Inter',
              }}
            >
              <MenuItem value="all" sx={{ fontFamily: 'Inter' }}>All Types</MenuItem>
              <MenuItem value="part-time" sx={{ fontFamily: 'Inter' }}>Part-time</MenuItem>
              <MenuItem value="freelance" sx={{ fontFamily: 'Inter' }}>Freelance</MenuItem>
              <MenuItem value="internship" sx={{ fontFamily: 'Inter' }}>Internship</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel sx={{ fontFamily: 'Inter' }}>Location</InputLabel>
            <Select
              value={location}
              label="Location"
              onChange={(e) => setLocation(e.target.value)}
              sx={{
                borderRadius: 2,
                height: 56,
                fontFamily: 'Inter',
              }}
            >
              <MenuItem value="all" sx={{ fontFamily: 'Inter' }}>All Locations</MenuItem>
              <MenuItem value="remote" sx={{ fontFamily: 'Inter' }}>Remote</MenuItem>
              <MenuItem value="on-campus" sx={{ fontFamily: 'Inter' }}>On Campus</MenuItem>
              <MenuItem value="hybrid" sx={{ fontFamily: 'Inter' }}>Hybrid</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontFamily: 'Poppins', color: theme.palette.text.primary }}
        >
          {mockJobs.length} Jobs Available
        </Typography>
        <Button
          variant="contained"
          startIcon={<Plus size={18} />}
          sx={{
            borderRadius: 2,
            height: 48,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            textTransform: 'none',
            fontFamily: 'Inter',
          }}
        >
          Post a Job
        </Button>
      </Box>

      <Grid container spacing={3}>
        {mockJobs.map((job) => (
          <Grid item xs={12} md={6} lg={4} key={job.id}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Jobs;
