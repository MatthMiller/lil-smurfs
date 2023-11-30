import React from 'react';
import InstitutionalHomeLayout from '../../Layouts/InstitutionalHomeLayout';
import Faq from '../../Components/Institutional/Faq/Faq';
import HeroIntro from '../../Components/Institutional/HeroIntro/HeroIntro';

const HomePage = () => {
  return (
    <InstitutionalHomeLayout>
      <HeroIntro />
      <Faq />
    </InstitutionalHomeLayout>
  );
};

export default HomePage;
