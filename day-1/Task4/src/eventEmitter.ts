//link: https://www.youtube.com/watch?v=oTOqGdKTsg8

type ListenerType = (...args: unknown[]) => void;

class EventEmitter {
  events: { [eventName: string]: ((...args: unknown[]) => void)[] };
  constructor() {
    this.events = {};
  }

  on(event: string, listener: ListenerType) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(listener);
  }

  off(event: string, listener: ListenerType) {
    if (!this.events[event]) {
      return;
    }

    this.events[event] = this.events[event].filter((fn) => fn !== listener);
  }

  emit(event: string, ...args: unknown[]) {
    if (!this.events[event]) {
      return;
    }

    this.events[event].forEach((fn) => fn(...args));

    if (this.events["*"]) {
      this.events["*"].forEach((fn) => fn(event, ...args));
    }
  }

  once(event: string, listener: ListenerType) {
    const wrapper = (...args: unknown[]) => {
      listener(...args);
      this.off(event, wrapper);
    };

    this.on(event, wrapper);
  }
}
