import ContactForm from '@/components/contactForm';
import TitleArea from '@/components/TitleArea';
import Hero from '@/components/website/Hero';
import History from '@/components/website/History';
import MarqueStrip from '@/components/website/MarqueStrip';
import QuickBuy from '@/components/website/QuickBuy';
import ServiceStrip from '@/components/website/ServiceStrip';
import Strip from '@/components/website/Strip';
import Testimonial from '@/components/website/Testimonial';
import WhatWeServer from '@/components/website/WhatWeServer';

const Placeholder = () => <></>; // temporary empty component

const AllComp = ({ data }) => {
  const Components = {
    hero: Hero,
    service: ServiceStrip,
    strip: Strip,
    whatwedo: WhatWeServer,
    quickbuy: QuickBuy,
    marque: MarqueStrip,
    form: ContactForm,
    testimonial: Testimonial,
    banner: TitleArea,
    history: History,
  };

  const Component = Components[data.componentId];

  if (!Component) {
    console.warn(`Unknown componentId: ${data.componentId}`);
    return null;
  }

  return <main><Component data={data.dataMap} /></main>;
};

export default AllComp;
