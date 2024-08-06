import React from 'react';
import southwestLogo from './images/southwest.png';
import amazonLogo from './images/amazon.png';
import dellLogo from './images/dell.png';
import cvsLogo from './images/cvs_health.png'
import harvardLogo from './images/harvard.png';
import lendingtreeLogo from './images/lending_three.png';

const TrustedCompanies = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-xl font-semibold mb-4">OVER 5,500 ORGANIZATIONS TRUST FORMASSEMBLY WITH THEIR DATA</h2>
      <div className="flex justify-center space-x-8">
        <img src={southwestLogo} alt="Southwest" className="h-8" />
        <img src={amazonLogo} alt="Amazon" className="h-8" />
        <img src={dellLogo} alt="Dell" className="h-8" />
        <img src={cvsLogo} alt="CVS Health" className="h-8" />
        <img src={harvardLogo} alt="Harvard University" className="h-8" />
        <img src={lendingtreeLogo} alt="LendingTree" className="h-8" />
      </div>
    </section>
  );
};

export default TrustedCompanies;
