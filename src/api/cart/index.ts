import { getOrderDataType } from "../../types/cart";
import axios from "../axios";

class CartDataService {
    async getOrder(data: getOrderDataType) {
        const response = await axios.post<string>("/order", {
            data
        })
        return response.data
    }
}
export default new CartDataService();