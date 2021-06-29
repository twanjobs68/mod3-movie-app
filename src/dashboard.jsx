import React from 'react';

function dashboard (props) {
    return (
        <div>
            <h1>Dashborad</h1>
            <h1>Statis:{props.loggedInStatus}</h1>
        </div>
    );
}

export default dashboard;