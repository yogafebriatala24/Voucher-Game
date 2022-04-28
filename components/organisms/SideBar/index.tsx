import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings'
}
export default function SideBar(props:SideBarProps) {
  const {activeMenu} = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="iconmenuoverview"
            href="/member"
            active={activeMenu === "overview"}
          />
          <MenuItem
            title="Transactions"
            icon="iconmenutransaction"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" icon="iconmenumessage" href="/member" />
          <MenuItem title="Card" icon="iconmenucard" href="/member" />
          <MenuItem title="Rewards" icon="iconmenureward" href="/member" />
          <MenuItem
            title="Settings"
            icon="iconmenusetting"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Log Out" icon="iconmenulogout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
