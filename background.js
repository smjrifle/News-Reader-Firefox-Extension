'use strict';

function reportExecuteScriptError(error) {
    document.querySelector(".modal-body").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Failed to execute news reader content script: ${error.message}`);
}

function listenForClicks() {}

browser.tabs.executeScript({
        file: "background.js"
    })
    .then(listenForClicks)
    .catch(reportExecuteScriptError);