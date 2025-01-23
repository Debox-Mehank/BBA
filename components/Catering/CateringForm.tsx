import { useState, useRef, useEffect } from "react"
import { toast } from "react-hot-toast"
import Input from "react-phone-number-input/input"
import "react-phone-number-input/style.css"

const CateringForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const thankYouRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isSubmitted && thankYouRef.current) {
      const navbarHeight = 180 // Adjust this value to match your navbar height
      const yOffset = -navbarHeight - 20 // Additional 20px for some padding
      const y = thankYouRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }, [isSubmitted])

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const formData = new FormData(event.currentTarget)
      const formValues = Object.fromEntries(formData.entries())

      const res = await fetch("/api/catering-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })

      if (res.ok) {
        setIsSubmitted(true)
        toast.success(
          "Thank you for submitting your query, our catering specialist will get in touch with you shortly.",
        )
      } else {
        toast.error("Something went wrong, please try again later!")
      }
    } catch (e) {
      toast.error("Something went wrong, please try again later!")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-10 lg:py-20 bg-bg2 rounded-[30px] lg:rounded-[100px] my-10">
      {isSubmitted ? (
        <div ref={thankYouRef} className="text-center ">
          <h2 className="font-bebas text-4xl lg:text-[60px] xl:text-[90px] mb-6 text-bg1">Thank You!</h2>
          <p className="text-xl font-rubik text-bg1 mb-8 max-w-4xl mt-4 mx-auto">
            We've received your catering inquiry and appreciate your interest. Our team will review your request and get
            back to you shortly.
          </p>
          <p className="text-lg font-rubik text-bg1">
            If you have any immediate questions, please don't hesitate to contact us directly.
          </p>
        </div>
      ) : (
        <>
          <p className="text-center font-bebas text-4xl  lg:text-[60px] xl:text-[90px] mb-10 lg:mb-24 text-bg1">
            Catering Request Form
          </p>
          <form className="flex flex-col gap-y-6" name="catering_request_form" onSubmit={handleFormSubmit}>
            <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4">
              <div className="flex-1">
                <label htmlFor="firstname" className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
                  First Name
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  className="w-full p-3 rounded-lg border-0 focus:ring-0"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastname" className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
                  Last Name
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  className="w-full p-3 rounded-lg border-0 focus:ring-0"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4">
              <div className="flex-1">
                <label htmlFor="phonenumber" className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
                  Phone Number
                </label>
                <Input
                  id="phonenumber"
                  name="phonenumber"
                  className="w-full p-3 rounded-lg border-0 focus:ring-0"
                  country="US"
                  onChange={() => {}}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
                  Email ID
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full p-3 rounded-lg border-0 focus:ring-0"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="eventdate" className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
                Event Date
              </label>
              <input
                id="eventdate"
                name="eventdate"
                type="date"
                className="w-full p-3 rounded-lg border-0 focus:ring-0"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="pickuptime" className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
                Pickup/Delivery Time
              </label>
              <input
                id="pickuptime"
                name="pickuptime"
                type="time"
                className="w-full p-3 rounded-lg border-0 focus:ring-0"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="noofpeople" className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
                No. of People
              </label>
              <input
                id="noofpeople"
                name="noofpeople"
                type="number"
                className="w-full p-3 rounded-lg border-0 focus:ring-0"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="management_message" className="block text-lg font-semibold mb-1 text-bg1 font-rubik">
                Message to Management
              </label>
              <textarea
                id="management_message"
                name="management_message"
                rows={4}
                className="w-full p-3 rounded-lg border-0 focus:ring-0"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-bg1 uppercase xsm:w-[400px] w-[300px] font-rubik text-2xl text-bg3 py-2 px-2 rounded-lg mt-10 self-center disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default CateringForm

