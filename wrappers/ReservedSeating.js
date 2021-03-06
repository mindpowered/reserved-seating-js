/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const reservedseating = require('../lib/reservedseating.js');

/**
 * An Library for Reserved Seating
 * Venues have Seats, Events are at Venues
 * Reservations are Seats at Events
 */
class ReservedSeating {
	constructor() {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let lib = new reservedseating.reservedseating.ReservedSeating(bus);
	}

	/**
	 * Create a new venue
	 * @param {string} ownerId Who is responsible for this venue
	 * @param {string} name Name of Venue
	 * @param {number} maxPeople Maximum people permitted in venue
	 * @return {Promise} the id of the new venue Promise will resolve to type string.
	*/
	CreateVenue(ownerId, name, maxPeople) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [ownerId, name, maxPeople];
		let ret = jsbus.call('ReservedSeating.CreateVenue', args);
		return ret;
	}

	/**
	 * Create a new Venue Congiguration
	 * @param {string} venueId Venue
	 * @param {string} name Name of Venue Configuration
	 * @param {number} maxPeople Maximum number of people permitted in this Venue Configuration
	 * @return {Promise} the id of the new Venue Configuration Promise will resolve to type string.
	*/
	CreateVenueConfiguration(venueId, name, maxPeople) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [venueId, name, maxPeople];
		let ret = jsbus.call('ReservedSeating.CreateVenueConfiguration', args);
		return ret;
	}

	/**
	 * Create a new seat
	 * @param {string} name The seat name
	 * @param {string} seatClass The class of seat
	 * @param {string} venueConfigId the Venue Configuration the seat belongs to
	 * @param {array} nextTo the seats that are next to this one
	 * @param {string} tableId the table this seat is at
	 * @param {object} geometry Information about where the Seat is
	 * @return {Promise} the id of the new seat Promise will resolve to type string.
	*/
	CreateSeat(name, seatClass, venueConfigId, nextTo, tableId, geometry) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [name, seatClass, venueConfigId, nextTo, tableId, geometry];
		let ret = jsbus.call('ReservedSeating.CreateSeat', args);
		return ret;
	}

	/**
	 * Create a new Event
	 * @param {string} ownerId Who is responsible for this event
	 * @param {string} venueConfigId Venue Configuration to use for this event
	 * @param {number} maxPeople Maximum people permitted in venue
	 * @return {Promise} the id of the new Event Promise will resolve to type string.
	*/
	CreateEvent(ownerId, venueConfigId, maxPeople) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [ownerId, venueConfigId, maxPeople];
		let ret = jsbus.call('ReservedSeating.CreateEvent', args);
		return ret;
	}

	/**
	 * Create a new Table
	 * @param {string} venueConfigId Venue Configuration to use for this event
	 * @param {number} minSeats Minimum number of people in a party to reserve the table
	 * @param {number} maxSeats Maximum number of people that can sit at this table
	 * @param {object} geometry Information about where the Table is
	 * @return {Promise} the id of the new Table Promise will resolve to type string.
	*/
	CreateTable(venueConfigId, minSeats, maxSeats, geometry) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [venueConfigId, minSeats, maxSeats, geometry];
		let ret = jsbus.call('ReservedSeating.CreateTable', args);
		return ret;
	}

	/**
	 * Create a new Order
	 * @param {string} userId The user who is placing the reservation
	 * @param {string} eventId The event that the order is for
	 * @param {number} expires Timestamp when order expires and is considered abondoned
	 * @return {Promise} the id of the new Order Promise will resolve to type string.
	*/
	CreateOrder(userId, eventId, expires) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [userId, eventId, expires];
		let ret = jsbus.call('ReservedSeating.CreateOrder', args);
		return ret;
	}

	/**
	 * Get a Venue
	 * @param {string} id Venue ID
	 * @return {Promise} the Venue data as an object Promise will resolve to type object.
	*/
	GetVenue(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		let ret = jsbus.call('ReservedSeating.GetVenue', args);
		return ret;
	}

	/**
	 * Get a Venue Configuration
	 * @param {string} id Venue Configuration ID
	 * @return {Promise} the VenueConfiguration data as an object Promise will resolve to type object.
	*/
	GetVenueConfiguration(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		let ret = jsbus.call('ReservedSeating.GetVenueConfiguration', args);
		return ret;
	}

	/**
	 * Get a Seat
	 * @param {string} id Seat ID
	 * @return {Promise} the Seat data as an object Promise will resolve to type object.
	*/
	GetSeat(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		let ret = jsbus.call('ReservedSeating.GetSeat', args);
		return ret;
	}

	/**
	 * Get an Event
	 * @param {string} id Event ID
	 * @return {Promise} the Event data as an object Promise will resolve to type object.
	*/
	GetEvent(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		let ret = jsbus.call('ReservedSeating.GetEvent', args);
		return ret;
	}

	/**
	 * Get a Table
	 * @param {string} id Table ID
	 * @return {Promise} the Table data as an object Promise will resolve to type object.
	*/
	GetTable(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		let ret = jsbus.call('ReservedSeating.GetTable', args);
		return ret;
	}

	/**
	 * Update a Venue
	 * @param {object} data Venue data to update
	 * @param {boolean} complete if set to true, missing fields should be deleted
	*/
	UpdateVenue(data, complete) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [data, complete];
		jsbus.call('ReservedSeating.UpdateVenue', args);
	}

	/**
	 * Update a Venue Configuration
	 * @param {object} data Venue Configuration data to update
	 * @param {boolean} complete if set to true, missing fields should be deleted
	*/
	UpdateVenueConfiguration(data, complete) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [data, complete];
		jsbus.call('ReservedSeating.UpdateVenueConfiguration', args);
	}

	/**
	 * Update a Seat
	 * @param {object} data Seat data to update
	 * @param {boolean} complete if set to true, missing fields should be deleted
	*/
	UpdateSeat(data, complete) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [data, complete];
		jsbus.call('ReservedSeating.UpdateSeat', args);
	}

	/**
	 * Update an Event
	 * @param {object} data Event data to update
	 * @param {boolean} complete if set to true, missing fields should be deleted
	*/
	UpdateEvent(data, complete) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [data, complete];
		jsbus.call('ReservedSeating.UpdateEvent', args);
	}

	/**
	 * Update a Table
	 * @param {object} data Table data to update
	 * @param {boolean} complete if set to true, missing fields should be deleted
	*/
	UpdateTable(data, complete) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [data, complete];
		jsbus.call('ReservedSeating.UpdateTable', args);
	}

	/**
	 * Delete a Venue
	 * @param {string} id Venue ID
	*/
	DeleteVenue(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		jsbus.call('ReservedSeating.DeleteVenue', args);
	}

	/**
	 * Delete a Venue Configuration
	 * Must be unavailable first
	 * @param {string} id Venue Configuration ID
	*/
	DeleteVenueConfiguration(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		jsbus.call('ReservedSeating.DeleteVenueConfiguration', args);
	}

	/**
	 * Delete a Seat
	 * Venue Configuration must be unavailable first
	 * @param {string} id Seat ID
	*/
	DeleteSeat(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		jsbus.call('ReservedSeating.DeleteSeat', args);
	}

	/**
	 * Delete an Event
	 * Events on sale must be cancelled before being deleted.
	 * @param {string} id Event ID
	*/
	DeleteEvent(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		jsbus.call('ReservedSeating.DeleteEvent', args);
	}

	/**
	 * Delete a Table
	 * Venue Configuration must be unavailable first
	 * @param {string} id Table ID
	*/
	DeleteTable(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		jsbus.call('ReservedSeating.DeleteTable', args);
	}

	/**
	 * Delete an Order
	 * Reservations must be cancelled first
	 * @param {string} id Order ID
	*/
	DeleteOrder(id) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [id];
		jsbus.call('ReservedSeating.DeleteOrder', args);
	}

	/**
	 * Complete order and convert holds into reservations
	 * @param {string} orderId Order ID
	*/
	CompleteOrder(orderId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [orderId];
		jsbus.call('ReservedSeating.CompleteOrder', args);
	}

	/**
	 * Place a hold on a seat and add it to an order
	 * @param {string} orderId Order ID
	 * @param {string} seatId Seat ID
	*/
	AddSeatToOrder(orderId, seatId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [orderId, seatId];
		jsbus.call('ReservedSeating.AddSeatToOrder', args);
	}

	/**
	 * Keep an order from expiring and becoming abondoned
	 * @param {string} orderId Order ID
	 * @param {number} expires New timestamp when order will expire
	*/
	ContinueOrder(orderId, expires) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [orderId, expires];
		jsbus.call('ReservedSeating.ContinueOrder', args);
	}

	/**
	 * Automatically select some seats and add them to the order
	 * @param {number} numSeats Number of seats to select
	 * @param {array} seatClassPreference Which seat classes to prefer in order
	*/
	AutoSelect(numSeats, seatClassPreference) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [numSeats, seatClassPreference];
		jsbus.call('ReservedSeating.AutoSelect', args);
	}

	/**
	 * Cancel an event and all reservations for that event
	 * @param {string} eventId Event ID
	*/
	CancelEvent(eventId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [eventId];
		jsbus.call('ReservedSeating.CancelEvent', args);
	}

	/**
	 * Cancel a reservation and release the seats
	 * @param {string} orderId Order ID
	 * @param {string} seatId Seat ID
	*/
	CancelReservation(orderId, seatId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [orderId, seatId];
		jsbus.call('ReservedSeating.CancelReservation', args);
	}

	/**
	 * Get all Seats and Tables for an Event
	 * @param {string} eventId Event ID
	 * @param {number} page page number
	 * @param {number} perpage per page
	*/
	GetSeatsAndTablesForEvent(eventId, page, perpage) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [eventId, page, perpage];
		jsbus.call('ReservedSeating.GetSeatsAndTablesForEvent', args);
	}

	/**
	 * Get any abondoned (expired) orders
	 * @param {number} page page number
	 * @param {number} perpage per page
	 * @return {Promise} abondoned orders Promise will resolve to type array.
	*/
	FindAbandonedOrders(page, perpage) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [page, perpage];
		let ret = jsbus.call('ReservedSeating.FindAbandonedOrders', args);
		return ret;
	}

	/**
	 * Get a users orders
	 * @param {string} userId User ID
	 * @param {number} page page number
	 * @param {number} perpage per page
	 * @return {Promise} orders for user Promise will resolve to type array.
	*/
	GetOrdersForUser(userId, page, perpage) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [userId, page, perpage];
		let ret = jsbus.call('ReservedSeating.GetOrdersForUser', args);
		return ret;
	}

	/**
	 * Get all Events marked on sale
	 * @param {number} page page number
	 * @param {number} perpage per page
	 * @return {Promise} events on sale Promise will resolve to type array.
	*/
	GetAllEventsOnSale(page, perpage) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [page, perpage];
		let ret = jsbus.call('ReservedSeating.GetAllEventsOnSale', args);
		return ret;
	}

	/**
	 * Make a venue configuration available or unavailable.
	 * Must not have any events for sale using this venute configuration.
	 * @param {string} venueConfigurationId Venue Configuration ID
	 * @param {boolean} available availability
	*/
	UpdateVenueConfigurationAvailability(venueConfigurationId, available) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [venueConfigurationId, available];
		jsbus.call('ReservedSeating.UpdateVenueConfigurationAvailability', args);
	}

	/**
	 * Get Venue Configurations for a Venue
	 * @param {string} venueId Venue ID
	 * @return {Promise} the Venue Configurations for the specified Venue Promise will resolve to type array.
	*/
	GetVenueConfigurations(venueId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [venueId];
		let ret = jsbus.call('ReservedSeating.GetVenueConfigurations', args);
		return ret;
	}

	/**
	 * Get a summary of an Order
	 * @param {string} orderId Order ID
	 * @return {Promise} the summary for the specified Order Promise will resolve to type array.
	*/
	GetOrderSummary(orderId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [orderId];
		let ret = jsbus.call('ReservedSeating.GetOrderSummary', args);
		return ret;
	}

	/**
	 * Get all Venues for an owner
	 * @param {string} ownerId owner id
	 * @return {Promise} List of venues Promise will resolve to type array.
	*/
	GetAllVenuesByOwner(ownerId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [ownerId];
		let ret = jsbus.call('ReservedSeating.GetAllVenuesByOwner', args);
		return ret;
	}

}
module.exports = ReservedSeating;

