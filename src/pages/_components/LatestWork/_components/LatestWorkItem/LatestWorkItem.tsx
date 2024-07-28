import Image from "next/image";

type LatestWorkItemProps = {
  imgSrc: string;
  imgAlt: string;
  subtitle: string;
  description: string;
};

export default function LatestWorkItem({
  imgSrc,
  imgAlt,
  subtitle,
  description,
}: LatestWorkItemProps) {
  return (
    <div className="d-flex flex-column gap-2">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={300}
        height={180}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <span className="text-uppercase color-orange">{subtitle}</span>

      <span>{description}</span>
    </div>
  );
}
