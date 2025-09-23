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

export const privacyDataApi = async () => {
    try {
        const privacyDataResponse = await axios.get(`https://api.legalpaper.in/render/privacy-policy`);
        const privacyData = await privacyDataResponse.data;
        return privacyData;
    } catch (err) {
        throw new Error("Failed to fetch data");
    };
};

export const registerUserAuthApi = async ({name, email, phone = "", password, confirmPassword}) => {
    try {
      const registerAuthResponse = await axios.post(
        'https://api.legalpaper.in/user/register',
        {
            "fullName": name,
            "email": email,
            "phone": phone,
            "password": password,
            "confirmPassword": confirmPassword
        },      
        {
          headers: {
            'Content-Type': 'application/json', // example header
          },
        },   // this is the headers/config
      );
  
      return registerAuthResponse.data;
    } catch (err) {
      console.error(err.response?.data || err.message);
      throw new Error("Failed to fetch data");
    }
  };

export const loginUserAuthApi = async ({email, password}) => {
    try {
      const loginAuthResponse = await axios.post(
        'https://api.legalpaper.in/user/login',
        {
            "email": email,
            "password": password,
        },      
        {
          headers: {
            'Content-Type': 'application/json', // example header
          },
        },   // this is the headers/config
      );
  
      return loginAuthResponse.data;
    } catch (err) {
      console.error(err.response?.data || err.message);
      throw new Error("Failed to fetch data");
    }
  };