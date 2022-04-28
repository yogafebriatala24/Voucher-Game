import Link from 'next/link';
import cx from 'classnames';

interface ButtonTabProps {
    title : string;
    active : boolean;

}
export default function ButtonTab(props:ButtonTabProps) {
    const {title, active} = props;
    const btnClass = cx({
        'btn btn-status rounded-pill text-sm me-3' : true,
        'btn-active' : active
    })
  return (
    <Link href="/member/transactions/detail">
      <a
        data-filter="*"
        className={btnClass}
      >
        {title}
      </a>
    </Link>
  );
}
