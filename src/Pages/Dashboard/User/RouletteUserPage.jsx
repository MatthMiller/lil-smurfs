import React from 'react';
import DashboardLayout from '../../../Layouts/DashboardLayout';
import TitleSubtitle from '../../../Components/Dashboard/TitleSubtitle/TitleSubtitle';
import RouletteUser from '../../../Components/Dashboard/RouletteUser/RouletteUser';

const RouletteUserPage = () => {
  return (
    <DashboardLayout>
      <main>
        <TitleSubtitle
          title={'Prêmios'}
          subtitle={
            'Aqui você poderá ver todos os prêmios que recebeu de roletas e outras fontes.'
          }
        />
        <RouletteUser />
      </main>
    </DashboardLayout>
  );
};

export default RouletteUserPage;
