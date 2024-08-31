/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a curious learner, a lateral thinker, a firm believer in excellence and innovation but more importantly, a giver who takes pride in creating a better future. I practice as an accomplished Engineer, a dedicated Lecturer, a certified trainer and as a Researcher in the academic industry with more than a decade of grounded experience in the Engineering and Education sectors. My commitment to a better future is the bedrock for building expertise in the Renewable Energy, Energy Efficiency, Off-grid energy systems design and Rural/Remote Electrification. My passion for excellence has led to positive impact through sustainable energy solutions, evident in the delivery of successful projects and innovations in the field. ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Renewable Energy",
  "Research and Development",
  "MATLAB and Power Systems Simulation Tools",
  "Project Management",
  "Microsoft Office Suite",
  "Data Analysis and Presentation",
  "Instruction Design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Excellent Engineer and Reseacher with over 10 years of Experience in Renewable Off-grid Energy Systems";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
