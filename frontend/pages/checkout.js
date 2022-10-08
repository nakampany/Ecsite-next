import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { Col, Row } from "reactstrap";
import Cart from "../componets/Cart";
import CheckOutForm from "../componets/Checkout/CheckOutForm";

const checkout = () => {
    const stripePromise = loadStripe(
        "pk_test_51Lorc2KhXAaqAtkRd8edjml3BtdIuSpeU8Pbfg6htese4yhhKUUHl2EkDdJh8L9bax00poFlXO5Js00EZg7UjDTE00N1U04P5K"
    )
    return (
        <Row>
            <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
                <h1 style={{ margin: 20, fontSize: 20, textAlign: "center" }}>
                チェックアウト
                </h1>
                <Cart />
            </Col>
            <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            </Col>
    </Row>
    );
}

export default checkout;