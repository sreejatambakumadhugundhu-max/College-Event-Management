const STORAGE_KEY = 'registeredEvents';

export const getRegisteredEvents = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};

export const registerEvent = (event) => {
  const events = getRegisteredEvents();
  events.push(event);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
};

export const clearRegisteredEvents = () => {
  localStorage.removeItem(STORAGE_KEY);
};
