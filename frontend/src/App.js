import CropProtection from "./components/CropProtection";
import ProductDisplay from "./components/ProductsDisplay";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewProduct from "./components/viewProduct.js"
import PaymentUI from "./components/PaymentUI";


//Officer
import HeaderOfficer from "./components/PesticideDashBoard.js";
import DashBoardFooter from './components/DashBoardFooter';
import Product from './components/Product.js'
import PesticideDashBoard from "./components/PesticideDashBoard.js";
import Stock from "./components/Stock"
import ProductRequest from './components/ProductRequest.js';
import PesticidePayment from "./components/PesticidePayment";
import UpdateProduct from "./components/UpdateProduct";
import Cart from "./components/Cart";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CropProtection />} />
          <Route path="/pesticides" element={<ProductDisplay />} />
          <Route path="/crop-Protection" element={<CropProtection/>}/>
          <Route
            path="/pesticide/:productName/:productId"
            element={<ViewProduct />}
          />
           <Route path="/payment-Details" element={<PaymentUI/>}/>
           <Route path="/pesticideOfficer" element={<HeaderOfficer/>}/>
           
           //officer side 

           <Route path='/products' element={<Product/>}/>
           <Route path='/pesticideDashboard' element={<PesticideDashBoard/>}/>
           <Route path='/stock' element={<Stock/>}/>
           <Route path='/PesticideRequests' element={<ProductRequest/>}/>
           <Route path='/pesticidePayment' element={<PesticidePayment/>}/>
           <Route path='/updateproduct/:pesticideId' element={<UpdateProduct/>}/>
           <Route path="/cart" element={<Cart/>}/>
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 




