import axios from "axios";

export const homeDataApi = async () => {
    try {
        const homeDataResponse = await axios.get(`https://api.legalpaper.in/render/home`);
        const homeData = await homeDataResponse.data;
        return homeData;
    } catch (err) {
        throw new Error("Failed to fetch data");
    };
};

export const aboutDataApi = async () => {
    try {
        const aboutDataResponse = await axios.get(`https://api.legalpaper.in/render/about`);
        const aboutData = await aboutDataResponse.data;
        return aboutData;
    } catch (err) {
        throw new Error("Failed to fetch data");
    };
};

export const contactDataApi = async () => {
    try {
        const contactDataResponse = await axios.get(`https://api.legalpaper.in/render/contact`);
        const contactData = await contactDataResponse.data;
        return contactData;
    } catch (err) {
        throw new Error("Failed to fetch data");
    };
};
