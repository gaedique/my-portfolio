interface LogoIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function LogoIcon({
  width = 40,
  height = 40,
  className,
}: LogoIconProps) {
  const aspectRatio = 196 / 162;
  const calculatedHeight = Math.round(width * aspectRatio);
  const finalHeight = height || calculatedHeight;

  return (
    <svg
      width={width}
      height={finalHeight}
      viewBox="0 0 162 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M162 196H146V87H162V196Z" fill="white" />
      <path
        d="M132 87V167H116V103H89V87H132Z"
        fill="url(#paint0_linear_638_128)"
      />
      <path
        d="M71.6704 1.70367C88.517 -1.64067 105.972 -0.0394559 121.928 6.31499C137.885 12.6694 151.662 23.5054 161.597 37.5152L148.859 46.5484C135.581 27.4798 113.498 14.9996 88.5005 14.9996C47.9076 14.9996 15.0006 47.9068 15.0005 88.4996C15.0005 129.092 47.9075 162 88.5005 162C101.448 162 113.613 158.65 124.178 152.773L131.988 166.93C116.949 175.226 99.8307 178.993 82.6987 177.777C65.5665 176.561 49.1514 170.413 35.435 160.076C21.7189 149.739 11.2867 135.654 5.39695 119.52C-0.492862 103.386 -1.58896 85.8926 2.24167 69.15C6.07234 52.4072 14.6665 37.1304 26.9858 25.1626C39.3051 13.1951 54.824 5.04799 71.6704 1.70367Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_638_128"
          x1="132"
          y1="94"
          x2="124.5"
          y2="147.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
