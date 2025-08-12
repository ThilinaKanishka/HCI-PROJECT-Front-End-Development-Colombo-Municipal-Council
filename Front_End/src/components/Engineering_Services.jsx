import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Engineering,
  Construction,
  Water,
  ExpandMore,
  DirectionsCar,
  Home,
  Public,
  ContactPhone,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Road Maintenance",
    description:
      "Comprehensive road construction and maintenance services across Colombo",
    icon: <DirectionsCar fontSize="large" />,
    color: "#4CAF50",
  },
  {
    title: "Building Construction",
    description: "Municipal building projects and maintenance services",
    icon: <Home fontSize="large" />,
    color: "#2196F3",
  },
  {
    title: "Drainage Systems",
    description: "Design and maintenance of city drainage and sewerage systems",
    icon: <Water fontSize="large" />,
    color: "#00BCD4",
  },
  {
    title: "Urban Planning",
    description: "City development projects and urban planning initiatives",
    icon: <Public fontSize="large" />,
    color: "#FF9800",
  },
];

const faqs = [
  {
    question: "How do I report a road defect?",
    answer:
      "You can report road defects through our online portal, by calling our hotline, or by visiting the Municipal Workshop office during working hours.",
  },
  {
    question: "What are the working hours of the Municipal Workshop?",
    answer:
      "Our office is open from 8:30 AM to 4:15 PM, Monday to Friday, excluding public holidays.",
  },
  {
    question: "How can I apply for a building permit?",
    answer:
      "Building permit applications can be submitted at our office with the required documents. You can download the application form from our website.",
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

function EngineeringServices() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          color: "white",
          py: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: isMobile ? "2.5rem" : "3.5rem",
                  }}
                >
                  Engineering Services
                </Typography>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Colombo Municipal Council
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Providing essential infrastructure services to maintain and
                  develop Colombo's urban landscape
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ContactPhone />}
                  onClick={() => navigate("/contact")}
                  sx={{
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Contact Us
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Engineering
                    sx={{
                      fontSize: 300,
                      opacity: 0.2,
                      position: "absolute",
                      right: -50,
                      top: 50,
                    }}
                  />
                </motion.div>
                <Box
                  component="img"
                  src="/images/engineering-hero.png"
                  alt="Engineering Services"
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    boxShadow: 6,
                    position: "relative",
                  }}
                />
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div initial="hidden" animate="visible" variants={slideUp}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 6,
              color: theme.palette.primary.main,
            }}
          >
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: "center", py: 4 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          backgroundColor: `${service.color}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 20px",
                          color: service.color,
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* About Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="visible" variants={slideUp}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/images/municipal-workshop.jpg"
                  alt="Municipal Workshop"
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    boxShadow: 6,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  About Our Workshop
                </Typography>
                <Typography variant="body1" paragraph>
                  The Colombo Municipal Council Engineering Services Department
                  operates a fully-equipped municipal workshop that handles all
                  maintenance and construction needs for the city's
                  infrastructure.
                </Typography>
                <Typography variant="body1" paragraph>
                  With over 100 skilled technicians and engineers, we maintain
                  roads, buildings, drainage systems, and other critical urban
                  infrastructure to ensure Colombo remains a livable and vibrant
                  city.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                    mt: 2,
                  }}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <motion.div initial="hidden" animate="visible" variants={slideUp}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 6,
              color: theme.palette.primary.main,
            }}
          >
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: "8px !important",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </motion.div>
      </Container>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: "#2a5298", color: "white", py: 8 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  Need Engineering Services?
                </Typography>
                <Typography variant="body1">
                  Contact our team for all municipal engineering needs. We're
                  here to serve the Colombo community.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ textAlign: isMobile ? "left" : "right" }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ContactPhone />}
                  sx={{
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                  }}
                >
                  Contact Now
                </Button>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

export default EngineeringServices;
