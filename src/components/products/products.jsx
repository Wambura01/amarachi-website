import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LocallySourced from "../../assets/locally-sourced.png";
import Natural from "../../assets/natural.png";
import NonToxic from "../../assets/non-toxic.png";
import FarmGrown from "../../assets/farming.png";
import Chives from "../../assets/chives.png";
import Tarragon from "../../assets/tarragon.png";
import Oregamo from "../../assets/oregamo.png";
import Rosemary from "../../assets/rosemary.png";
import ProductsLeft from "../../assets/leaf_amarachi3.png";
import ProductsRight from "../../assets/leaf_amarachi2.png";
import bg1 from "../../assets/product-bg1.png";
import bg2 from "../../assets/product-bg2.png";

import "./products.scss";

function Products() {
  //registering the plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // getting each div into an array, looping through it and pinning it
    gsap.utils.toArray(".product").forEach((product, i) => {
      ScrollTrigger.create({
        trigger: product,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  //parallax for the left image
  useEffect(() => {
    gsap.fromTo(
      ".products-left__image",
      {
        y: 0,
      },
      {
        y: -650,
        scrollTrigger: {
          trigger: ".products-left__image",
          scrub: true,
          start: "top bottom",
          end: "bottom 20px",
        },
        duration: 1,
      }
    );
  }, []);

  //parallax for the right image
  useEffect(() => {
    gsap.fromTo(
      ".products-right__image",
      {
        y: 0,
      },
      {
        y: -450,
        scrollTrigger: {
          trigger: ".products-right__image",
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
        duration: 5,
      }
    );
  }, []);

  return (
    <div className="products-container">
      <div className="herbs chives">
        <div className="products-left__image">
          <img src={ProductsLeft} alt="background" />
        </div>
        <div className="products-right__image">
          <img src={ProductsRight} alt="background" />
        </div>
        <div className="background-1">
          <img src={bg1} alt="background" />
        </div>
        <div className="background-2">
          <img src={bg2} alt="background" />
        </div>
        <div className="default-benefits">
          <div className="benefit-container">
            <div className="icon-container">
              <img src={Natural} alt="icon" />
            </div>
            <p className="label">100% Natural</p>
          </div>
          <div className="benefit-container">
            <div className="icon-container">
              <img src={FarmGrown} alt="icon" />
            </div>
            <p className="label">100% Farm Grown</p>
          </div>
          <div className="benefit-container">
            <div className="icon-container">
              <img src={LocallySourced} alt="icon" />
            </div>
            <p className="label">100% Locally Sourced</p>
          </div>
          <div className="benefit-container">
            <div className="icon-container">
              <img src={NonToxic} alt="icon" />
            </div>
            <p className="label">100% Non-Toxic</p>
          </div>
        </div>
        <div className="product">
          <div className="herb-benefits">
            <h2 className="title">Chives</h2>
            <p className="description">
              Some of the <strong>chives</strong> benefits are:
            </p>
            <ul className="benefit-list">
              <li>Improves memory</li>
              <li>Prevent Osteoporosis</li>
              <li>Rich in vitamin C</li>
              <li>Improves bone health</li>
            </ul>
          </div>
          <div className="herb-container">
            <img src={Chives} alt="herbs" />
          </div>
        </div>
      </div>
      <div className="herbs tarragon">
        <div className="background-1">
          <img src={bg1} alt="background" />
        </div>
        <div className="background-2">
          <img src={bg2} alt="background" />
        </div>
        <div className="default-benefits">
          <div className="benefit-container">
            <div className="icon-container">
              <img src={Natural} alt="icon" />
            </div>
            <p className="label">100% Natural</p>
          </div>
          <div className="benefit-container">
            <div className="icon-container">
              <img src={FarmGrown} alt="icon" />
            </div>
            <p className="label">100% Farm Grown</p>
          </div>
          <div className="benefit-container">
            <div className="icon-container">
              <img src={LocallySourced} alt="icon" />
            </div>
            <p className="label">100% Locally Sourced</p>
          </div>
          <div className="benefit-container">
            <div className="icon-container">
              <img src={NonToxic} alt="icon" />
            </div>
            <p className="label">100% Non-Toxic</p>
          </div>
        </div>
        <div className="product">
          <div className="herb-benefits">
            <h2 className="title">Tarragon</h2>
            <p className="description">
              Some of the <strong>tarragon</strong> benefits are:
            </p>
            <ul className="benefit-list">
              <li>
                Help Decrease Blood Sugar by Improving Insulin Sensitivity
              </li>
              <li>Improve Sleep and Regulate Sleep Patterns</li>
              <li>Increase Appetite by Reducing Leptin Levels</li>
              <li>
                Help Relieve Pain Associated With Conditions Like Osteoarthritis
              </li>
              <li>
                Have Antibacterial Properties and Prevent Foodborne Illness
              </li>
            </ul>
          </div>
          <div className="herb-container">
            <img src={Tarragon} alt="herbs" />
          </div>
        </div>
      </div>
      <div className="herbs oregamo">
        <div className="background-1">
          <img src={bg1} alt="background" />
        </div>
        <div className="background-2">
          <img src={bg2} alt="background" />
        </div>
        <div className="default-benefits">
          <div className="benefit-container">
            <div className="icon-container">
              <img src={Natural} alt="icon" />
            </div>
            <p className="label">100% Natural</p>
          </div>
          <div className="benefit-container">
            <div className="icon-container">
              <img src={FarmGrown} alt="icon" />
            </div>
            <p className="label">100% Farm Grown</p>
          </div>
          <div className="benefit-container">
            <div className="icon-container">
              <img src={LocallySourced} alt="icon" />
            </div>
            <p className="label">100% Locally Sourced</p>
          </div>
          <div className="benefit-container">
            <div className="icon-container">
              <img src={NonToxic} alt="icon" />
            </div>
            <p className="label">100% Non-Toxic</p>
          </div>
        </div>
        <div className="product">
          <div className="herb-benefits">
            <h2 className="title">Oregamo</h2>
            <p className="description">
              Some of the <strong>oregamo</strong> benefits are:
            </p>
            <ul className="benefit-list">
              <li>Rich in Antioxidants</li>
              <li>May Help Fight Bacteria</li>
              <li>Could Have Anti-Cancer Properties</li>
              <li>May Help Reduce Viral Infection</li>
              <li>Could Decrease Inflammation</li>
            </ul>
          </div>
          <div className="herb-container">
            <img src={Oregamo} alt="herbs" />
          </div>
        </div>
      </div>
      <div className="herbs rosemary">
        <div className="background-1">
          <img src={bg1} alt="background" />
        </div>
        <div className="background-2">
          <img src={bg2} alt="background" />
        </div>
        <div className="default-benefits">
          <div className="benefit-container">
            <div className="icon-container">
              <img src={Natural} alt="icon" />
            </div>
            <p className="label">100% Natural</p>
          </div>
          <div className="benefit-container">
            <div className="icon-container">
              <img src={FarmGrown} alt="icon" />
            </div>
            <p className="label">100% Farm Grown</p>
          </div>
          <div className="benefit-container">
            <div className="icon-container">
              <img src={LocallySourced} alt="icon" />
            </div>
            <p className="label">100% Locally Sourced</p>
          </div>
          <div className="benefit-container">
            <div className="icon-container">
              <img src={NonToxic} alt="icon" />
            </div>
            <p className="label">100% Non-Toxic</p>
          </div>
        </div>
        <div className="product">
          <div className="herb-benefits">
            <h2 className="title">Rosemary</h2>
            <p className="description">
              Some of the <strong>rosemary</strong> benefits are:
            </p>
            <ul className="benefit-list">
              <li>
                High in antioxidant, antimicrobial, and anti-inflammatory
                compounds
              </li>
              <li>Help lower your blood sugar</li>
              <li>Improve your mood and memory</li>
              <li>May support brain health</li>
              <li>May protect vision and eye health</li>
            </ul>
          </div>
          <div className="herb-container">
            <img src={Rosemary} alt="herbs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
