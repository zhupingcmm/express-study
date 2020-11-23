import React,{useState} from 'react';

function Login(props){
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
    const handlePassChange = (e) =>{
        setPass(e.target.value)
    }
    const handleSubmit = () =>{
        const { history } = props;
        const data = {
            name,
            pass
        };
        console.log("assasb==")
        fetch('http://localhost:3015/login',{
            body:JSON.stringify(data),
            method: 'POST',
        })
        .then(res=>res.json())
        .then(res=>{
           const {status} = res;
           if (status === 200) history.push('/',{isLogin: true})
        })
    }
    return (
        <div>
            Login
            <div >
                <div>
                    <div>name: <input type="text" value={name} onChange={(e)=>{handleNameChange(e)}} /></div>
                    <div>pass: <input type="text" value={pass} onChange={(e)=>{handlePassChange(e)}}/></div>
                    <div> aas:<input type="submit" value="button" onClick={()=>{handleSubmit()}}/> </div>
                </div>
            </div>
        </div>
    )
}

export default Login;