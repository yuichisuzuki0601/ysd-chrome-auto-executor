chrome.runtime.onMessage.addListener(async (_args, _sender, _sendResponse) => {
  console.log("script start.");
  await PATH_FUNCTIONS[ysd.systems.simplePath()]?.(ysd);
  console.log("script finish.");
});

// ↓↓↓ any process you wants.
const PATH_FUNCTIONS = {
  "page-1.html": async ({ systems, doms }) => {
    doms.input("#input-data", "hoge");
    await systems.sleep(2);
    doms.click("#button-alert");
    doms.click("#link-next");
  },
  "page-2.html": async ({ systems, doms }) => {
    await systems.sleep(1);
    doms.click("#link-back");
  },
};
// ↑↑↑ any process you wants.
