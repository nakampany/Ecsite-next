
import React from "react";
import { Button, Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";
import Link from "next/link";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";

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
            { restaurant.foods.map((res) => (
                <Col xs="6" sm="4" key={res.id} style={{padding: 0}}>
                    <Card style={{margin:"0 10px"}}>
                        <CardImg
                            src={`${process.env.NEXT_PUBLIC_API_URL}${res.image.url}`}
                            top={true}
                            style={{ height:250 }}
                        />
                        <CardBody>
                            <CardTitle>{ res.name }</CardTitle>
                            <CardTitle>{ res.description }</CardTitle>
                        </CardBody>
                        <div className="card-footer ">
                            <Button outline color="primary">
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
        </Row>
        </>
        );
    }
    else{
        return <h1>店舗が見つかりませんでした</h1>;
    }

};

export default Restaurants;