import Button from "@restart/ui/esm/Button";
import React from "react";
import "./TopSelling.css";

const TopSeeling = () => {
  return (
    <div>
      <div className="container bg-dark p-4 mb-4">
        <div className="row">
          <div className="col-lg-4 text-success">
            <h4>Featured Products</h4>
            <hr />
            <div>
              <h6>2.7KGHz Drone Camera</h6> <p>price:10000/-</p>
              <img
                className="top-selling-height"
                src="https://dronenerds.s3-us-west-2.amazonaws.com/webimages/djifpv.gif"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-4 text-success">
            <h4>Top Selling Products</h4>
            <hr />
            <div>
              <h6>Instant Camera</h6>
              <p>price:10000/-</p>
              <img
                className="top-selling-height"
                src="https://photographycourse.net/wp-content/uploads/2020/07/jordan-bauer-sSxH9bDW2w4-unsplash-600x348.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-4 text-success">
            <h4>On-sale Products</h4>
            <hr />
            <div>
              <h6>Canon EOS R5 </h6>
              <p>price:10000/-</p>
              <img
                className="top-selling-height"
                src="https://cdn.mos.cms.futurecdn.net/fjNxB4UTBgV8WSxLNKstqT-970-80.jpg.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="row  recomanded-tex bg-dark">
        <h4 className="pt-4">Recomanded For You</h4>
        <hr />
        <div className="col-lg-3">
          <p>Panasonic "AG-UX180 4k Premium Professiona Camcorder</p>
          <p>price:10000/-</p>
          <img
            src="https://i2.wp.com/camerabazar.net/wp-content/uploads/2021/01/sony_pxw_x200_a.jpg?resize=300%2C300&ssl=1"
            alt=""
          />{" "}
          <br />
          <Button className="recomanded-button">Add to cart</Button>
          <p>Panasonic "AG-UX180 4k Premium Professiona Camcorder</p>
          <p>price:10000/-</p>
          <img
            src="https://i0.wp.com/camerabazar.net/wp-content/uploads/2021/01/Sony-PXW-FS7-Mk.II-4K-XDCAM-Super-35mm-Camcorder.jpg?resize=300%2C300&ssl=1"
            alt=""
          />
          <br />
          <Button className="recomanded-button">Add to cart</Button>
        </div>
        <div className="col-lg-3">
          <p>Canon XA35 Professional Camcorder Canon </p>

          <p>price:10000/-</p>
          <img
            src="https://i0.wp.com/camerabazar.net/wp-content/uploads/2021/01/Panasonic-HC-MDH2-a.jpg?resize=300%2C300&ssl=1"
            alt=""
          />

          <Button className="recomanded-button">Add to cart</Button>
          <p>Canon XA35 Professional Camcorder Canon</p>

          <p>price:10000/-</p>
          <img
            src="https://i1.wp.com/camerabazar.net/wp-content/uploads/2021/01/Canon-EOS-250D-DSLR-Camera-Body-Only.jpg?resize=300%2C300&ssl=1"
            alt=""
          />
          <br />
          <Button className="recomanded-button">Add to cart</Button>
        </div>
        <div className="col-lg-3">
          <p>Sony HxR-MC2500 Shoulder mount AVCHD Camcorder</p>

          <p>price:10000/-</p>
          <img
            src="https://i2.wp.com/camerabazar.net/wp-content/uploads/2021/01/sony_pxw-fs5_xdcam_super_35_camera_system_with_zoom_lens_1029231.jpg?resize=300%2C300&ssl=1"
            alt=""
          />
          <br />
          <Button className="recomanded-button">Add to cart</Button>
          <p>Sony HxR-MC2500 Shoulder mount AVCHD Camcorde</p>

          <p>price:10000/-</p>
          <img
            src="https://i1.wp.com/camerabazar.net/wp-content/uploads/2021/01/Panasonic-aj-px380-p2-hd-avc-ultra-camcorder-2-1-1.jpg?resize=300%2C300&ssl=1"
            alt=""
          />
          <br />
          <Button className="recomanded-button">Add to cart</Button>
        </div>
        <div className="col-lg-3">
          <p>Sony PXW-X200 XDCAM Handheld Camcorder</p>

          <p>price:10000/-</p>
          <img
            className="img w-100%"
            src="https://i1.wp.com/camerabazar.net/wp-content/uploads/2021/01/Sony-FDR-AX100-4K-Ultra-HD-Camcorder.jpg?resize=300%2C300&ssl=1"
            alt=""
          />
          <br />
          <Button className="recomanded-button">Add to cart</Button>
          <p>Sony HxR-MC2500 Shoulder mount AVCHD Camcorder</p>

          <p>price:10000/-</p>
          <img
            src="https://i0.wp.com/camerabazar.net/wp-content/uploads/2021/01/Sony-Alpha-a6400-Mirrorless-Digital-Camera-Body-Only.jpg?resize=300%2C300&ssl=1"
            alt=""
          />
          <br />
          <Button className="recomanded-button">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default TopSeeling;
