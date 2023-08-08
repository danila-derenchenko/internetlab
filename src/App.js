import './App.css';
import FullscreenHeader from './components/fullscreenHeader';
import ContentBlock from './components/contentBlock';
import Reviews from './components/reviews';
import FAQ from './components/FAQ';
import Stories from './components/stories';
import Form from './components/form';
import Slider from './components/slider';

function App() {
  return (
    <div className='App'>
      <span id='main'></span>
      <FullscreenHeader />
      <span id='content'></span>
      <ContentBlock />
      <Slider />
      <span id='faq'></span>
      <FAQ />
      <Stories />
      <span id='form'></span>
      <Form />
    </div>
  );
}

export default App;
