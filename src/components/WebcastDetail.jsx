import { useState, useEffect } from "react";

const WebcastDetail = () => {
  const [webcastData, setWebcastData] = useState({
    title: "",
    speakerName: "",
    speakerImage: "",
    fields: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/WebcastAllDetail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            IPClientCode: "10041",
            IPDeptID: "30",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        const title = data.events[0]?.Title || "";
        const speaker = data.speakerList[0] || {};
        const speakerName = speaker.SpkName || "";
        const speakerType = speaker.SpkType || "";
        const speakerImage = speaker.SpkImage || "";
        const fields = data.fieldList || [];

        setWebcastData({
          title,
          speakerName,
          speakerType,
          speakerImage,
          fields,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="coll col-md-7">
        <div className="text-center mt-3">
          <img src="images/netcast.svg" className="Logo" alt="Webcast Logo" />

          <h4 className="title2 mt-5">Topic: {webcastData.title}</h4>
        </div>
        <div>
          <div className="row text-center" style={{ marginTop: "5%" }}>
            <div className="col-md-6 mx-auto">
              <div className="drinfo">
                <div className="drtitle">{webcastData.speakerType}</div>
                <img src="images/dr1.png" className="dr1" />
                <p>
                  <span className="bold">{webcastData.speakerName}</span>
                  <br />
                  {/* Cardiologist,Pune */}
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
              {webcastData.fields.map((field) => (
                <div key={field.WcFid} className="form-floating">
                  <input
                    type={field.FieldType}
                    placeholder={field.PlaceHolder}
                    id={`floatingInput${field.WcFid}`}
                    className="form-control"
                    name={field.PlaceHolder}
                    required={field.IsMandate === "M"}
                  />
                  <label htmlFor={`floatingInput${field.WcFid}`}>
                    {field.PlaceHolder}
                  </label>
                </div>
              ))}

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
