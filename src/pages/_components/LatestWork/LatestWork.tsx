import { describe } from "node:test";
import { LatestWorkItem } from "./_components";

export default function LatestWork() {
  const latestWorks = [
    {
      id: 1,
      alt: "Latest Work 1",
      src: "/img/slider/image1.webp",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      alt: "Latest Work 2",
      src: "/img/slider/image2.webp",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      alt: "Latest Work 3",
      src: "/img/slider/image3.webp",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      alt: "Latest Work 4",
      src: "/img/slider/image4.webp",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <section className="latest-work mt-4 pt-3">
      <p className="text-uppercase color-orange">View our latest work</p>

      <div className="row">
        {latestWorks.map((latestWork) => (
          <div key={latestWork.id} className="col-sm-12 col-lg-3">
            <LatestWorkItem
              imgSrc={latestWork.src}
              imgAlt={latestWork.alt}
              subtitle={latestWork.title}
              description={latestWork.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
