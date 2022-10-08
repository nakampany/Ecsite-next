
import React, { useContext } from "react";
import { Button, Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";
import Link from "next/link";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import Cart from "../componets/Cart";
import AppContext from "../context/AppContext";

const GET_RESTAURANT_FOODS = gql`
    query ($id: ID!) {
        restaurant (id:$id) {
            id
            name
            foods {
                id
                name
                description
                price
                image {
                    url
                }
            }
        }
    }
`;


const Restaurants = (props) => {
    const appContext = useContext(AppContext);
    const router = useRouter();
    const { loading, error, data } =useQuery(GET_RESTAURANT_FOODS, {
        variables: {id: router.query.id},
    });
    console.log(data)

    if (error) return "店舗の読み込みに失敗しました";
    if (loading) return <h1>読み込み中・・・</h1>;

    if (data) {
        const { restaurant } = data;
        return (
        <>
        <h1>{ restaurant.name }</h1>
        <Row>
            { restaurant.foods.map((foods) => (
                <Col xs="6" sm="4" key={foods.id} style={{padding: 0}}>
                    <Card style={{margin:"0 10px"}}>
                        <CardImg
                            src={`${process.env.NEXT_PUBLIC_API_URL}${foods.image.url}`}
                            top={true}
                            style={{ height:250 }}
                        />
                        <CardBody>
                            <CardTitle>{ foods.name }</CardTitle>
                            <CardTitle>{ foods.description }</CardTitle>
                        </CardBody>
                        <div className="card-footer ">
                            <Button outline color="primary" onClick={() => appContext.addItem(foods)}>
                                + カートに入れる
                            </Button>
                        </div>
                    </Card>
                </Col>
            )) }
        
            <style jsx>
                {`
                a{
                    colo:white;
                }
                a:link {
                    text-decoration:none;
                    color: white;
                }
                a:hover{
                    color: white;
                }
                .cord-footer{
                    column-count: 3;
                }
                `}
            </style>
            <Col xs="3" style={{ padding: 0 }} >
                <div>
                    <Cart/>
                </div>
            </Col>
        </Row>
        </>
        );
    }
    else{
        return <h1>店舗が見つかりませんでした</h1>;
    }

};

export default Restaurants;
