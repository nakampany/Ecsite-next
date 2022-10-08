import Head from 'next/head';
import React, { useContext } from 'react';
import Link from "next/link"
import { Nav, NavItem, Container } from 'reactstrap';
import AppContext from '../context/AppContext';

const Layout = (props) => {
    const { user, setUser } = useContext(AppContext);
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
                { user ? (
                    <Link href="/">
                        <a
                            className='nav-link'
                            onClick={() => {
                                setUser(null);
                            }}
                        >
                            ログアウト
                        </a>
                    </Link>
                ) : (
                    <Link href="/login">
                        <a href="" className='navbar-link'>ログイン</a>
                    </Link>
                ) }
            </NavItem>
            <NavItem>
                { user ? (
                    <h5>{ user.username }</h5>
                ) : (
                    <Link href="/register">
                        <a href="" className='navbar-link'>新規登録</a>
                    </Link>
                )}
            </NavItem>
        </Nav>
    </header>
    <Container>{ props.children }</Container>
    </div>

    )
};
export default Layout;
