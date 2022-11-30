export const toBoolean = (val: string | undefined) => {
  const truthyVals = "y yes true";

  if (!val) {
    return false;
  }

  if (truthyVals.includes(val)) {
    return true;
  }

  return false;
};

export const toNumber = (val: string | undefined) => {
  return Number.parseInt(val ?? "0");
};

export const toArray = (val: string | undefined): string[] => {
  if (val) {
    if (val?.includes(",")) {
      return val.split(",");
    }

    return [val];
  }

  return [];
};
