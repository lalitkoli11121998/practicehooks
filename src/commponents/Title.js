import React from 'react';

function Title(props) {
    console.log('rendering titlle')
    return (
        <h2>
            useCallback hook
        </h2>
    );
}

export default React.memo(Title)