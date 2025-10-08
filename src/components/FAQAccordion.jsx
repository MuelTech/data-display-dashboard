import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * FAQAccordion Component
 * Displays TWICE fan questions in collapsible accordion panels
 * Uses Material-UI Accordion component for expandable/collapsible content
 */
function FAQAccordion() {
  // State to control which accordion is expanded
  const [expanded, setExpanded] = useState('panel1');

  /**
   * Handle accordion expansion/collapse
   */
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // FAQ data
  const faqs = [
    {
      id: 'panel1',
      question: 'Who are the members of TWICE?',
      answer:
        'TWICE consists of 9 talented members: Im Nayeon (Leader, Lead Vocalist), Yoo Jeongyeon (Lead Vocalist), Hirai Momo (Main Dancer), Minatozaki Sana (Vocalist), Park Jihyo (Leader, Main Vocalist), Myoui Mina (Main Dancer), Kim Dahyun (Lead Rapper), Son Chaeyoung (Main Rapper), and Chou Tzuyu (Lead Dancer).',
    },
    {
      id: 'panel2',
      question: 'When was TWICE formed?',
      answer:
        'TWICE was formed in 2015 through the South Korean reality competition show "Sixteen" (SIXTEEN). The group debuted on October 20, 2015, with their first single album "The Story Begins". They have since become one of the most successful K-pop girl groups worldwide.',
    },
    {
      id: 'panel3',
      question: 'What makes TWICE special?',
      answer:
        'TWICE is known for their "girl-next-door" concept and incredible versatility. Each member brings unique talents and personalities: from powerful vocals to amazing dance moves, clever raps to charismatic performances. Their music spans various genres including pop, R&B, hip-hop, and more, and they\'re celebrated for their genuine personalities and strong connection with fans.',
    },
    {
      id: 'panel4',
      question: 'What are TWICE\'s most popular songs?',
      answer:
        'Some of TWICE\'s biggest hits include "Fancy", "Feel Special", "What is Love?", "Yes or Yes", "Dance The Night Away", "The Feels", "Alcohol-Free", and "Talk that Talk". They have multiple No. 1 songs on various music charts and have broken numerous records in the K-pop industry.',
    },
  ];

  return (
    <Paper
      elevation={2}
      sx={{
        padding: { xs: 2, sm: 3, lg: 4 },
        borderRadius: { xs: 2, sm: 3 }
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          mb: { xs: 2, sm: 3 },
          fontSize: { xs: '1.1rem', sm: '1.25rem', lg: '1.4rem' },
          fontWeight: 600
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Box>
        {/* Map through FAQ items and create accordion for each */}
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded === faq.id}
            onChange={handleChange(faq.id)}
            elevation={1}
            sx={{
              mb: { xs: 1, sm: 1.5 },
              borderRadius: { xs: 1, sm: 2 },
              '&:before': {
                display: 'none',
              },
            }}
          >
            {/* Accordion header with question */}
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${faq.id}-content`}
              id={`${faq.id}-header`}
              sx={{
                px: { xs: 2, sm: 3 },
                py: { xs: 1.5, sm: 2 }
              }}
            >
              <Typography
                fontWeight={600}
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1rem', lg: '1.1rem' }
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>

            {/* Accordion body with answer */}
            <AccordionDetails
              sx={{
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 2 }
              }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.05rem' },
                  lineHeight: 1.6
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Paper>
  );
}

export default FAQAccordion;

