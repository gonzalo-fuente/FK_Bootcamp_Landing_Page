const Instructor = ({ children, img }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card bg-light">
        <div className="card-body text-center">
          <img
            src={`https://randomuser.me/api/portraits/${img}`}
            className="rounded-circle mb-3"
            alt=""
          />
          <h3 className="card-title mb-3">{children}</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            accusamus nobis sed cupiditate iusto? Quibusdam.
          </p>
          <a href="#">
            <i className="bi bi-twitter text-dark mx-1"></i>
          </a>
          <a href="#">
            <i className="bi bi-facebook text-dark mx-1"></i>
          </a>
          <a href="#">
            <i className="bi bi-linkedin text-dark mx-1"></i>
          </a>
          <a href="#">
            <i className="bi bi-instagram text-dark mx-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
