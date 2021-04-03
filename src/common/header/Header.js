import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="app-header">
                    <div style={{ display: 'table', height: '100%', verticalAlign: 'middle'}}>
                        <span className="app-logo">Image Viewer</span>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;