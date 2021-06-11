import React, { Component, PureComponent } from "react";
import "../app.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./CommonComponent/HomeComponent"
import Header from "./CommonComponent/HeaderComponent";
import Footer from "./CommonComponent/FooterComponent";
import User from "./ApplicationComponent/Container/User/UserContainer";
import About from "./CommonComponent/AboutComponent";
import App1 from "./CommonComponent/AppComponent";
import Hobby from "./ApplicationComponent/Container/Hobby/HobbyContainer";
import UserHook from "./ApplicationComponent/Components/User/UserHooks";
import MyUserComponent from "./ApplicationComponent/Components/User/MyUserComponent"
import Product from "./ApplicationComponent/Components/Product/ProductComponent";
import MyAddProductComponent from "./ApplicationComponent/Components/Product/MyAddProduct"
import CartComponent from "./ApplicationComponent/Components/Cart/CartComponent"
import Coupon from "./ApplicationComponent/Components/Cart/CouponComponent"
// import DisplayMyProduct from "./ApplicationComponent/Components/Product/DisplayMyProduct"
import Display from "../pages/DisplayOrderHistory"
import DisplayCancel from "../pages/DisplayCancelledOrder"
import Payment from "../pages/Payment"
const DisplayMyProduct = React.lazy(() => import("./ApplicationComponent/Components/Product/DisplayMyProduct"));
import SignUpComponent from "../pages/SignUp";

export default class App extends Component {

    render() {
        return (
            <React.Suspense fallback={<> </>}>
                <Router>
                    <Header />
                    <div style={{ height: "100%" }}>
                        <Switch>
                            {/*<Route exact path="/" render={()=>{admin ? <Redirect to="/user" /> : <Home/> }} component={About} />*/}
                            <Route path="/home" component={Home} />
                            <Route path="/user" component={User} />
                            {/* <Route path="/user2" component={UserHook} /> */}
                            <Route path="/myuser" component={MyUserComponent} />
                            <Route path="/addproduct" component={MyAddProductComponent} />
                            {/* React.suspense is a wrapper class for lazy (only fetch product component is mounted) */}
                            <Route path="/displayhistory" component={Display}/>
                            <Route path="/displaycancel" component={DisplayCancel}/>
                            <Route path="/product" component={DisplayMyProduct} />
                            <Route path="/signUp" component={SignUpComponent} />
                            <Route path="/about" exact component={About} />
                            <Route path="/about/:id" component={About} />
                            <Route path="/cart" component={CartComponent} />
                            <Route path="/coupon" component={Coupon} />
                            <Route path="/checkout-form" component={Payment} />
                            
                            {/* <Route path="/app" component={App1}/>
                        <Route path="/hobby" component={Hobby}/> */}

                            {/* <Home counter={counter}></Home>
                        <About/> 
                        <Route path="/" component={Home} />
                        <Route path="*" component={NotFound} />*/}
                        </Switch>
                    </div>
                    <Footer />
                </Router>
            </React.Suspense>
        )
    }
}
