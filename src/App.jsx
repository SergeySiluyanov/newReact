import React from 'react';
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';
import './styles/style.less';


class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderBar />
                <FooterBar />
            </div>
        );
    }
}

export default App;
