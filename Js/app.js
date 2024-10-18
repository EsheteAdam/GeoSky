import { fetchAllCountries } from "./apiReq.js";

const init = () => {
    getAllCountries();
};

const getAllCountries = async () => {
    const data = await fetchAllCountries();
    console.log(data);
};

init();
