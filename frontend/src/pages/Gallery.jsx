import React from "react";
import { galleryImages } from "../data/mockData";

const Gallery = () => {
  return (
    <div className="min-vh-100 pt-5">

      {/* HEADER */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Gallery</h1>
          <p className="text-light fs-5">
            A visual journey through our culinary creations
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="col-12 col-sm-6 col-md-4">

                <div
                  className="position-relative rounded overflow-hidden shadow-lg"
                  style={{ height: "280px", cursor: "pointer" }}
                  tabIndex={0}
                  aria-label={image.alt}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-100 h-100 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className="position-absolute bottom-0 start-0 end-0 p-3"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    }}
                  >
                    <p className="h5 fw-semibold text-white mb-0">{image.alt}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;
