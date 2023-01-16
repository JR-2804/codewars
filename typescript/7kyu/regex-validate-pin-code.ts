const validatePin = (pin: string): boolean => /^(\d{4}|\d{6})$/.test(pin);
