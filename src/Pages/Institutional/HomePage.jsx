import React from 'react';
import InstitutionalLayout from '../../Layouts/InstitutionalLayout';
import Faq from '../../Components/Institutional/Faq/Faq';
import HeroIntro from '../../Components/Institutional/HeroIntro/HeroIntro';
import LastAccountsHome from '../../Components/Institutional/LastAccountsHome/LastAccountsHome';

const HomePage = () => {
  return (
    <InstitutionalLayout>
      <HeroIntro />
      <LastAccountsHome />
      <Faq />
    </InstitutionalLayout>
  );
};

export default HomePage;
