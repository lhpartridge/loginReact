const User =(props)=> {

    return(
        <>
            <div className="col-md-3">
                <div className="user-div">
                    <h3 className="text-capitalize">{props.lastName} {props.firstName}</h3>
                    <p className="user-text">Username: {props.username}</p>
                    <p className="user-email">Email: {props.email}</p>
                    <p className="user-date-created">Member since: {props.date_created}</p>
                </div>
            </div>
        </>
    )
}

export default User