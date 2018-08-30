let storeData = {};

export default {
    setData: (key, val) => {
        storeData[key] = val;
    },
    getData: (key) => {
        return storeData[key];
    }
}