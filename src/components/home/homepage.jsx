import {Main} from '../main/main';
import {Feature} from '../feature/feature'
import {SubFeature} from '../feature/subfeature'
import { Testimonial } from '../testimonial/testimonial';
import Contact from '../contact/contact';
export const HomePage = () => (
    <>
    <div className="home_body">
        <Main/>
        <Feature/>
        <SubFeature/>
        <Testimonial/>
        <Contact/>
  </div>
  </>
);
