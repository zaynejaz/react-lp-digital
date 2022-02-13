import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import CustomerSupport from 'sections/customer-support';
import Pricing from 'sections/pricing';
import Support from 'sections/support';
import Clients from 'sections/clients';
import Blog from 'sections/blog';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="La Digital"
          description="React Landing page"
        />
        <Banner />
        <UltimateFeatures />
        <CustomerSupport />
        <Pricing />
        <Support />
        <Clients />
        <Blog />
        <Faq />
      </Layout>
    </ThemeProvider>
  );
}
