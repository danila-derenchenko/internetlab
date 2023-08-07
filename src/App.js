import './App.css';
import FullscreenHeader from './components/fullscreenHeader';
import ContentBlock from './components/contentBlock';
import Reviews from './components/reviews';
import FAQ from './components/FAQ';
import Stories from './components/stories';
import Form from './components/form';

function App() {
  return (
    <div>
      <FullscreenHeader />
      <ContentBlock />
      <Reviews />
      <FAQ />
      <Stories />
      <Form />
    </div>
  );
}

export default App;
