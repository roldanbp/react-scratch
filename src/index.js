import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/app'
import Detail from './routes/detail'

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="detail" element={<Detail />} />
        </Routes>
    </BrowserRouter>, 
    document.querySelector('#root')
)