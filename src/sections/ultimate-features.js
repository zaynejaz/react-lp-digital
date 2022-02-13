/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/1.png';
import icon2 from 'assets/images/features/2.png';
import icon3 from 'assets/images/features/3.png';
import icon4 from 'assets/images/features/4.png';
import icon5 from 'assets/images/features/5.png';
import icon6 from 'assets/images/features/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Get Your Business Online',
    description: `Give your brand a custom domain. Then launch a website to sell products or take appointments with with built-in marketing tools to help you boost sales and find fans.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Market Your Business',
    description: `Send the right messages on all the right channels. Build emails, social ads, landing pages, postcards, and more from one place. And do it all faster than you think.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Reach The Right People',
    description: `Put your people at the heart of your marketing with tools that help you get to know your audience and see who you should be talking to, while respecting their privacy.`,
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'Automate Your Marketing',
    description: `Add a personal touch without the personal effort through automated messages that reach your customers at exactly the right moments. Touch your customers on a personal level.`,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Create Better Content',
    description: `Let your brand shine through with easy-to-use design tools and flexible templates. Our AI-powered Creative Assistant will even generate custom designs for you in seconds.`,
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: 'Take Action with Our Insights',
    description: `With all your data and insights in one place, you can see what’s working best and get recommendations to help you do more of it.`,
  },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="DO IT ALL"
          title="From One Single Platform"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
