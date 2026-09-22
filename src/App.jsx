import Countdown from "./Component/Countdown/Countdown";
import Events from "./Component/Events/Events";
import Quote from "./Component/Quote/Quote";
import ScratchCard from "./Component/ScratchCard/ScratchCard";
import ThankYou from "./Component/ThankYou/ThankYou";
import WeddingHome from "./Component/WeddingHome/WeddingHome";

function App() {
  return (
    <SmoothScroll>
      <main className="w-full overflow-x-hidden">
        <WeddingHome />
        <ScratchCard />
        <Countdown />
        <Events />
        <Quote />
        <ThankYou />
      </main>
    </SmoothScroll>
  );
}

export default App;
