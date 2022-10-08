

import { CardElement } from "@stripe/react-stripe-js";


const CardSection = (props) => {
    return (
    <div>
        <div>
            <label htmlFor="card-element">クレジット/デビットカード</label>

            <div>
            <fieldset>
                <div className="form-row">
                    <div id="card-element" style={{ width: "100%" }}>
                        <CardElement
                        options={{
                            style: { width: "100%", base: { fontSize: "18px" } },
                        }}
                        />
                    </div>
                    <br />
                    <div className="order-button-wrapper">
                        <button onClick={props.submitOrder} >注文を確認</button>
                    </div>
                    {props.errorMsg ? (
                        <div>{props.errorMsg.toString()}</div>
                    ) : null}

                    {props.successMsg ? (
                        <div color="green">{props.successMsg.toString()}</div>
                    ) : null}
                </div>
            </fieldset>
            </div>
        </div>
        <style jsx>
            {`
            .order-button-wrapper {
                display: flex;
                width: 100%;
                align-items: flex-end;
                justify-content: flex-end;
            }
            `}
        </style>
        </div>
    );
}

export default CardSection;