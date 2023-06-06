import React from "react";
import Image from "next/image";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

interface IProfilePicProps {
  size: "small" | "medium" | "large";
}

const ProfilePic: React.FC<IProfilePicProps> = ({ size }) => {
  const profilePicVariants = cva({
    variants: {
      size: {
        small: "w-24 aspect-square rounded-full",
        medium: "w-64 aspect-square rounded-full",
        large: "w-96 aspect-square rounded-full",
      },
    },
    defaultVariants: {
      size: "small",
    },
  });
  console.log(profilePicVariants());
  const sizes = {
    small: 100,
    medium: 250,
    large: 600,
  };

  return (
    <Image
      src="https://raw.githubusercontent.com/alexrusselldev/alexrusselldev/master/images/pp-coco-cropped.jpeg"
      alt="Image of the author"
      width={sizes[size]}
      height={sizes[size]}
      className={twMerge(profilePicVariants())}
    />
  );
};

export default ProfilePic;
