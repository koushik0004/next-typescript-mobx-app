import Layout from './template/MyLayout';
import HelloWorld from '../components/HelloWorld';

const Index = () => {
  return (
    <Layout title="Home">
      <div className="page">
        <h2>Initial Landing Page</h2>
        <HelloWorld />

        <style jsx>{`
          .page {
            margin-top: 10vh;
            font-family: monospace;
            text-align: center;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Index;
