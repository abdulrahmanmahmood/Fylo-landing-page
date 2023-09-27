function FeatureBox({ title, icon, description }) {
  return (
    <div className=" text-white element-center  flex-col text-center">
      <img
        src={`/src/assets/images/${icon}`}
        alt="img-icon"
        className="w-[80px] h-[80px] object-contain"
      />
      <h4 className="text-xl font-semibold my-[15px]">{title}</h4>
      <p className="font-normal text-sm">{description}</p>
    </div>
  );
}

export default FeatureBox;
