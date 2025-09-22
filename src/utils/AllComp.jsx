import ContactForm from '@/components/contactForm';
import TitleArea from '@/components/TitleArea';
import DoubleColumn from '@/components/website/DoubleColumn';
import Hero from '@/components/website/Hero';
import History from '@/components/website/History';
import InfoDisc from '@/components/website/InfoDisc';
import Map from '@/components/website/Map';
import MarqueStrip from '@/components/website/MarqueStrip';
import QuickBuy from '@/components/website/QuickBuy';
import ServiceStrip from '@/components/website/ServiceStrip';
import Strip from '@/components/website/Strip';
import Testimonial from '@/components/website/Testimonial';
import WhatWeServer from '@/components/website/WhatWeServer';


const AllComp = ({ data }) => {
  if (!data || !data.dataMap) {
    console.warn(`Missing data or dataMap for componentId: ${data?.componentId}`);
    return null; // skip rendering this component
  }

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
    map : Map,
    doubleColumn: DoubleColumn,
    infodisc: InfoDisc,
  };

  const Component = Components[data.componentId];

  if (!Component) {
    console.warn(`Unknown componentId: ${data.componentId}`);
    return null;
  }

  return <Component data={data.dataMap} />;
};

export default AllComp;

