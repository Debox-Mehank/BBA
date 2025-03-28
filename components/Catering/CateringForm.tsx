import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { DateTimePicker } from "../ui/date-picker";
import { getYear, isAfter, isBefore } from "date-fns";
import { TimePicker } from "../ui/time-picker/time-picker";
import { isValidPhoneNumber } from "libphonenumber-js";

interface FormErrors {
  firstname?: string;
  lastname?: string;
  phonenumber?: string;
  email?: string;
  eventDate?: string;
  eventTime?: string;
  noofpeople?: string;
}

const CateringForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const thankYouRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    noofpeople: "",
    management_message: "",
  });
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState<Date | undefined>(undefined);

  // Errors State
  const [errors, setErrors] = useState<FormErrors>({});

  // Scroll to thank you section
  useEffect(() => {
    if (isSubmitted && thankYouRef.current) {
      const navbarHeight = 180;
      const yOffset = -navbarHeight - 20;
      const y =
        thankYouRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [isSubmitted]);

  // Generic input change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.firstname || formData.firstname.trim().length < 2) {
      newErrors.firstname = "First name must be at least 2 characters long";
    }

    // Last Name validation
    if (!formData.lastname || formData.lastname.trim().length < 2) {
      newErrors.lastname = "Last name must be at least 2 characters long";
    }

    // Phone Number validation
    if (
      !formData.phonenumber ||
      !isValidPhoneNumber(formData.phonenumber, "US")
    ) {
      newErrors.phonenumber = "Please enter a valid US phone number";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Event Date validation
    const selectedDate = eventDate ? new Date(eventDate) : null;
    if (!selectedDate || isBefore(selectedDate, new Date())) {
      newErrors.eventDate = "Event date must be in the future";
    }

    // Number of People validation
    const peopleCount = parseInt(formData.noofpeople, 10);
    if (isNaN(peopleCount)) {
      newErrors.noofpeople = "Number of people is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      console.log(errors);
      return;
    }

    setIsLoading(true);
    try {
      const submissionData = {
        ...formData,
        eventdate: new Date(eventDate).toISOString().split("T")[0], // Extract just the date
        pickuptime: new Date(eventDate).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };

      console.log(submissionData);
      console.log(eventDate);

      const res = await fetch("/api/catering-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        toast.success(
          "Thank you for submitting your query, our catering specialist will get in touch with you shortly."
        );
      } else {
        toast.error("Something went wrong, please try again later!");
      }
    } catch (e) {
      toast.error("Something went wrong, please try again later!");
    } finally {
      setIsLoading(false);
    }
  };

  // Render form or thank you message
  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-10 lg:py-20 bg-bg2 rounded-[30px] lg:rounded-[100px]">
      {isSubmitted ? (
        <div ref={thankYouRef} className="text-center">
          <h2 className="font-bebas text-4xl lg:text-[60px] xl:text-[90px] mb-6 text-bg1">
            Thank You!
          </h2>
          <p className="text-xl font-rubik text-bg1 mb-8 max-w-4xl mt-4 mx-auto">
            We&apos;ve received your catering inquiry and appreciate your
            interest. Our team will review your request and get back to you
            shortly.
          </p>
          <p className="text-lg font-rubik text-bg1">
            If you have any immediate questions, please don&apos;t hesitate to
            contact us directly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-y-6 max-w-4xl mx-auto"
        >
          <p className="text-center font-bebas text-4xl lg:text-[60px] xl:text-[90px] mb-10 lg:mb-24 text-bg1">
            Catering Request Form
          </p>

          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4">
            <div className="flex-1">
              <label className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
                First Name
              </label>
              <input
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-[10px] border-0 focus:ring-0 ${
                  errors.firstname ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.firstname && (
                <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
                Last Name
              </label>
              <input
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-[10px] border-0 focus:ring-0 ${
                  errors.lastname ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
              )}
            </div>
          </div>

          {/* Contact Fields */}
          <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4">
            <div className="flex-1">
              <label className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
                Phone Number
              </label>
              <input
                name="phonenumber"
                maxLength={10}
                value={formData.phonenumber}
                className={`w-full p-3 rounded-[10px] border-0 focus:ring-0 ${
                  errors.phonenumber ? "border-2 border-red-500" : ""
                }`}
                onChange={handleInputChange}
              />
              {errors.phonenumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phonenumber}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
                Email ID
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-[10px] border-0 focus:ring-0 ${
                  errors.email ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
              Event Date
            </label>
            <DateTimePicker
              selectedDate={eventDate.length === 0 ? null : new Date(eventDate)}
              setDateFn={(date) => {
                setEventDate(date.toISOString());
                // Clear date error when a valid date is selected
                if (errors.eventDate) {
                  setErrors((prev) => ({ ...prev, eventDate: undefined }));
                }
              }}
            />

            {errors.eventDate && (
              <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>
            )}
          </div>

          {/* Event Time */}
          {/* <div>
            <label className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
              Pickup/Delivery Time
            </label>
            <TimePicker
              setDate={(date: Date | undefined) => {
                setEventTime(date);
                // Clear time error when a time is selected
                if (errors.eventTime) {
                  setErrors((prev) => ({ ...prev, eventTime: undefined }));
                }
              }}
              date={eventTime}
            />
            {errors.eventTime && (
              <p className="text-red-500 text-sm mt-1">{errors.eventTime}</p>
            )}
          </div> */}

          {/* Number of People */}
          <div>
            <label className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
              No. of People
            </label>
            <input
              name="noofpeople"
              type="number"
              value={formData.noofpeople}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-[10px] border-0 focus:ring-0 ${
                errors.noofpeople ? "border-2 border-red-500" : ""
              }`}
            />
            {errors.noofpeople && (
              <p className="text-red-500 text-sm mt-1">{errors.noofpeople}</p>
            )}
          </div>

          {/* Management Message */}
          <div>
            <label className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
              Message to Management
            </label>
            <textarea
              name="management_message"
              rows={4}
              value={formData.management_message}
              onChange={handleInputChange}
              className="w-full p-3 rounded-[10px] border-0 focus:ring-0"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-bg1 uppercase xsm:w-[400px] w-[200px] font-rubik text-xl sm:text-2xl text-bg3 py-2 px-2 rounded-[10px] mt-10 self-center disabled:opacity-50"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};

export default CateringForm;
