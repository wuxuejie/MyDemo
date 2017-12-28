import * as React from 'react';
import { homeProps } from '../../types/home';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from './Banner';
import { Helmet } from "react-helmet";

class App extends React.Component<homeProps> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount(){
        this.props.loadBanners();
    }
    render() {
        const { banners } = this.props;
        return (
            <div className="app">
                <Helmet>
                    <title>首页</title>
                </Helmet>
                <Header />
                <Banner banners={banners} />
                <Footer />
            </div>
        );
    }
}

export default App;
