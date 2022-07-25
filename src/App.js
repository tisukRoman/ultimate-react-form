import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Step1 from './components/Step1';
import Step2 from './components/Step2';

const Step3 = () => <div>Step3</div>;
const Result = () => <div>Result</div>;

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Step1 />} />
          <Route exact path='/step2' element={<Step2 />} />
          <Route exact path='/step3' element={<Step3 />} />
          <Route exact path='/result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
