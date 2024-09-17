"use strict";

let message;

function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + "...";
  }
}
console.log(formatMessage("Lorem ipsum dolor sit amet consectetur", 30));
