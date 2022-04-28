import OverViewContent from '../../components/organisms/OverViewContent';
import SideBar from '../../components/organisms/SideBar';

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu='overview' />
      <OverViewContent/>
    </section>
  );
}
