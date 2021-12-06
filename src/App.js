import React from 'react';

const App = () => {
    return (
        <> 
            <div>
                <h1>Welcome to React</h1>
                <p>Todays date is: { new Date().toDateString() }</p>
            </div>
        </>
    )
}

export default App