export const transformID = (doc: any, ret) => {
  ret.id = ret._id;
  delete ret._id;
};
