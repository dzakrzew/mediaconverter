import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { AppRouter } from './routes/AppRouter';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter/>
      </Layout>
    </BrowserRouter>
  );
};
