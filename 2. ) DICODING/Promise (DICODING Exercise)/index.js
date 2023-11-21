const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

async function getTollAccess() {

  try {

    const temp1 = await buyTollRoadCard(25);
    const temp2 = await topUpBalance(temp1, 10);
    const temp3 = await useTollRoad(temp2)

  } catch(error) {
    console.log(error.message);
  }

  /* atau bisa pakai variasi .then, .then. then dan terakhir catch */

  

  return;
}

// Jangan hapus kode di bawah ini
getTollAccess();