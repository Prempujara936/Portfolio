import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* description */}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            veritatis quasi atque labore! Quos amet fugit natus, rem esse
            mollitia consequuntur. Aperiam neque ab sed earum dolore nemo
            repudiandae accusantium. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Impedit possimus vero ipsam labore sunt ratione
            illo accusamus rem nemo ullam officia, ad ipsum deserunt ipsa, eum
            dignissimos eaque. Ut, repellat.
          </p>
          <button>Hire Me </button>
        </div>
        {/* item */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code "></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                soluta harum illum at eos ullam sint ea eius beatae, esse
                architecto eligendi! Quisquam voluptatum minima nemo. Eaque
                tempora dicta sequi!
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop "></i>
            <div className="item-desc">
              <h3>Desktop Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                soluta harum illum at eos ullam sint ea eius beatae, esse
                architecto eligendi! Quisquam voluptatum minima nemo. Eaque
                tempora dicta sequi!
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt "></i>
            <div className="item-desc">
              <h3>U/X Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                soluta harum illum at eos ullam sint ea eius beatae, esse
                architecto eligendi! Quisquam voluptatum minima nemo. Eaque
                tempora dicta sequi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
