
import PageClientGenric from "../PagesCliente/PageClientGeneric"
import { loadStripe } from '@stripe/stripe-js'
import { Elements} from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
import './Checkout.css'
const stripePromise = loadStripe('pk_test_51IEHvuCICit7kq32eFbgEWeOpH04rl50WRkzzScSAFjYxE2wdeTpnuBSKhRPOALeBzOCpIupSmaD42Su7aK138xJ00sHiTxXFm');
const ELEMENTS_OPTIONS = {

  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
    }
  ]
};

const Checkout  = ()=>{
	return (		
	<PageClientGenric>
		 <div className="stripe">
			<Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
				<CheckoutForm />
			</Elements>
		</div>
	</PageClientGenric>
		)
}

export default Checkout;