export const defaultAuthContextState = {
  user: null,
  kids: null,
  activeKid: null,
  objects: null
}

export function init(initialState) {
  return {
    initialState
  }
}

export function AuthReducer(state, actions) {
  switch (actions.type) {
    case 'update_user':
      return {
        user: actions.payload.user,
        kids: actions.payload.kids,
        activeKid: null,
        objects: null
      }
    case 'add_new_kid':
      return {
        ...state,
        kids: state.kids.push(actions.payload),
        activeKid: actions.payload,
        objects: null
      }
    case 'update_active_kid':
      return {
        ...state,
        activeKid: actions.payload,
        objects: null
      }
    case 'update_kid_objects':
      return {
        ...state,
        objects: actions.payload
      }
    case 'add_object':
      return {
        ...state,
        objects: state.objects.push(actions.payload)
      }
    case 'reset_all':
      return defaultAuthContextState
    default:
      return state
  }
}