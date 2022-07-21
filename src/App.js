import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

// loading pages(components) for each route
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/new-meetup' element={<NewMeetupPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
