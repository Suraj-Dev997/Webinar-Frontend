const WebcastDetail = () => {
  return (
    <div className="row">
      <div className="coll col-md-7">
        <div className="text-center">
          <img src="images/f1.png" className="Logo" alt="Webcast Logo" />
          <h5 className="title1">
            <u>Diabetes Dilemma Scientific Session 2022</u>
          </h5>
          <h4 className="title2">
            Dapagliflozine, Heart failure - Impact of low-cost therapies
          </h4>
        </div>
        <div>
          <div className="row text-center" style={{ marginTop: "5%" }}>
            <div className="col-md-6 mx-auto">
              <div className="drinfo">
                <div className="drtitle">EXPERT</div>
                <img src="images/dr1.jpg" className="dr1" />
                <p>
                  <span className="bold">Dr. Rajiv Sethi,</span>
                  <br />
                  Cardiologist,Pune
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colr col-md-5">
        <div className="Registration mx-auto">
          <div className="tab">
            <button className="tablinks active">Register</button>
          </div>

          <div id="Register" className="tabcontent">
            <form>
              <div className="form-floating">
                <input
                  type="text"
                  placeholder="Name"
                  id="floatingInput1"
                  className="form-control"
                  name="Name"
                  required
                />
                <label htmlFor="floatingInput1">Name</label>
              </div>
              <div></div>
              <div className="form-floating">
                <input
                  type="email"
                  placeholder="Email"
                  id="floatingInput1"
                  className="form-control"
                  name="Email"
                  required
                />
                <label htmlFor="floatingInput1">Email Id</label>
              </div>
              <div></div>
              <div className="form-floating">
                <input
                  type="text"
                  placeholder="Mobile"
                  id="floatingInput1"
                  className="form-control"
                  name="Mobile"
                  required
                />
                <label htmlFor="floatingInput1">Mobile</label>
              </div>
              <div></div>

              <div className="form-floating">
                <input
                  type="text"
                  placeholder="Speciality"
                  id="floatingInput1"
                  className="form-control"
                  name="Speciality"
                  required
                />
                <label htmlFor="floatingInput1">City</label>
              </div>
              <div></div>

              <div className="text-center">
                <button
                  type="submit"
                  className="reg "
                  name="SUBMIT"
                  value="SUBMIT"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebcastDetail;
