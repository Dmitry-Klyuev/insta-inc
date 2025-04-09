type IconProps = {
  iconId: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  className?: string;
};

export const IconSvg = ({
  iconId,
  width,
  height,
  stroke,
  fill,
  className,
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width || '24'}
      height={height || '24'}
      viewBox={`0 0 24 24`}
      fill={fill ?? 'currentColor'}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`/public/sprite/sprite-icons.svg#${iconId}`} />
    </svg>
  );
};
