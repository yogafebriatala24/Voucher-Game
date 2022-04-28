import GameItem from '../../molecules/GameItem';

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          {' '}
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem
            title="Super Mechs"
            subtitle="Mobile"
            img="Thumbnail-1"
          />
          <GameItem
            title="Call of Duty: Modern"
            subtitle="Mobile"
            img="Thumbnail-2"
          />
          <GameItem
            title="Valorant"
            subtitle="Dekstop"
            img="Thumbnail-3"
          />
          <GameItem
            title="Clash of Clan"
            subtitle="Mobile"
            img="Thumbnail-4"
          />
          <GameItem
            title="Mobile Legend"
            subtitle="Mobile"
            img="Thumbnail-5"
          />
        </div>
      </div>
    </section>
  );
}
