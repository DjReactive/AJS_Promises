import GameSavingLoader from './modules/saveload';

GameSavingLoader.load().then((saving) => {
  // saving объект GameSaving
  console.log(saving);
}, (error) => {
  throw new Error(error);
});
