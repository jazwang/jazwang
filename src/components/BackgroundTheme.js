import React from 'react';
import ThemePage from '../images/web-logo.png';

const BackgroundTheme = (props) => {
    
    return (
        <div>
        <img src={ThemePage} max-width="100%" max-height="100%" style={{alignContent: "center"}} />
        </div>
    );
};

export default BackgroundTheme;
