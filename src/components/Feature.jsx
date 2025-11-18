function Feature({ feature }) {
  return (
    <>
      <div className="flex gap-3 items-center text-gray-600">
        {feature.icon}
        <div className="flex flex-col">
          <h2 className="font-bold text-gray-800">{feature.title}</h2>
          <p className="text-gray-500 text-sm">{feature.desc}</p>
        </div>
      </div>
    </>
  );
}

export default Feature;
