const User =(props)=> {

    const month = props.dateCreated.slice(5, 7)
    const year = props.dateCreated.slice(0, 4)

    // switch (month) {
    //     case '01': 'January'
    //         break
    //     case '02': 'February'
    //         break
    //     case '03': 'March'
    //         break
    //     case '04': 'April'
    //         break
    //     case '05': 'May'
    //         break
    //     case '06': 'June'
    //         break
    //     case '07': 'July'
    //         break
    //     case '08': 'August'
    //         break
    //     case '09': 'September'
    //         break
    //     case '10': 'October'
    //         break
    //     case '11': 'November'
    //         break
    //     case '12': 'December'
    //         break
            // default: console.log('date error')
    // }

    return(
        <>
            <div className="col-md-3">
                <div className="user-div">
                    <h3 className="text-capitalize">{props.firstName} {props.lastName}</h3>
                    <p className="user-text">Username: {props.username}</p>
                    <p className="user-email">Email: {props.email}</p>
                    <p className="user-date-created">Member since: {month} {year}</p>
                </div>
            </div>
        </>
    )
}

export default User