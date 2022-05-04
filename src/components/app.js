import './app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from '../routes/detail'
import Home from "../routes/home"
import Breadcrumb from "./breadcrumb"
import Footer from "./footer"

export default function() {
    return <BrowserRouter>
        <Breadcrumb />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/:product_name/detail" element={<Detail />} />
            <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
}