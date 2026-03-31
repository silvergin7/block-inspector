import CreateDOM from "../helpers/CreateDOM";
import NetworkOverview from "../models/NetworkOverview";

const panel = document.querySelector("#chain-info") as HTMLDivElement;

export const renderChainInfo = async () => {
  const dom = new CreateDOM();
  const network = new NetworkOverview();
  const blockHeight = await network.getBlockHeight();

  const wrapper = dom.build({ type: "div", classes: "info-card" });
  wrapper.appendChild(dom.build({ type: "h2", content: "Network Stats" }));
  wrapper.appendChild(
    dom.build({ type: "p", content: `Block height: ${blockHeight}` }),
  );

  panel.appendChild(wrapper);
};
