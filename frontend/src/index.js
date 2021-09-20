import { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

function App() {
    const [user, setUser] = useState("Robert");
    const [pass, setPass] = useState("Potato");

    function klik() {
        axios.post('http://localhost:3000/', { user, pass })
             .then(res => console.log(res.data));
    }

    return (
        <div>
            <input value={user} onChange={e => setUser(e.target.value)} />
            <br />
            <input value={pass} onChange={e => setPass(e.target.value)} />
            <br />
            <button onClick={klik}>Click me</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#root"));