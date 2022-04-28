interface FooterItemProps {
  title: string;
  subtitle1 : string;
  subtitle2 : string;
  subtitle3 : string;
  subtitle4 ? :string;
}
// eslint-disable-next-line react/function-component-definition
export default function FooterItem(props : Partial<FooterItemProps>) {
  const {
    title, subtitle1, subtitle2, subtitle3, subtitle4,
  } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
            {subtitle1}
          </a>
        </li>
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
            {subtitle2}
          </a>
        </li>
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
            {subtitle3}
          </a>
        </li>
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
            {subtitle4}
          </a>
        </li>
      </ul>
    </div>
  );
}
