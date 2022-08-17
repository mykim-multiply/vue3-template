import _axios from "../plugins/axios";

export const getExample = () => {
  return _axios.get(`/test`);
};
