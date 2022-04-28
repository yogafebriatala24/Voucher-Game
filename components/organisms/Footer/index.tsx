import Image from 'next/image';
import FooterItem from '../../molecules/FooterItem';
import ItemConnet from '../../molecules/FooterItem/ItemConnet';

// eslint-disable-next-line react/function-component-definition
export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/footer.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                {' '}
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItem
                  title="Company"
                  subtitle1="About Us"
                  subtitle2="Press Release"
                  subtitle3="Information"
                  subtitle4="Privacy & Policy"
                />
                <FooterItem
                  title="Support"
                  subtitle1="Refund Policy"
                  subtitle2="Unlock Rewards"
                  subtitle3="Live Chatting"
                />
                <ItemConnet
                  title="Connect"
                  email1="hi@store.gg"
                  email2="team@store.gg"
                  alamat="Pasific 12, Jakarta Selatan"
                  telepon="021 - 1122 - 9090"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
