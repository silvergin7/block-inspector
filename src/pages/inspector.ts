import { renderChainInfo } from "./renderChainInfo";
import { renderAccountLookup } from "./renderAccountLookup";
import { renderTransactionForm } from "./renderTransactionForm";

const initApp = async () => {
  await renderChainInfo();
  renderAccountLookup();
  renderTransactionForm();
};

document.addEventListener("DOMContentLoaded", initApp);
