const isServer = window !== 'undifined'



export function on (
  target,
  event,
  handler,
  passive = false
) {
  if (!isServer) {
    target.addEventListener(
      event,
      handler,
      isServer ? { capture: false, passive } : false
    );
  }
}

export function off (target, event, handler) {
  if (!isServer) {
    target.removeEventListener(event, handler);
  }
}

export function stopPropagation (event) {
  event.stopPropagation();
}

export function preventDefault (event, isStopPropagation = true) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event);
  }
}
