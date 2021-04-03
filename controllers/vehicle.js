async function getVehicles(req, res) {
    const {categoryName, pickUpDate: requestedPickUpDate, dropDate: requestedDropDate, locationId} = req.query;

    const bookedVehicleIds = Booking
                                .find({pickUpDate: {$gt: requestedPickUpDate, $lt: requestedDropDate}})
                                .select('_id');

    //Find all vehicles with category and location filter, which are not booked
    const availableVehicles = Vehicle.find({
        vehicleSubcategory: categoryName, 
        location: locationId, 
        _id: {$nin: bookedVehicleIds}
    });

    res.send(availableVehicles);
}

async function addVehicle(req, res) {
    const requestBody = req.body;


    try {
        const vehicle = new Vehicle(requestBody)
        const savedVehicle = await vehicle.save();
        res.send(savedVehicle); 
    }  catch(ex) {
        return res.status(400).send(ex.message);
    }
}
module.exports = {
    getVehicles,
    addVehicle
}
