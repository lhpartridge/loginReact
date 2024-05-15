import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import Form from './components/Form'
import Users from './components/Users'

const App =()=> {
    const [ formData, setFormData ] = useState({
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: ''

    })

    const [ users, setUsers] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/user')
            .then(res => setUsers(res.data))
        }, [])
        
        // console.log(users)

    const handleChange =(event)=> {
        const { name, value } = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit=(event)=> {
        event.preventDefault()
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        // let result = regex.text

        if (regex.test(formData.password) === false) {
            alert('Invalid password. \nPassword must contain at least 8 characters, including: \n one upper case letter, \n one lowercase letter, \n one number and \n one special character')
        } else {
            axios({
                method: 'post', 
                url: 'http://localhost:3005/api/user/create',
                data: formData
            })
        }

    }
    
    return(
        <>
             <Header users={users}/>
             <Form 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
            />
            <Users users={ users }/>
        </>
    )
}

export default App