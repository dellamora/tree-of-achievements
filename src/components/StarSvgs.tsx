import type { SVGProps } from "react";

type StarSvgDefinition = {
  id: string;
  label: string;
  src: string;
  width: number;
  height: number;
};

type StarSvgProps = Omit<SVGProps<SVGSVGElement>, "viewBox"> & {
  title?: string;
};

const starSvgDefinitions = [
  { id: "image-3", label: "Star image 3", src: "/image%203.svg", width: 280, height: 254 },
  { id: "image-4-2", label: "Star image 4", src: "/image%204%20(2).svg", width: 150, height: 142 },
  { id: "image-5", label: "Star image 5", src: "/image%205.svg", width: 166, height: 186 },
  { id: "image-7", label: "Star image 7", src: "/image%207.svg", width: 162, height: 176 },
  { id: "image-8", label: "Star image 8", src: "/image%208.svg", width: 168, height: 156 },
  { id: "image-9", label: "Star image 9", src: "/image%209.svg", width: 214, height: 182 },
  { id: "image-10", label: "Star image 10", src: "/image%2010.svg", width: 170, height: 194 },
  { id: "image-11", label: "Star image 11", src: "/image%2011.svg", width: 172, height: 168 },
  { id: "image-12", label: "Star image 12", src: "/image%2012.svg", width: 146, height: 168 },
  { id: "image-13", label: "Star image 13", src: "/image%2013.svg", width: 138, height: 116 },
  { id: "image-14", label: "Star image 14", src: "/image%2014.svg", width: 90, height: 86 },
] as const satisfies readonly StarSvgDefinition[];

function createStarSvg(definition: StarSvgDefinition) {
  return function StarSvg({ title, ...props }: StarSvgProps) {
    const titleId = title ? `${definition.id}-title` : undefined;

    return (
      <svg
        viewBox={`0 0 ${definition.width} ${definition.height}`}
        role={title ? "img" : undefined}
        aria-hidden={title ? undefined : true}
        aria-labelledby={titleId}
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <image
          href={definition.src}
          width={definition.width}
          height={definition.height}
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    );
  };
}

export const StarImage3 = createStarSvg(starSvgDefinitions[0]);
export const StarImage4 = createStarSvg(starSvgDefinitions[1]);
export const StarImage5 = createStarSvg(starSvgDefinitions[2]);
export const StarImage7 = createStarSvg(starSvgDefinitions[3]);
export const StarImage8 = createStarSvg(starSvgDefinitions[4]);
export const StarImage9 = createStarSvg(starSvgDefinitions[5]);
export const StarImage10 = createStarSvg(starSvgDefinitions[6]);
export const StarImage11 = createStarSvg(starSvgDefinitions[7]);
export const StarImage12 = createStarSvg(starSvgDefinitions[8]);
export const StarImage13 = createStarSvg(starSvgDefinitions[9]);
export const StarImage14 = createStarSvg(starSvgDefinitions[10]);

export const starSvgComponents = [
  StarImage3,
  StarImage4,
  StarImage5,
  StarImage7,
  StarImage8,
  StarImage9,
  StarImage10,
  StarImage11,
  StarImage12,
  StarImage13,
  StarImage14,
];
