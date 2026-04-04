import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { useWordStore } from './store/useWordStore';
import { useProgressStore } from './store/useProgressStore';

// Final Page Components
import { Dashboard } from './pages/Dashboard';
import { WordBank } from './pages/WordBank';
import { Flashcards } from './pages/Flashcards';
import { Activities } from './pages/Activities';
import { Progress } from './pages/Progress';
import { Settings } from './pages/Settings';

function App() {
  const { initdb } = useWordStore();
  const { initProgress } = useProgressStore();

  useEffect(() => {
    initdb();
    initProgress();
  }, [initProgress, initdb]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="wordbank" element={<WordBank />} />
        <Route path="flashcards" element={<Flashcards />} />
        <Route path="activities" element={<Activities />} />
        <Route path="progress" element={<Progress />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
