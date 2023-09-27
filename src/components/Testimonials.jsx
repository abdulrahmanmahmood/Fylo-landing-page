import { useState } from "react";
import TestimonialBox from "./TestimonialBox";

function Testimonials() {
  const [testData, setTestData] = useState([
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique enim quibusdam aperiam voluptas officiis error ipsa rerum ad voluptatibus. Corrupti expedita voluptas eius inventore alias a, voluptates in dicta sit?",
      image: "profile-1.jpg",
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique enim quibusdam aperiam voluptas officiis error ipsa rerum ad voluptatibus. Corrupti expedita voluptas eius inventore alias a, voluptates in dicta sit?",
      image: "profile-2.jpg",
      position: "Founder & CEO, Huddle",
      name: "Mohamed",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique enim quibusdam aperiam voluptas officiis error ipsa rerum ad voluptatibus. Corrupti expedita voluptas eius inventore alias a, voluptates in dicta sit?",
      image: "profile-3.jpg",
      position: "Founder & CEO, Huddle",
      name: "Eman",
    },
  ]);
  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px]">
          <img src="/src/assets/images/bg-quotes.png" alt="qoute" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
          {testData.map((item) => (
            <TestimonialBox
              key={item.id}
              description={item.description}
              image={item.image}
              position={item.position}
              name={item.name}
              
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
