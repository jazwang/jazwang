import React from 'react';
import ThemePage from '../images/jw.png';

const BackgroundTheme = (props) => {
    
    return (
        <img src={ThemePage} max-width="100%" max-height="100%" style={{alignContent: "center"}} />
    );
};

export default BackgroundTheme;

// const BackgroundImg = styled.img`
//     height: 60