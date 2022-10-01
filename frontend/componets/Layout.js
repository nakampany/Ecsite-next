import Head from 'next/head';
import React from 'react';
import Link from "next/link"
import { Nav, NavItem, Container } from 'reactstrap';

const Layout = (props) => {
    return (
    <div>
    <Head>
        <title>フードデリバリーサービス</title>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        />
    </Head>
    <header>
        <Nav className="navbar navbar-dark bg-dark">
            <NavItem>
                <Link href="/">
                    <a href="" className='navbar-brand'>ホーム</a>
                </Link>
            </NavItem>
            <NavItem className='ml-auto'>
                <Link href="/login">
                    <a href="" className='navbar-link'>サインイン</a>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/register">
                    <a href="" className='navbar-link'>サインアウト</a>
                </Link>
            </NavItem>
        </Nav>
    </header>
    <Container>{ props.children }</Container>
    </div>

    )
};
export default Layout;
