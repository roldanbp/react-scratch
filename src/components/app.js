import './app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from '../routes/detail'
import Home from "../routes/home"
import Breadcrumb from "./breadcrumb"

export default function() {
    return <BrowserRouter>
        <Breadcrumb />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path='*' element={<Home />} />
        </Routes>
    </BrowserRouter>
}