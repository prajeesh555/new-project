import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { menuItems, stats, testimonials } from "../data/mockData";
import "./Home.css";

const Home = () => {
  const featuredItems = menuItems.filter((item) => item.featured);

  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          height: "100vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1616671276441-2f2c277b8bf9)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>

        <div className="position-relative text-white container fade-up">
          <p className="text-uppercase mb-3 small tracking-wide text-accent">
            Delicious Cafe
          </p>

          <h1 className="display-3 fw-bold mb-4">
            Sweet Treats, <br />
            <span className="text-accent">Perfect Eats</span>
          </h1>

          <p className="fs-5 text-light mb-5 mx-auto" style={{ maxWidth: 600 }}>
            Experience the art of culinary excellence with handcrafted artisan
            breads and gourmet delights.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/menu" className="text-decoration-none">
              <button className="btn btn-accent px-4 py-2 fw-semibold zoom-btn d-flex align-items-center gap-2">
                Shop Now <ArrowRight size={18} />
              </button>
            </Link>

            <Link to="/about" className="text-decoration-none">
              <button className="btn btn-outline-light px-4 py-2 fw-semibold zoom-btn">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* TOP PRODUCTS */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-3">Top Products</h2>
          <div className="bar mx-auto mb-5"></div>

          <div className="row g-4">
            {featuredItems.map((item) => (
              <div className="col-12 col-md-4 fade-in" key={item.id}>
                <div className="card bg-dark text-white rounded shadow-lg hover-up h-100">
                  <div className="overflow-hidden" style={{ height: "260px" }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-100 h-100 object-fit-cover img-zoom"
                    />
                  </div>

                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h3 className="h4 fw-bold">{item.name}</h3>
                      <p className="text-secondary small">{item.description}</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="text-accent h4 fw-bold">${item.price}</span>

                      <Link to="/menu" className="text-decoration-none">
                        <button className="btn btn-accent btn-sm zoom-btn">
                          Add
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row text-center g-4">
            {stats.map((stat, index) => (
              <div className="col-6 col-md-3 fade-in" key={index}>
                <div className="display-4 mb-2">{stat.icon}</div>
                <div className="h3 fw-bold text-accent">{stat.value}</div>
                <p className="text-secondary small">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-3">What Our Guests Say</h2>
          <div className="bar mx-auto mb-5"></div>

          <div className="row g-4">
            {testimonials.map((test) => (
              <div className="col-12 col-md-4 fade-in" key={test.id}>
                <div className="p-4 bg-light rounded shadow-sm h-100 d-flex flex-column">
                  <div className="d-flex mb-2">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="text-accent" fill="#D4724B" />
                    ))}
                  </div>

                  <p className="fst-italic text-secondary flex-grow-1">"{test.text}"</p>
                  <p className="fw-semibold mt-3">{test.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
