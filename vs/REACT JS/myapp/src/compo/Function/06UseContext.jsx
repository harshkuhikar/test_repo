import React from 'react';
import { useContext } from 'react';

const theme = { 
    "light": {
        foreground: "Yellow",
        background: "black"
    },
    "dark": {   
        foreground: "red",
        background: "black"
    }
}
const Theme = React.createContext(theme.light)
function UseContext(props) {
    const data = useContext(Theme)
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-4 ">
                        <p style={{ color: data.foreground, background: data.background }}>Lorem ipsum dolor sit amet consectetur
                            \adipisicing elit. Ipsam voluptatum sint pariatur placeat molestias a minus.
                            Modi quis quam commodi numquam harum atque. Dignissimos nisi veritatis magnam? Suscipit, molestiae a?+</p>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary ms-5' onClick={theme.dark}>Change me</button>

        </>
    );
}

export default UseContext;
