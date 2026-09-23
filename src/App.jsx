import { useState } from "react";

import Countdown from "./Component/Countdown/Countdown";
import Events from "./Component/Events/Events";
import Quote from "./Component/Quote/Quote";
import ScratchCard from "./Component/ScratchCard/ScratchCard";
import ThankYou from "./Component/ThankYou/ThankYou";
import WeddingHome from "./Component/WeddingHome/WeddingHome";
import SmoothScroll from "./Component/SmoothScroll/SmoothScroll";
import DoorIntro from "./Component/DoorIntro/DoorIntro";
import MusicPlayer from "./Component/MusicPlayer/MusicPlayer";

function App() {
  const [startMusic, setStartMusic] = useState(false);

  const handleDoorOpen = () => {
    // Start the music from the user's tap
    setStartMusic(true);
  };

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

      <MusicPlayer startMusic={startMusic} />

      <DoorIntro onOpen={handleDoorOpen} />
    </SmoothScroll>
  );
}

export default App;