// import SubscriptionForm from "../component/SubscriptionForm";
// import Testimonials from "../component/Testimonials";

// export default function Last() {
//     return (
//         // <div className="flex flex-row items-center justify-between w-full max-w-7xl mx-auto px-8 py-12 bg-[#2D2D2D]">
//       <div className="align-center  w-full  mx-auto px-8 py-12 bg-[#2D2D2D]">
//             {/* <div className="w-[55%] pr-12">
//                 <div className="max-w-xl">
//                     <SubscriptionForm />
//                 </div> 
//             </div> */}
//             <div className="w-[45%] pl-8 bg-[#2D2D2D]">
//                 <Testimonials />
//             </div>
//         </div>
//     );
// }
import Testimonials from "../component/Testimonials";

export default function Last() {
    return (
        <div className="w-full min-h-screen bg-[#FFFFFF]">
            <div className="container mx-auto px-4 py-20">
                {/* Testimonials Section */}
                <div className="w-full">
                    <Testimonials />
                </div>
            </div>
        </div>
    );
}