var isServer = window !== 'undifined';
export function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!isServer) {
    target.addEventListener(event, handler, isServer ? {
      capture: false,
      passive: passive
    } : false);
  }
}
export function off(target, event, handler) {
  if (!isServer) {
    target.removeEventListener(event, handler);
  }
}
export function stopPropagation(event) {
  event.stopPropagation();
}
export function preventDefault(event, isStopPropagation) {
  if (isStopPropagation === void 0) {
    isStopPropagation = true;
  }

  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}