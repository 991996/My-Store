import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Review({ review }) {
  function handleRate(rate) {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} size={13} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" size={13} />);
    }
    const emptyStars = totalStars - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaStar key={`empty-${i}`} size={13} className="text-gray-300" />
      );
    }

    return stars;
  }
  return (
    <div className="flex gap-7">
      <div className="w-[100px] aspect-square">
        <img
          src={review.image}
          alt="user image"
          className="w-full object-cover"
        />
      </div>

      <div className=" relative w-full flex flex-col gap-2 p-5 bg-gray-100">
        <div
          className=" absolute w-[25px] aspect-square rotate-45 bg-gray-100
                        -left-3 -z-10 rounded-bl-sm"
        ></div>
        <div className="flex flex-col gap-1.5">
          <div className="flex">{handleRate(review.rate)}</div>
          <p className="text-xs">
            <span className="font-bold text-sm">{review.name}</span> -{" "}
            {review.date}
          </p>
        </div>
        <p className="text-[13px]">{review.review}</p>
      </div>
    </div>
  );
}

export default Review;
