export const objectToQueryString = (object: any) => {
  let string = "";
  if (object?.title?.length > 0) {
    string += (`&title=${object?.title}`);
  }
  return string;
};

export const hasNumber = (myString: string) => {
  return /\d/.test(myString);
};
