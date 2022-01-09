import { IPizza } from "../../types/pizza";
import axios from "../axios";

class PizzasDataService {
    async getPizzas(category: number | null, sortBy: number | null) {
        const response = await axios
            .get<IPizza[]>(`/pizza?count=30&${category !== null ? `category=${category}` : ''}&sort=${sortBy}`)
        return response.data
    }
}
export default new PizzasDataService();