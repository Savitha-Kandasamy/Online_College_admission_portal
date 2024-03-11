import "../../assets/css/UserForm.css";

function UserForm() {
  return (
    <div className="bg-dark">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">

            <div className="card my-4">

              <div className="row g-0">

                <div className="col-md-6 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    className="rounded-start img-fluid"
                  />
                </div>

                <div className="col-md-6">

                  <div className="card-body text-black d-flex flex-column justify-content-center">
                    <h3 className="mb-5 text-uppercase fw-bold">Student registration form</h3>

                    <div className="row">

                      <div className="col-md-6">
                        <label htmlFor="form1" className="form-label">First Name</label>
                        <input className="form-control mb-4" type="text" id="form1" />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="form2" className="form-label">Last Name</label>
                        <input className="form-control mb-4" type="text" id="form2" />
                      </div>

                    </div>

                    <div className="mb-4">
                      <label htmlFor="form3" className="form-label">Birthday</label>
                      <input className="form-control" type="text" id="form3" />
                    </div>

                    <div className="d-md-flex justify-content-start align-items-center mb-4">
                      <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadio" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">Female</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadio" id="inlineRadio2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Male</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadio" id="inlineRadio3" value="option3" />
                        <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
                      </div>
                    </div>

                    <div className="row">

                      <div className="col-md-6">
                        <label htmlFor="stateSelect" className="form-label">State</label>
                        <select className="form-select mb-4" id="stateSelect">
                          <option value="1">State</option>
                          <option value="2">Option 1</option>
                          <option value="3">Option 2</option>
                          <option value="4">Option 3</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="citySelect" className="form-label">City</label>
                        <select className="form-select mb-4" id="citySelect">
                          <option value="1">City</option>
                          <option value="2">Option 1</option>
                          <option value="3">Option 2</option>
                          <option value="4">Option 3</option>
                        </select>
                      </div>

                    </div>

                    <div className="mb-4">
                      <label htmlFor="form4" className="form-label">Pincode</label>
                      <input className="form-control" type="text" id="form4" />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="form5" className="form-label">Course</label>
                      <input className="form-control" type="text" id="form5" />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="form6" className="form-label">Email ID</label>
                      <input className="form-control" type="text" id="form6" />
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button className="btn btn-light btn-lg">Reset all</button>
                      <button className="btn btn-warning btn-lg ms-2">Submit form</button>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default UserForm;
