import Image from "next/image";

import starIcon from "../../public/images/star.svg";

const Rating = (props:any) => {

  return (
    <>

      <div className="flex gap-x-1">
        <button className="flex" onClick={() => props.clickedRating(props.stars)}>
          {[...Array(props.stars)].map((e:any, i:any) => <Image src={starIcon} alt="star icon" />)}
          <p className="font-comfortaa ml-2">{props.stars}</p>
        </button>
      </div>
    </>
  );
};

export default Rating;
