import {
  faCalendarAlt,
  faCar,
  faLocationDot,
  faSpinner,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Booking = ({
  carModels,
  bookingOpen,
  setBookingOpen,
  selectedModel,
  setSelectedModel,
  setSuccessOpen,
}) => {
  const [bookingLoading, setBookingLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setBookingLoading(true);

    setTimeout(() => {
      setBookingLoading(false);
      setBookingOpen(false);
      setSuccessOpen(true);
    }, 2000);

    setTimeout(() => {
      setSuccessOpen(false);
    }, 4000);
  }

  return (
    <div className={`booking ${bookingOpen && "booking-open"}`}>
      <div className="booking__container">
        <button
          className="booking__close"
          onClick={() => setBookingOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h3 className="booking__title">Book a Car</h3>
        <form
          action=""
          className="booking__form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faCar} />
              <span>
                Select Your Model<span className="required">*</span>
              </span>
            </label>
            <select
              className="form__item__select"
              value={selectedModel}
              onChange={(event) => setSelectedModel(event.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              {carModels.map((model) => (
                <option key={model.id} value={`${model.make} ${model.model}`}>
                  {model.make} {model.model}
                </option>
              ))}
            </select>
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Pick-up<span className="required">*</span>
              </span>
            </label>
            <select required className="form__item__select">
              <option value="">Select</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
              <option value="Beijing">Beijing</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Drop-off<span className="required">*</span>
              </span>
            </label>
            <select required className="form__item__select">
              <option value="">Select</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
              <option value="Beijing">Beijing</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>
                Pick-up<span className="required">*</span>
              </span>
            </label>
            <input required type="date" className="form__item__input" />
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>
                Drop-off<span className="required">*</span>
              </span>
            </label>
            <input required type="date" className="form__item__input" />
          </div>
          <div className="form__item">
            <button className="form__item__submit">
              {bookingLoading ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="form__item__submit__loading"
                />
              ) : (
                "Book Ride"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
