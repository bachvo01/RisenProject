import React from "react";
import "./branding.scss";
import mascotGreen from "../../images/logo/mascot-green.png";
import mascotBlack from "../../images/logo/mascot-black.png";
import mascotWhite from "../../images/logo/mascot-white.png";
import horizontalGreen from "../../images/logo/horizontal-green.png";
import horizontalWhite from "../../images/logo/horizontal-white.png";
import horizontalBlack from "../../images/logo/horizontal-black.png";
import verticalGreen from "../../images/logo/vertical-green.png";
import verticalWhite from "../../images/logo/vertical-white.png";
import verticalBlack from "../../images/logo/vertical-black.png";
import horizontalSpacing from "../../images/logo/horizontal-spacing.png";
import verticalSpacing from "../../images/logo/vertical-spacing.png";
function Branding() {
  const ourLogoSVG = "#";
  const ourLogoPNG = "#";
  return (
    <div className="branding-container">
      <div className="brand-container">
        <div className="text-container">
          <h1>BRAND</h1>
          <p>
            We’re a playful and fun brand that doesn't take ourselves too
            seriously. That said, we're keen on keeping things quality. If you're
            gonna use our art for something please keep it tasteful and send it
            our way for approval.
          </p>
        </div>
        
        <div className="logo-image-container">
          <div className="image-container">
            <img src={mascotBlack} alt="mascot-green"></img>
          </div>
          
        </div>
        
      </div>
      <div className="logo-container">
        <div className="our-logo-container">
          <h1>Our logo</h1>
          <p>
            Please do not edit, change, distort, recolor, or reconfigure the
            Risen logo.
          </p>
          <div className="our-logo-flex">
            <div className="our-logo-flexitem">
              <img src={horizontalWhite} alt="horizontal-green"></img>
              <a href={ourLogoSVG}>
                <div className="svg">.svg</div>
              </a>
              <a href={ourLogoPNG}>
                <div className="png">.png</div>
              </a>
            </div>
            <div className="our-logo-flexitem">
              <img src={horizontalBlack} alt="horizontal-green"></img>
              <a href={ourLogoSVG}>
                <div className="svg">.svg</div>
              </a>
              <a href={ourLogoPNG}>
                <div className="png">.png</div>
              </a>
            </div>
            <div className="our-logo-flexitem">
              <img src={horizontalGreen} alt="horizontal-green"></img>
              <a href={ourLogoSVG}>
                <div className="svg">.svg</div>
              </a>
              <a href={ourLogoPNG}>
                <div className="png">.png</div>
              </a>
            </div>
          </div>
        </div>

        <div className="alt-logo-container">
          <h1>Alternate Logos</h1>
          <p>
            Use these only when the Risen brand is clearly visible or has been
            well established elsewhere on the page or in the design. (When in
            doubt, use the other one.)
          </p>
          {/* <h2>Mark only</h2> */}
          <div className="alt-logo-flex">
            <div className="alt-logo-flexitem">
              <img
                src={mascotWhite}
                alt="horizontal-green"
                className="alt1"
              ></img>
              <a href={ourLogoSVG}>
                <div className="svg">.svg</div>
              </a>
              <a href={ourLogoPNG}>
                <div className="png">.png</div>
              </a>
            </div>
            <div className="alt-logo-flexitem">
              <img
                src={mascotBlack}
                alt="horizontal-green "
                className="alt2"
              ></img>
              <a href={ourLogoSVG}>
                <div className="svg">.svg</div>
              </a>
              <a href={ourLogoPNG}>
                <div className="png">.png</div>
              </a>
            </div>
            <div className="alt-logo-flexitem">
              <img
                src={mascotGreen}
                alt="horizontal-green"
                className="alt3"
              ></img>
              <a href={ourLogoSVG}>
                <div className="svg">.svg</div>
              </a>
              <a href={ourLogoPNG}>
                <div className="png">.png</div>
              </a>
            </div>

            <div className="alt-logo-flexitem">
              <img
                src={verticalWhite}
                alt="horizontal-green"
                className="alt4"
              ></img>
              <a href={ourLogoSVG}>
                <div className="svg">.svg</div>
              </a>
              <a href={ourLogoPNG}>
                <div className="png">.png</div>
              </a>
            </div>
            <div className="alt-logo-flexitem">
              <img
                src={verticalBlack}
                alt="horizontal-green"
                className="alt5"
              ></img>
              <a href={ourLogoSVG}>
                <div className="svg">.svg</div>
              </a>
              <a href={ourLogoPNG}>
                <div className="png">.png</div>
              </a>
            </div>
            <div className="alt-logo-flexitem">
              <img
                src={verticalGreen}
                alt="horizontal-green"
                className="alt6"
              ></img>
              <a href={ourLogoSVG}>
                <div className="svg">.svg</div>
              </a>
              <a href={ourLogoPNG}>
                <div className="png">.png</div>
              </a>
            </div>
          </div>
        </div>

        <div className="spacing-container">
          <h1>Spacing</h1>
          <p>
            Please do not edit, change, distort, recolor, or reconfigure the
            Risen logo.
          </p>
          <div className="spacing-flex">
            <div className="spacing-flexitem spacing1">
              <img
                src={horizontalSpacing}
                alt="horizontal-green"
                className="spacing-img1"
              ></img>
            </div>
            <div className="spacing-flexitem spacing2">
              <img
                src={verticalSpacing}
                alt="horizontal-green"
                className="spacing-img2"
              ></img>
            </div>
          </div>
        </div>

        <div className="color-container">
          <h1>Color</h1>
          <div className="color-flex">
            <div className="color-flexitem color-blurple">
              <h2>Blurple</h2>
              <div>#5865F2</div>
              <div>CMYK 64, 58, 0, 5</div>
            </div>
            <div className="color-flexitem color-green">
              <h2>Green</h2>
              <div>#57F287</div>
              <div>CMYK 50, 0, 55, 0</div>
            </div>
            <div className="color-flexitem color-yellow">
              <h2>Yellow</h2>
              <div>#FEE75C</div>
              <div>CMYK 0, 5, 80, 0</div>
            </div>
            <div className="color-flexitem color-fuchsia">
              <h2>Fuchsia</h2>
              <div>#EB459E</div>
              <div>CMYK 0, 90, 0 0</div>
            </div>
            <div className="color-flexitem color-red">
              <h2>Red</h2>
              <div>#ED4245</div>
              <div>CMYK 0, 90, 65, 0</div>
            </div>
            <div className="color-flexitem color-white">
              <h2>White</h2>
              <div>#FFFFFF</div>
              <div>CMYK 0, 0, 0, 0</div>
            </div>
            <div className="color-flexitem color-black">
              <h2>Black</h2>
              <div>#000000</div>
              <div>CMYK 35, 0, 0, 100</div>
            </div>
          </div>
        </div>

        <div className="more-container">
          <h1>Looking for more?</h1>
          <p>Download the full Risen brand guidelines</p>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
}

export default Branding;
