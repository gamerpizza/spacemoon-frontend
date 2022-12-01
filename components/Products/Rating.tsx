import Image from "next/image"

import starIcon from "../../public/images/star.svg"

const Rating = () => {
  return (
    <>
      <div className="flex gap-x-1">
        <Image src={starIcon} alt="star icon" />
        <Image src={starIcon} alt="star icon" />
        <Image src={starIcon} alt="star icon" />
        <Image src={starIcon} alt="star icon" />
        <Image src={starIcon} alt="star icon" />
        <p className="font-comfortaa ml-2">4.6</p>
      </div>
    </>
  )
}

export default Rating
