import { FaClipboard } from "react-icons/fa";
import { Divider, Title } from "../../../../_components";

type CapabilityItemProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function CapabilityItem({
  title,
  subtitle,
  description,
}: CapabilityItemProps) {
  return (
    <div>
      <Title title={title} subtitle={subtitle} />
      <Divider />

      <div className="mt-2">
        <div className="float-start p-2">
          <FaClipboard size={50} />
        </div>
        <p>{description}</p>
      </div>

      <button type="button" className="btn btn-outline-secondary">
        Read More
      </button>
    </div>
  );
}
