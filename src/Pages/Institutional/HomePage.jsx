import React from 'react';
import InstitutionalLayout from '../../Layouts/InstitutionalLayout';
import Faq from '../../Components/Institutional/Faq/Faq';
import HeroIntro from '../../Components/Institutional/HeroIntro/HeroIntro';

const HomePage = () => {
  return (
    <InstitutionalLayout>
      <HeroIntro />
      <Faq />
    </InstitutionalLayout>
  );
};

export default HomePage;
