import { CapabilityItem } from "./_components";

export default function Capability() {
  return (
    <section className="capability mt-4 pt-3">
      <div className="row">
        <div className="col-sm-12 col-lg-3">
          <CapabilityItem
            title="Web Design"
            subtitle="Lorem ipsum dolor sit amet."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro, a dolorem voluptatem architecto repellendus numquam aliquam, optio culpa blanditiis quasi nihil, neque omnis? Molestias, iusto."
          />
        </div>
        <div className="col-sm-12 col-lg-3">
          <CapabilityItem
            title="Web Development"
            subtitle="Lorem ipsum dolor sit amet."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro, a dolorem voluptatem architecto repellendus numquam aliquam, optio culpa blanditiis quasi nihil, neque omnis? Molestias, iusto."
          />
        </div>
        <div className="col-sm-12 col-lg-3">
          <CapabilityItem
            title="Print Design"
            subtitle="Lorem ipsum dolor sit amet."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro, a dolorem voluptatem architecto repellendus numquam aliquam, optio culpa blanditiis quasi nihil, neque omnis? Molestias, iusto."
          />
        </div>
        <div className="col-sm-12 col-lg-3">
          <CapabilityItem
            title="Digital Media"
            subtitle="Lorem ipsum dolor sit amet."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro, a dolorem voluptatem architecto repellendus numquam aliquam, optio culpa blanditiis quasi nihil, neque omnis? Molestias, iusto."
          />
        </div>
      </div>
    </section>
  );
}
