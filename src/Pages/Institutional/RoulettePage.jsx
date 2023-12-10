import React from 'react';
import InstitutionalLayout from '../../Layouts/InstitutionalLayout';
import Roulette from '../../Components/Institutional/Roulette/Roulette';
import InternalPageBanner from '../../Components/Institutional/InternalPageBanner/InternalPageBanner';
import banner from '../../Images/RoulettePage/banner.webp';

const RoulettePage = () => {
  return (
    <InstitutionalLayout>
      <InternalPageBanner
        titleYellow={'Roleta '}
        titleWhite={'de prêmios'}
        image={banner}
      />
      <Roulette />
    </InstitutionalLayout>
  );
};

export default RoulettePage;
