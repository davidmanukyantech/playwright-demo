const parseNumeric = (value: string): number => {
  const numericString = value.replace(/[^0-9.-]+/g, "");
  const parsedNumber = parseFloat(numericString);
  if (isNaN(parsedNumber)) {
    throw new Error(`Unable to parse numeric value from input: "${value}"`);
  }

  return parsedNumber;
};

export default parseNumeric;
