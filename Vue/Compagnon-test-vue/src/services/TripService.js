// services/TripService.js
import { database } from "../../firebase.js";
import { ref, push, remove, onValue } from "firebase/database";

class TripService {
    getUserTrips(userId, callback) {
        const tripsRef = ref(database, `trips/${userId}`);
        return onValue(tripsRef, callback);
    }

    addTrip(userId, trip) {
        return push(ref(database, `trips/${userId}`), trip);
    }

    deleteTrip(userId, tripId) {
        return remove(ref(database, `trips/${userId}/${tripId}`));
    }
}

export default new TripService();