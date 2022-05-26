import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => (
  <ul className="grid grid-cols-3 gap-8 py-8 mb-6" {...storyblokEditable(blok)} key={blok._uid}>
    {blok.columns.map((blok) => (
      <li key={blok._uid}>
        <StoryblokComponent blok={blok} />
      </li>
    ))}
  </ul>
);

export default Grid;