import { useState } from "react";
import FeatureBox from "./FeatureBox";

function Features() {
  const [items, setItems] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your files,anywhere",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },
    {
      icon: "icon-any-file.svg",
      title: "Story any type of file",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },
    {
      icon: "icon-any-file.svg",
      title: "Story any type of filef",
      description:
        "lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },
  ]);
  return (
    <section className="pb-[150px]">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[80%] mx-auto max-w-full" >
          {items.map((item)=>(
            <FeatureBox   key={item.title} icon={item.icon} title={item.title} description ={item.description} />
          ))}
  
        </div>
      </div>
    </section>
  );
}

export default Features;
