import User from './User'

const Users =({ users })=> {

    const userComponents = users.map(user => {
        return <User
                    key={user.user_id}
                    lastName={user.lName.toLowerCase()}
                    firstName={user.fName.toLowerCase()}
                    username={user.username}
                    email={user.email}
                    dateCreated={user.date_created}    
                     />
    })

    return(
        <>
            <main className="main" id="usersMain">
                <div className="container">
                    <h2 className="display-4 text-capitalize">users</h2>
                    <div className="row row-cols-2">
                        { userComponents }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Users