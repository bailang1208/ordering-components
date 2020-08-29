import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Home } from './views/Home'
import { Login } from './views/Login'
import { Signup } from './views/Signup'
import { ForgotPassword } from './views/ForgotPassword'
import { FacebookLogin } from './views/FacebookLogin'
import { SessionManager } from './views/SessionManager'
import { Profile } from './views/UserProfile'
import { ActiveOrders } from './views/ActiveOrders'
import { ProductList } from './views/ProductList'
import { OrderContectExample } from './views/OrderContectExample'
import { BusinessSortControlExample } from './views/BusinessSortControlExample'
import { ProductImagesExample } from './views/ProductImagesExample'
import { BusinessTypeFilterExample } from './views/BusinessTypeFilterExample'
import { PlacesExample } from './views/PlacesExample'
import { ConfigsExample } from './components/ConfigsExample'
import { LanguagesExample } from './components/LanguagesExample'
import { PopupExample } from './views/PopupExample'
import { ProductOptionExample } from './views/ProductOptionExample'
import { UserDetailsExample } from './views/UserDetailsExample'
import { AddressDetailsExample } from './views/AddressDetailsExample'
import { MomentOptionExample } from './views/MomentOptionExample'
import { PaymentOptionsExample } from './views/PaymentOptionsExample'
import { DriverTipsExample } from './views/DriverTipsExample'
import { CheckoutExample } from './views/CheckoutExample'

export default function App ({ ordering }) {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/login'>
            <Login ordering={ordering} />
          </Route>
          <Route path='/signup'>
            <Signup ordering={ordering} />
          </Route>
          <Route path='/forgot_password'>
            <ForgotPassword ordering={ordering} />
          </Route>
          <Route path='/facebook_login'>
            <FacebookLogin ordering={ordering} />
          </Route>
          <Route path='/session_manager'>
            <SessionManager ordering={ordering} />
          </Route>
          <Route path='/profile'>
            <Profile ordering={ordering} />
          </Route>
          <Route path='/active_orders'>
            <ActiveOrders ordering={ordering} />
          </Route>
          <Route path='/product_list'>
            <ProductList ordering={ordering} />
          </Route>
          <Route path='/order_context'>
            <OrderContectExample ordering={ordering} />
          </Route>
          <Route path='/sort_options'>
            <BusinessSortControlExample ordering={ordering} />
            </Route>
          <Route path='/product_images'>
            <ProductImagesExample ordering={ordering} />
          </Route>
          <Route path='/business_type_filter'>
            <BusinessTypeFilterExample ordering={ordering} />
          </Route>
          <Route path='/places'>
            <PlacesExample ordering={ordering} />
          </Route>
          <Route path='/config_manager'>
            <ConfigsExample />
          </Route>
          <Route path='/languages_examples'>
            <LanguagesExample ordering={ordering} />
          </Route>
          <Route path='/popup_example'>
            <PopupExample />
          </Route>
          <Route path='/product_option_example'>
            <ProductOptionExample ordering={ordering} />
          </Route>
          <Route path='/user_details'>
            <UserDetailsExample ordering={ordering} />
          </Route>
          <Route path='/address_details'>
            <AddressDetailsExample ordering={ordering} />
          </Route>
          <Route path='/moment_option'>
            <MomentOptionExample ordering={ordering} />
          </Route>
          <Route path='/payment_options'>
            <PaymentOptionsExample ordering={ordering} />
          </Route>
          <Route path='/driver_tips'>
            <DriverTipsExample ordering={ordering} />
          </Route>
          <Route path='/checkout'>
            <CheckoutExample ordering={ordering} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}
