import {faker} from "@faker-js/faker";

class FakerData{

    getBaseUrl(){
        return baseUrl = "https://automationteststore.com/"
    }

    getEmail(){
        return email = faker.internet.email();
    }

    getCity(){
        return city = email = faker.internet.email();
    }

    getLoginName(){
        return loginName = faker.internet.userName();
    }

    getPassword(){
        return password = faker.internet.password();
    }

}

export default new FakerData()