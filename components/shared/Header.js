import React from 'react';
import Link from 'next/link';
import '../../styles/main.scss'

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p className='testClass'> WWWWWWWWWWWWWW </p>

                <p className='testClassFromFile'> FILE FILE FILE </p>

                <Link href="/">
                    <a>Home</a>
                </Link>

                <Link href="/portfolios">
                    <a>Portfolios</a>
                </Link>

                <Link href="/about">
                    <a>About</a>
                </Link>

                <Link href="/blogs">
                    <a>Blogs</a>
                </Link>

                <Link href="/cv">
                    <a>CV</a>
                </Link>

                <style jsx>{`
                    h1, a {
                        font-family: "Arial";
                    }

                    ul {
                        padding: 0;
                    }

                    p {

                    }.testClass {
                        color: red;
                    }

                    li {
                        list-style: none;
                        margin: 5px 0;
                    }

                    a {
                        text-decoration: none;
                        color: blue;
                    }

                    a:hover {
                        opacity: 0.6;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}

export default Header;