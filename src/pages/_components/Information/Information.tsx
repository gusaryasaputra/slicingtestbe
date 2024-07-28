import { Title } from "../../_components";
import { FaEnvelope } from "react-icons/fa";

export default function Information() {
  return (
    <section className="information mt-4 pt-3">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <Title title="Welcome" subtitle="Why we here and what we do" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quia explicabo laudantium eius quo quisquam alias magni, incidunt
            voluptate ea tempore saepe natus, molestiae perspiciatis
            repellendus? Fuga aspernatur, vero consequatur porro, at, nulla id
            corrupti enim sit sed voluptas omnis totam? Alias totam temporibus
            quae ratione consequuntur iste facere magni...
          </p>
        </div>
        <div className="col-sm-12 col-lg-6">
          <Title title="Stay Updated" subtitle="Join our mailing list" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            suscipit dolore? Magni distinctio iste facilis in, nobis sapiente
            magnam provident enim esse. Illum, nam perferendis?
          </p>
          <div className="d-flex align-items-center">
            <input
              placeholder="you@yourdomain.com"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
            />
            <FaEnvelope size={24} className="icon-form" color="gray" />
          </div>
        </div>
      </div>
    </section>
  );
}
