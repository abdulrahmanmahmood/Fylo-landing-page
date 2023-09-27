function TestimonialBox({ name, image, description, position }) {
  return (
    <div className="text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]">
      <p className="text-sm font-normal tracking-[.8px] mb-[30px]">{description}</p>
      <div className="flex flex-row gap-[15px] items-center">
        <img
          src={`../../src/assets/images//${image}`}
          alt="TestimonialBox image"
          className="w-[50px] h-[50px] rounded-full object-contain"
        />
        <div>
              <strong className="block mb-[5px]">{name}</strong>
              <p className="font-normal text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialBox;
