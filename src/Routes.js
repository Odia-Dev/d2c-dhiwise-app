import React from "react";
import SignUp from "pages/SignUp";
import EditProfile from "pages/EditProfile";
import PhoneVerification from "pages/PhoneVerification";
import PasswordStrength from "pages/PasswordStrength";
import HelpCenter from "pages/HelpCenter";
import ForgotPassword from "pages/ForgotPassword";
import ReorderPurchase from "pages/ReorderPurchase";
import RefundManagement from "pages/RefundManagement";
import Payments from "pages/Payments";
import InvoiceBilling from "pages/InvoiceBilling";
import Orderdetailview from "pages/Orderdetailview";
import OrderTracking from "pages/OrderTracking";
import PushNotifications from "pages/PushNotifications";
import Notifications from "pages/Notifications";
import QRCode from "pages/QRCode";
import PricingEngine from "pages/PricingEngine";
import ItemAvailability from "pages/ItemAvailability";
import Wishlist from "pages/Wishlist";
import ShoppingCart from "pages/ShoppingCart";
import ProductQuickview from "pages/ProductQuickview";
import GuestLogin from "pages/GuestLogin";
import DiscountsOffers from "pages/DiscountsOffers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/discountsoffers" element={<DiscountsOffers />} />
        <Route path="/guestlogin" element={<GuestLogin />} />
        <Route path="/productquickview" element={<ProductQuickview />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/itemavailability" element={<ItemAvailability />} />
        <Route path="/pricingengine" element={<PricingEngine />} />
        <Route path="/qrcode" element={<QRCode />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/pushnotifications" element={<PushNotifications />} />
        <Route path="/ordertracking" element={<OrderTracking />} />
        <Route path="/orderdetailview" element={<Orderdetailview />} />
        <Route path="/invoicebilling" element={<InvoiceBilling />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/refundmanagement" element={<RefundManagement />} />
        <Route path="/reorderpurchase" element={<ReorderPurchase />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/passwordstrength" element={<PasswordStrength />} />
        <Route path="/phoneverification" element={<PhoneVerification />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
