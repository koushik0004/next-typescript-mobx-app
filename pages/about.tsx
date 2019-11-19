import Layout from './template/MyLayout';
import HelloWorld from '../components/HelloWorld';

const About = () => {
  return (
    <Layout title="About Us">
      <div className="page">
        <h2>About Page</h2>
        <HelloWorld />
      </div>
    </Layout>
  );
};

export default About;
