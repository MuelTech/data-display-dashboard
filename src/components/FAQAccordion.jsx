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
 * Displays frequently asked questions in collapsible accordion panels
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
      question: 'What is Material-UI?',
      answer:
        'Material-UI (MUI) is a popular React UI framework that implements Google\'s Material Design. It provides a comprehensive collection of pre-built components that are ready for use in production applications. MUI helps developers build beautiful, accessible, and responsive user interfaces quickly and efficiently.',
    },
    {
      id: 'panel2',
      question: 'How do I install Material-UI?',
      answer:
        'You can install Material-UI using npm or yarn. For npm, run: "npm install @mui/material @emotion/react @emotion/styled". For yarn, run: "yarn add @mui/material @emotion/react @emotion/styled". Additionally, you may want to install Material Icons: "npm install @mui/icons-material".',
    },
    {
      id: 'panel3',
      question: 'What are the benefits of using MUI components?',
      answer:
        'MUI components offer several benefits: (1) Consistent design following Material Design guidelines, (2) Built-in accessibility features, (3) Responsive by default, (4) Highly customizable through theming, (5) Comprehensive documentation and community support, (6) TypeScript support, and (7) Regular updates and maintenance.',
    },
    {
      id: 'panel4',
      question: 'Can I customize MUI components?',
      answer:
        'Yes! MUI components are highly customizable. You can use the sx prop for inline styling, create custom themes using createTheme(), use styled() API for creating custom components, or override component styles globally. The theming system allows you to define custom colors, typography, spacing, and more.',
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

