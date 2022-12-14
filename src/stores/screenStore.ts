import GameOverScreen from "@screens/GameOverScreen.svelte";
import PlayScreen from "@screens/PlayScreen.svelte";
import StartScreen from "@screens/StartScreen.svelte";
import { GameStatus, type ScreenStatus } from "@models/gameState";

import { writable } from "svelte/store";

const createScreensStore = () => {
  const screens: ScreenStatus[] = [
    { status: GameStatus.NOT_STARTED, component: StartScreen },
    { status: GameStatus.RUNNING, component: PlayScreen },
    { status: GameStatus.PAUSED, component: PlayScreen },
    { status: GameStatus.RESUME, component: PlayScreen },
    { status: GameStatus.GAME_OVER, component: GameOverScreen },
  ];

  let { update, subscribe } = writable<ScreenStatus>(screens[1]);

  const startGame = () => {
    update((val: ScreenStatus) => {
      val = screens.find((p: ScreenStatus) => p.status == GameStatus.RUNNING);
      return val;
    });
  };

  const pauseGame = () => {
    update((val: ScreenStatus) => {
      val = screens.find((p: ScreenStatus) => p.status == GameStatus.PAUSED);
      return val;
    });
  };
  const resumeGame = () => {
    update((val: ScreenStatus) => {
      val = screens.find((p: ScreenStatus) => p.status == GameStatus.RUNNING);
      return val;
    });
  };
  const gameOver = () => {
    update((val: ScreenStatus) => {
      val = screens.find((p: ScreenStatus) => p.status == GameStatus.GAME_OVER);
      return val;
    });
  };
  const welcomeScreen = () => {
    update((val: ScreenStatus) => {
      val = screens.find((p: ScreenStatus) => p.status == GameStatus.NOT_STARTED);
      return val;
    });
  };
  return { subscribe, startGame, pauseGame, resumeGame, gameOver, welcomeScreen };
};

export const screenStore = createScreensStore();
