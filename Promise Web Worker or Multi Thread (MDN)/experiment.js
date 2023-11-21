addEventListener('message', (message) => {
  if (message.data.command === 'generate') {
    const myReturn = 1;
    postMessage(myReturn);
  }
})