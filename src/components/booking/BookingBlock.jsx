import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import css from "./BookingBlock.module.css";

export default function BookingBlock({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const valideForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = "Enter date of booking";
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valideForm()) {
      console.log("Complite", formData);
      onclose();
    }
  };

  return (
    <div className={css.over}>
      <div className={css.container}  onClick={onClose}>
        <form
          className={css.formContainer}
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Book your appointment</h2>
          <button onClick={onClose} className={css.closeBtn}>
            <IoMdClose className={css.icon} />
          </button>
          {children}
          <div className={css.bookBlock}>
            <span className={css.booking}>Name:</span>

            <input
              type="name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={css.bookBlock}>
            <span className={css.booking}>Email:</span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={css.bookBlock}>
            <span className={css.booking}>Phone number:</span>
            <input
              type="phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className={css.bookBlock}>
            <span className={css.booking}>Date:</span>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && console.log(errors.date)}
          </div>

          <div className={css.bookBlock}>
            <span className={css.booking}>Select services:</span>

            <select
              type="services"
              id="services"
              name="services"
              className={css.selectService}
              value={formData}
              onChange={handleChange}
            >
              <option value="">Select services</option>
              <option value="Haircut">Haircut</option>
              <option value="Bear trim / cleanup	">Bear trim / cleanup</option>
              <option value="Haircut and beard">Haircut and beard</option>
              <option value="Kids haircut">Kids haircut</option>
            </select>
          </div>

          <div>
            <button className={css.submitBtn} type="submit">
              Book your appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
