import './page.scss';
import Banner from '@/ui/home/Banner/Banner';
import Categories from '@/ui/home/categories/Categories';
import Stats from '@/ui/home/stats/Stats';
export default function Home() {
  return (
    <>
      <main>
        <section className="banner_section">
          <Banner />
        </section>

        <section className="stats_section">
          <Stats />
        </section>

        <section className="categories_section">
          <Categories />
        </section>
      </main>
    </>
  );
}
