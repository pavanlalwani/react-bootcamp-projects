import React from "react";
import Card from "./Card"

const CardSection = () => (
  <section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">We love new friends!</h2>
      <div className="row">
        <div className="col-4">
        <Card title="Basketball" buttontext="Play!"></Card>
        </div>
        <div className="col-4">
        <Card title="Football" buttontext="Play!"></Card>
        </div>
        <div className="col-4">
        <Card title="Volleyball" buttontext="Play!"></Card>
        </div>
      </div>
    </div>
  </section>
);

export default CardSection;
