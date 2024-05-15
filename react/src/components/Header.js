import { useState } from "react"

const Header =({ users })=> {
    const [ signInData, setSignInData ] = useState({
        username: '',
        password: ''
    })

    const handleChange=(event)=> {
        const { name, value } = event.target
        setSignInData(prevState => {
            return {
                ...prevState,
                [ name ]: value
            }
        })
    }

    const [ access, setAccess] = useState(false)
    const [ user, setUser ] = useState('')

    const handleSubmit =(event)=> {
        event.preventDefault()
        for (let i = 0; i < users.length; i++) {
            if ((users[i].username === signInData.username) && (users[i].password === signInData.password)) {
                setAccess(prevState => !prevState)
                setUser(users[i].username)
                setSignInData({
                    username: '',
                    password: ''
                })
            } 
        }
        return access
    }

    return(
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="heading display-1 text-capitalize">login</h1>
                        {access && <p className="access-text ">Welcome back, {user}</p>}
                    </div>
                    <div className="col-md-7">
                        <form onSubmit={ handleSubmit } className="sign-in-form">
                            <p className="form-text text-capitalize">Member? Sign in</p>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-auto">
                                        <label 
                                            htmlFor="signinUsername" 
                                            className="form-label"
                                            >Username
                                        </label>
                                        <input 
                                            type="text" 
                                            id="signinUsername"
                                            name="username"
                                            value={signInData.username}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <label 
                                            htmlFor="signinPassword" 
                                            className="form-label"
                                            >Password
                                        </label>
                                        <input 
                                            type="password" 
                                            id="signinPassword"
                                            name="password"
                                            value={signInData.password}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <button
                                            type="submit"
                                            className="btn btn-success">sign in</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header