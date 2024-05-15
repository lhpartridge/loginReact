const Form =( { formData, handleChange, handleSubmit })=> {
    
    return(
        <>
            <main className="main" id="formMain">
                <div className="container">
                    <h2 className="display-2 text-capitalize text-center">create a login</h2>
                    <form onSubmit={handleSubmit} className="form" id="form"> 
                        <div className="mb-3 row">
                            <div className="col-auto">
                                <label htmlFor="fName" className="form-label text-capitalize">first name</label>
                                <input 
                                    type="text" 
                                    id="fName"
                                    name="fName"
                                    value={formData.fName}
                                    className="form-control"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="col-auto">
                                <label htmlFor="lName" className="form-label text-capitalize">last name</label>
                                <input 
                                    type="text" 
                                    id="lName"
                                    name="lName"
                                    value={formData.lName}
                                    className="form-control"
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-auto">
                                <label htmlFor="email" className="form-label text-capitalize">email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    className="form-control"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-auto">
                                <label htmlFor="username" className="form-label text-capitalize">create a username</label>
                                <input 
                                    type="text" 
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    className="form-control"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-auto">
                                <label htmlFor="password" className="form-label text-capitalize">create a password</label>
                                <input 
                                    type="password" 
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    className="form-control"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <button
                                type="submit"
                                className="btn btn-info text-capitalize">
                                    create login
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Form