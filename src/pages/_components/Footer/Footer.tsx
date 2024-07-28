import { Title, Divider } from "../../_components";

export default function Footer() {
  return (
    <footer className="footer my-4 pt-3">
      <div className="row">
        <div className="col-sm-12 col-lg-3">
          <Title title="Partners" />
          <Divider />
          <div className="d-flex flex-column mt-2 color-blue">
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className="col-sm-12 col-lg-3">
          <Title title="Categories" />
          <Divider />
          <div className="d-flex flex-column mt-2 color-blue">
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className="col-sm-12 col-lg-3">
          <Title title="Resources" />
          <Divider />
          <div className="d-flex flex-column mt-2 color-blue">
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor sit amet.</span>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <div className="col-sm-12 col-lg-3">
          <Title title="News & Updated" />
          <Divider />
          <div className="d-flex flex-column mt-2 color-blue">
            <div className="d-flex align-items-center gap-1">
              <span className="color-orange">24/04/11</span>
              <span className="color-orange">-</span>
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <span className="color-orange">10/02/11</span>
              <span className="color-orange">-</span>
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <span className="color-orange">14/02/11</span>
              <span className="color-orange">-</span>
              <span>Lorem ipsum dolor sit</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
