import actionCreatorFactory, { isType } from 'typescript-fsa'


const actionCreator = actionCreatorFactory('GAME')

export const startGame = actionCreator('START')
export const pauseGame = actionCreator('PAUSE')
export const resetGame = actionCreator<{ seconds: number }>('RESET')

export function reducer(state, action) {
  if (isType(action, startGame)) {
    return { ...state, running: true }
  }
  if (isType(action, pauseGame)) {
    return { ...state, running: false }
  }
  if (isType(action, resetGame)) {
    return { ...state, running: false, seconds: action.payload.seconds }
  }

  return state
}
