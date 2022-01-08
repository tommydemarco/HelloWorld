import '../styles/globals.css'
import App from 'next/app';
import Context from '../context';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Context>
                <Component {...pageProps} />
            </Context>
        );
    }
}

export default MyApp;
