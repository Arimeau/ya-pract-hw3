import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsList/CardsList";
import { Promo } from "./components/Promo/Promo";
import { getGamesByCategory } from "./data/data.utils"

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main className="main">
      <Banner />
      <CardsList id="new" title="Новинки" data={popularGames}/>
      <CardsList id="popular" title="Популярные" data={popularGames}/>
      <Promo />
    </main>
  );
}
