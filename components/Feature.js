import { storyblokEditable } from '@storyblok/react';

import RichText from './RichText';

const Feature = ({ blok }) => {
  return (
    <div className="py-2" {...storyblokEditable(blok)} key={blok._uid}>
      <h2 className="text-lg font-bold"> {blok.name} </h2>
      <div className="text-base">
        <RichText document={blok.text} />
      </div>
    </div>
  );
};

export default Feature;
