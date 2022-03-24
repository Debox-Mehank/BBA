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
                    <div className="w-full transition-all relative catering-card">
                        <Image src={events} alt="" objectFit={"cover"} />
                        <div className="hidden catering-card-info absolute top-0 left-0 w-full h-full flex-col justify-center p-4 bg-black">
                            <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 text-primary font-big_calson">Catering</h3>
                            <p className="text-white text-sm my-2">{"Let us Cater your next Event. We are ready to cater to you. We cook for you and your loved ones, co-workers and friends. We cater all groups, from a 20 people office lunch gathering to a 1000 people wedding party. Contact us today to set-up your menu for your next special event. In fact Delivery is on us. We offer multiple options including Party Trays to take to a party, Packed Lunch Boxes for Corporate setting, Live Onsite Catering, Buffet Catering, Set Menu's for large dinner parties. We will take your worry away about food and let you focus on celebrating the special occasion."}</p>
                        </div>
                    </div>
                    <div className="w-full transition-all eventCateringImg">
                        <Image src={events} alt="" objectFit={"cover"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catering