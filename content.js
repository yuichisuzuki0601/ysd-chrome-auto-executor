chrome.runtime.onMessage.addListener(async (_args, _sender, _sendResponse) => {
  const { systems, doms } = ysd;
  console.log("script start.");
  // ↓↓↓ any process you wants.

  doms.input("#input1", "hoge");
  await systems.sleep(3);
  doms.click("#button1");

  // ↑↑↑ any process you wants.
  console.log("script finish.");
});
