interface ItemConnetProps {
    title : string;
    email1: string;
    email2: string;
    alamat: string;
    telepon: string;
}
// eslint-disable-next-line react/function-component-definition
export default function ItemConnet(props : ItemConnetProps) {
  const {
    title, email1, email2, alamat, telepon,
  } = props;
  return (
    <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <a
            href="mailto: hi@store.gg"
            className="text-lg color-palette-1 text-decoration-none"
          >
            {email1}
          </a>
        </li>
        <li className="mb-6">
          <a
            href="mailto: team@store.gg"
            className="text-lg color-palette-1 text-decoration-none"
          >
            {email2}
          </a>
        </li>
        <li className="mb-6">
          <a
            href="http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan"
            className="text-lg color-palette-1 text-decoration-none"
          >
            {alamat}
          </a>
        </li>
        <li className="mb-6">
          <a
            href="tel: 02111229090"
            className="text-lg color-palette-1 text-decoration-none"
          >
            {telepon}
          </a>
        </li>
      </ul>
    </div>
  );
}
