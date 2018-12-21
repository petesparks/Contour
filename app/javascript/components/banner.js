import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Traditional Golf Course Construction Specialists", "Experts In Soil Recovery Infill Projects"],
    typeSpeed: 60,
    loop: true
  });
};

export { loadDynamicBannerText };


