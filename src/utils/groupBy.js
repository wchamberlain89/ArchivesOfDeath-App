const groupBy = (arr, key) => {
  return arr.reduce((returnValue, arrItem) => {
    (returnValue[arrItem[key]] = returnValue[arrItem[key]] || []).push(arrItem);
    return returnValue;
  }, {});
}

export default groupBy;