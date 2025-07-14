import { metadata } from './metadata';
import { content } from './content';
import ServicePage from '../_components/ServicePage';

export { metadata };

export default function Page() {
  return <ServicePage content={content} />;
}