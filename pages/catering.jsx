import Image from "next/image"
import catering from "../assets/catering.jpg"
import live_catering from "../assets/live_catering.jpeg"
import events from "../assets/glimpses.gif"

const Catering = () => {
    return (
        <div className="w-full mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 m-4 p-2 lg:m-6 xl:m-6 lg:p-6 xl:p-6">
                <div className="w-full flex justify-center items-stretch">
                    <Image src={catering} alt="" objectFit="cover" />
                </div>
                <div className="w-full bg-cover bg-center catering-div p-6 flex flex-col justify-center">
                    <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 text-primary font-big_calson">Catering</h3>
                    <p className="text-white text-sm my-2">{"Let us Cater your next Event. We are ready to cater to you. We cook for you and your loved ones, co-workers and friends. We cater all groups, from a 20 people office lunch gathering to a 1000 people wedding party. Contact us today to set-up your menu for your next special event. In fact Delivery is on us. We offer multiple options including Party Trays to take to a party, Packed Lunch Boxes for Corporate setting, Live Onsite Catering, Buffet Catering, Set Menu's for large dinner parties. We will take your worry away about food and let you focus on celebrating the special occasion."}</p>
                </div>
            </div>
            <div className="w-full">
                <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 text-black text-center font-big_calson">Catering Options</h3>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 m-4 p-2 lg:m-6 xl:m-6 lg:p-6 xl:p-6 relative">
                    <div className="w-full transition-all greenbox bg-cover bg-center flex flex-col justify-start items-start p-4">
                        <h3 className="font-bold text-xl lg:text-2xl xl:text-2xl mb-4 text-primary font-big_calson text-center w-full">Live Catering</h3>
                        <ul className="list-inside list-disc">
                            <li className="text-white text-xs md:text-sm my-2">{"Minimum 50 Guests"}</li>
                            <li className="text-white text-xs md:text-sm my-2">{"Chef will be onsite for 2 hours."}</li>
                            <li className="text-white text-xs md:text-sm my-2">{"Additional Hour $150"}</li>
                        </ul>
                        <br />
                        <h3 className="font-bold text-sm lg:text-lg xl:text-lg text-primary font-big_calson">Onsite Dosa</h3>
                        <p className="text-white text-xs md:text-sm my-2">{"We offer Live Dosa Counter with multiple types of Dosas made by our expert chefs on location. Contact us for the package prices."}</p>
                        <br />
                        <h3 className="font-bold text-sm lg:text-lg xl:text-lg text-primary font-big_calson">Live Skewers Station</h3>
                        <p className="text-white text-xs md:text-sm my-2">{"Sambar Soup, Tomato Soup, Veg Corn Soup, Chicken Sweet Corn Soup, and many more..."}</p>
                    </div>
                    <div className="w-full transition-all greenbox bg-cover bg-center flex flex-col justify-start items-start p-4">
                        <h3 className="font-bold text-xl lg:text-2xl xl:text-2xl mb-4 text-primary font-big_calson text-center w-full">Special Events</h3>
                        <h3 className="font-bold text-sm lg:text-lg xl:text-lg text-primary font-big_calson">Weddings</h3>
                        <p className="text-white text-xs md:text-sm my-2">{"We offer full range of catering services for large wedding events over multiple days. We send our experienced chefs and who are well versed in traditional recipes to meet your event needs."}</p>
                        <br />
                        <h3 className="font-bold text-sm lg:text-lg xl:text-lg text-primary font-big_calson">Entertainment Events and Celebrations</h3>
                        <p className="text-white text-xs md:text-sm my-2">{"We can cater for large Events like a Live Entertainment show or any special festive occasion. Contact us to take care of your special event needs."}</p>
                        <br />
                        <h3 className="font-bold text-sm lg:text-lg xl:text-lg text-primary font-big_calson">Private Group Dining</h3>
                        <p className="text-white text-xs md:text-sm my-2">{"For Parties of 30 or larger, we offer Set Menu Packages that will take away the hassle of ordering after you arrive and make your celebration memorable."}</p>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 text-black text-center font-big_calson">Catering Packages</h3>
                <ul className="list-inside list-disc px-8 lg:px-20 xl:px-20">
                    <li className="text-pri_green font-bold text-xs md:text-sm">{"Prices are for 50 people & above"}</li>
                    <li className="text-pri_green font-bold text-xs md:text-sm">{"All extra items will be charged. Delivery & Setup Charge Extra."}</li>
                    <li className="text-pri_green font-bold text-xs md:text-sm">{"Less than 50 People this package is not offerred, but menu is available for take-out orders tray wise."}</li>
                    <li className="text-pri_green font-bold text-xs md:text-sm">{"We serve HALAL MEAT."}</li>
                    <li className="text-pri_green font-bold text-xs md:text-sm">{"Additional $1 Extra - GOAT / PANEER"}</li>
                    <li className="text-pri_green font-bold text-xs md:text-sm">{"Additional $2 Extra - GOAT BONELESS / FISH, $3 Extra - SHRIMP"}</li>
                    <li className="text-pri_green font-bold text-xs md:text-sm">{"50% ADVANCE PAYMENT ON ALL CATERING ORDERS"}</li>
                </ul>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3 m-4 p-2 lg:m-6 xl:m-6 lg:p-6 xl:p-6 relative">
                    <div className="w-full transition-all greenbox bg-cover bg-center flex flex-col justify-start items-start p-4">
                        <h3 className="font-bold text-xl lg:text-2xl xl:text-2xl mb-4 text-primary font-big_calson text-center w-full">Silver Package</h3>
                        <br />
                        <h3 className="font-bold text-sm lg:text-lg xl:text-lg text-primary font-big_calson">VEG / NON-VEG - $18</h3>
                        <p className="text-white text-xs my-2">{"1 APPETIZER, 2 CURRIES,WHITE RICE,DUM BIRYANI (Veg/Chicken),SAMBAR / RASAM,BUTTER NAAN,DESSERT,RAITHA( Options- Fruit Custard/Shahi Tukda/ Gulab Jamun/Rasmalai)"}</p>
                        <br />
                    </div>
                    <div className="w-full transition-all greenbox bg-cover bg-center flex flex-col justify-start items-start p-4">
                        <h3 className="font-bold text-xl lg:text-2xl xl:text-2xl mb-4 text-primary font-big_calson text-center w-full">Gold Package</h3>
                        <br />
                        <h3 className="font-bold text-sm lg:text-lg xl:text-lg text-primary font-big_calson">VEG / NON-VEG - $21</h3>
                        <p className="text-white text-xs my-2">{"2 APPETIZER, 2 CURRIES,DAL CURRY,WHITE RICE,DUM BIRYANI (Veg / Chicken), SAMBAR / RASAM, BUTTER NAAN,2 DESSERTS, PAPAD/COLOR CHIPS, RAITHA (*only 1 Paneer item with package) ( Options - Shahi Tukda/Gulab Jamun/Rasmalai Double ka Meetha/Gajar Ka Halwa)"}</p>
                        <br />
                    </div>
                    <div className="w-full transition-all greenbox bg-cover bg-center flex flex-col justify-start items-start p-4">
                        <h3 className="font-bold text-xl lg:text-2xl xl:text-2xl mb-4 text-primary font-big_calson text-center w-full">Platinum Package</h3>
                        <br />
                        <h3 className="font-bold text-sm lg:text-lg xl:text-lg text-primary font-big_calson">VEG / NON-VEG - $24</h3>
                        <p className="text-white text-xs my-2">{"2 APPETIZER, 3 CURRIES,DAL CURRY,WHITE RICE, DUM BIRYANI (Veg / Chicken), SAMBAR / RASAM, BUTTER NAAN,2 DESSERTS,PAPAD/ COLOR CHIPS (*only 1 Paneer item with package) ( Options - Rice Kheer/Mango Fruit Custard/ Kesari Halwa/Mango Malai/Payasam/ Chakkara Pongal)"}</p>
                        <br />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 text-black text-center font-big_calson">Dosa Party Packages</h3>
                <ul className="list-inside list-disc px-8 lg:px-20 xl:px-20">
                    <li className="text-pri_green font-bold text-xs md:text-sm">{"Prices are for 50 people & above"}</li>
                    <li className="text-pri_green font-bold text-xs md:text-sm">{"All extra items will be charged. Delivery & Setup Charge Extra."}</li>
                    <li className="text-pri_green font-bold text-xs md:text-sm">{"Tax Applicable for all items"}</li>
                    <li className="text-pri_green font-bold text-xs md:text-sm">{"Deposit required for Chaffing Dishes"}</li>
                </ul>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 m-4 p-2 lg:m-6 xl:m-6 lg:p-6 xl:p-6 relative">
                    <div className="w-full transition-all greenbox bg-cover bg-center flex flex-col justify-start items-start p-4">
                        <h3 className="font-bold text-xl lg:text-2xl xl:text-2xl mb-4 text-primary font-big_calson text-center w-full">Gold Package</h3>
                        <p className="text-white text-xs my-2">{"4 Types of DOSA- Plain Dosa, Onion Dosa, Masala Dosa,Mysore Masala Dosa,Idli,Medhu Vada,Chutney(Coconut & Tomato),Sambar,Dessert."}</p>
                        <br />
                    </div>
                    <div className="w-full transition-all greenbox bg-cover bg-center flex flex-col justify-start items-start p-4">
                        <h3 className="font-bold text-xl lg:text-2xl xl:text-2xl mb-4 text-primary font-big_calson text-center w-full">Platinum Package</h3>
                        <p className="text-white text-xs my-2">{"6 Types of DOSA- Plain Dosa, Onion Dosa, Onion Chilli, Masala Dosa, Onion Masala, Idli, Medhu Vada, Pongal/Upma, CurdRice, Chutney(Coconut&Tomato), Sambar, Dessert."}</p>
                        <br />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 text-black text-center font-big_calson">Party Trays</h3>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-4 m-4 p-2 lg:m-6 xl:m-6 lg:p-6 xl:p-6 relative">
                    <div className="w-full transition-all greenbox bg-cover bg-center flex flex-col justify-start items-start p-4">
                        <h3 className="font-bold text-xl lg:text-2xl xl:text-2xl mb-4 text-primary font-big_calson text-center w-full">Starters</h3>
                        <p className="text-white text-xs my-2 whitespace-pre-line">{"Veg starting at $75\nNon-Veg starting at $85\n\nNote : Please contact us for Lamb and Shrimp Dish prices"}</p>
                        <br />
                    </div>
                    <div className="w-full transition-all greenbox bg-cover bg-center flex flex-col justify-start items-start p-4">
                        <h3 className="font-bold text-xl lg:text-2xl xl:text-2xl mb-4 text-primary font-big_calson text-center w-full">Tandoor Sizzlers</h3>
                        <p className="text-white text-xs my-2 whitespace-pre-line">{"Paneer starting at $75\nChicken starting at $85\n\nNote : Please contact us for Lamb and Shrimp Dish prices"}</p>
                        <br />
                    </div>
                    <div className="w-full transition-all greenbox bg-cover bg-center flex flex-col justify-start items-start p-4">
                        <h3 className="font-bold text-xl lg:text-2xl xl:text-2xl mb-4 text-primary font-big_calson text-center w-full">Curry Entrees</h3>
                        <p className="text-white text-xs my-2 whitespace-pre-line">{"Veg starting at $75\nChicken starting at $85\nLamb/Seafood starting at $95"}</p>
                        <br />
                    </div>
                    <div className="w-full transition-all greenbox bg-cover bg-center flex flex-col justify-start items-start p-4">
                        <h3 className="font-bold text-xl lg:text-2xl xl:text-2xl mb-4 text-primary font-big_calson text-center w-full">Biryanis</h3>
                        <p className="text-white text-xs my-2 whitespace-pre-line">{"Veg starting at $75\nChicken starting at $85\nLamb/Seafood starting at $95"}</p>
                        <br />
                    </div>
                    <div className="w-full transition-all greenbox bg-cover bg-center flex flex-col justify-start items-start p-4">
                        <h3 className="font-bold text-xl lg:text-2xl xl:text-2xl mb-4 text-primary font-big_calson text-center w-full">Sides</h3>
                        <p className="text-white text-xs my-2 whitespace-pre-line">{"Naan/Garlic Naan/Tandoori Roti(15ct) $30\nChapathi/Poori (20ct) $30\nBasmati Rice $35\nPulav Rice $55"}</p>
                        <br />
                    </div>
                </div>
            </div>
            {/* Forms */}
            <div className="w-full">
                <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 text-black text-center font-big_calson">Catering Request Form</h3>
                <form name="catering_request_form" data-netlify="true" action="/catering?submit=true" method="POST" className="w-11/12 lg:w-3/4 xl:w-3/4 mx-auto p-2 lg:p-6 xl:p-6 flex flex-col justify-center gap-6">
                    <input type="hidden" name="form-name" value="catering_request_form" />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="firstname" className="text-xs md:text-sm lg:text-sm xl:text-sm font-big_calson font-bold">First Name</label>
                        <input required id="firstname" name="firstname" type="text" className="bg-white p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="lastname" className="text-xs md:text-sm lg:text-sm xl:text-sm font-big_calson font-bold">Last Name</label>
                        <input required id="lastname" name="lastname" type="text" className="bg-white p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-xs md:text-sm lg:text-sm xl:text-sm font-big_calson font-bold">Email</label>
                        <input required id="email" name="email" type="email" className="bg-white p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="phonenumber" className="text-xs md:text-sm lg:text-sm xl:text-sm font-big_calson font-bold">Phone Number</label>
                        <input required id="phonenumber" name="phonenumber" type="number" className="bg-white p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs md:text-sm lg:text-sm xl:text-sm font-big_calson font-bold">Type of Catering</label>
                        <div className="grid grid-cols-2 lg:grid-cols-8 gap-4">
                            <div className="flex items-center justify-start gap-2">
                                <input required type="radio" name="catering_type" id="box_lunches" value={"Box Lunches"} />
                                <label htmlFor="box_lunches" className="text-xs md:text-sm lg:text-sm xl:text-sm">Box Lunches</label>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <input required type="radio" name="catering_type" id="party_trays" value={"Party Trays"} />
                                <label htmlFor="party_trays" className="text-xs md:text-sm lg:text-sm xl:text-sm">Party Trays</label>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <input required type="radio" name="catering_type" id="buffet_catering" value={"Buffet Catering"} />
                                <label htmlFor="buffet_catering" className="text-xs md:text-sm lg:text-sm xl:text-sm">Buffet Catering</label>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <input required type="radio" name="catering_type" id="weddings" value={"Weddings"} />
                                <label htmlFor="weddings" className="text-xs md:text-sm lg:text-sm xl:text-sm">Weddings</label>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <input required type="radio" name="catering_type" id="large_celeb" value={"Large Celebration"} />
                                <label htmlFor="large_celeb" className="text-xs md:text-sm lg:text-sm xl:text-sm">Large Celebration</label>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <input required type="radio" name="catering_type" id="private_dining" value={"Private Dining"} />
                                <label htmlFor="private_dining" className="text-xs md:text-sm lg:text-sm xl:text-sm">Private Dining</label>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <input required type="radio" name="catering_type" id="live_counter" value={"Live Counter"} />
                                <label htmlFor="live_counter" className="text-xs md:text-sm lg:text-sm xl:text-sm">Live Counter</label>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <input required type="radio" name="catering_type" id="catering_others" value={"Others"} />
                                <label htmlFor="catering_others" className="text-xs md:text-sm lg:text-sm xl:text-sm">Others</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs md:text-sm lg:text-sm xl:text-sm font-big_calson font-bold">Time of Event</label>
                        <div className="grid grid-cols-2 lg:grid-cols-8 gap-4">
                            <div className="flex items-center justify-start gap-2">
                                <input required type="radio" name="event_type" id="lunch" value={"Lunch"} />
                                <label htmlFor="lunch" className="text-xs md:text-sm lg:text-sm xl:text-sm">Lunch</label>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <input required type="radio" name="event_type" id="dinner" value={"Dinner"} />
                                <label htmlFor="dinner" className="text-xs md:text-sm lg:text-sm xl:text-sm">Dinner</label>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <input required type="radio" name="event_type" id="breakfast" value={"Breakfast"} />
                                <label htmlFor="breakfast" className="text-xs md:text-sm lg:text-sm xl:text-sm">Breakfast</label>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <input required type="radio" name="event_type" id="event_others" value={"Others"} />
                                <label htmlFor="event_others" className="text-xs md:text-sm lg:text-sm xl:text-sm">Others</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="pickuptime" className="text-xs md:text-sm lg:text-sm xl:text-sm font-big_calson font-bold">Pickup/Delivery Time</label>
                        <input required id="pickuptime" name="pickuptime" type="time" className="bg-white p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="noofpeople" className="text-xs md:text-sm lg:text-sm xl:text-sm font-big_calson font-bold">No of People</label>
                        <input required id="noofpeople" name="noofpeople" type="number" className="bg-white p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="management_message" className="text-xs md:text-sm lg:text-sm xl:text-sm">Message to Management</label>
                        <textarea required rows={4} id="management_message" name="management_message" placeholder="Spicy Level, Delivery Contact, etc..." className="bg-white p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="eventdate" className="text-xs md:text-sm lg:text-sm xl:text-sm font-big_calson font-bold">Event Date</label>
                        <input required id="eventdate" name="eventdate" type="date" className="bg-white p-2 rounded text-sm md:text-base lg:text-base xl:text-base" />
                    </div>
                    <div className="w-full">
                        <input type="submit" value="Submit" className="text-primary bg-pri_green font-semibold text-sm shadow-md cursor-pointer rounded py-1.5 px-4 mt-3 lg:py-2 hover:text-black hover:bg-gray-300 w-max uppercase" />
                        <input type="reset" value="Reset" className="text-primary bg-pri_green font-semibold text-sm shadow-md cursor-pointer rounded py-1.5 px-4 mt-3 lg:py-2 hover:text-black hover:bg-gray-300 w-max uppercase ml-4" />
                    </div>
                </form>
            </div>
            <br />
        </div>
    )
}

export default Catering