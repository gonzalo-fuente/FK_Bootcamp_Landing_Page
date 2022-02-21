import map from "../assets/map.jpg";

const Contact = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <h2 className="text-center mb-4">Contact Info</h2>
          <div className="col-md">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span> 50 Main st
                Boston MA
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone:</span> (555)
                555-5555
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone:</span> (333) 333-3333
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Email:</span> (555)
                enroll@frontendbc.test
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email:</span>
                student@frontendbc.test
              </li>
            </ul>
          </div>
          <div className="col-md">
            <img className="image-fluid w-100" src={map} alt="Map image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
