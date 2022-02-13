/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';

const data = [
  {
    id: 1,
    title: `01.`+ ` ` +  `What are Tags?`,
    contents: (
      <div>
        Tags are labels you create to help organize your contacts. Tagging lets you bring your own contact structure into La Digital and label contacts based on data you know about them. Tags are highly customizable, so you can create and assign them as you see fit.
      </div>
    ),
  },
  {
    id: 2,
    title: `02.`+ ` ` +  `What is an A/B Tes?`,
    contents: (
      <div>
       Creating 2 versions of a digital asset to see which one users respond to better. Examples of assets include a landing page, display ad, marketing email, and social post. In an A/B test, half of your audience automatically receives “version A” and half receives “version B.” The performance of each version is based on conversion rate goals such as the percentage of people who click on a link, complete a form, or make a purchase.
      </div>
    ),
  },
  {
    id: 3,
    title: `03.`+ ` ` +  `What is CAC?`,
    contents: (
      <div>
        Customer acquisition cost (CAC) is the amount of money a company spends to get a new customer. It helps measure the return on investment of efforts to grow their clientele. CAC is calculated by adding the costs associated with converting prospects into customers (marketing, advertising, sales personnel, and more) and dividing that amount by the number of customers acquired. 
      </div>
    ),
  },
  {
    id: 4,
    title: `04.`+ ` ` +  `What is DMARC?`,
    contents: (
      <div>
        Domain-based Message Authentication, Reporting & Conformance (DMARC) is a widely recognized email protocol that helps people and businesses protect their email addresses and domains from being misused by third parties. It helps identify that an email you send is from the real you. This method of email authentication protects both senders and recipients from activities like phishing, spamming, and spoofing. 
      </div>
    ),
  },
  {
    id: 5,
    title: `05.`+ ` ` +  `What is Marketing Automation?`,
    contents: (
      <div>
        Marketing automation helps you stay connected with your audience (and find more people just like them), so you can eliminate repetitive tasks and focus on other parts of your business. Target people based on behavior, preferences, and previous sales—and use this intel to do things like welcome new subscribers, reach out to people who abandon their online shopping carts, and win back lapsed customers—automatically.
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17] }}
          slogan="What we get asked most"
          title="Frequently Asked Questions"
        />

        <Accordion items={data} />
        <Box sx={styles.loadMore}>
          <Button variant="text">Still Have Question? <br/>Contact us</Button>
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 6, 10, 14],
    pb: [12, null, null, null, 10, 22],
  },
  loadMore: {
    paddingTop: [3, null, null, 0],
    textAlign: 'center',
    button: {
      backgroundColor: '#ECF2F7',
      color: '#738295',
      minHeight: 50,
      px: '22px',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};
