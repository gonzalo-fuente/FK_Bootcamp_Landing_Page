import Instructor from "./Instructor";

const instructors = [
  {
    name: "Juan Pérez",
    img: "men/8.jpg",
  },
  {
    name: "Diana Cortez",
    img: "women/5.jpg",
  },
  {
    name: "Pedro Araujo",
    img: "men/15.jpg",
  },
  {
    name: "Maria Santi",
    img: "women/1.jpg",
  },
];

const Instructors = () => {
  return (
    <section id="instructors" className="p-5 bg-primary">
      <div className="container">
        <h2 className="text-center text-white mt-5">Our Instructors</h2>
        <p className="lead text-center text-white mb-5">
          Our instructors all have 5+ years working as a web developer in the
          industry
        </p>
        <div className="row g-4">
          {instructors.map((instructor, index) => (
            <Instructor img={instructor.img} key={index}>
              {instructor.name}
            </Instructor>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
