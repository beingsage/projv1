import SubscriptionForm from "../component/SubscriptionForm";
import Testimonials from "../component/Testimonials";

export default function Last() {
    return (
        <div className="flex flex-row items-center justify-between w-full max-w-7xl mx-auto px-8 py-12">
            <div className="w-[55%] pr-12">
                <div className="max-w-xl">
                    <SubscriptionForm />
                </div>
            </div>
            <div className="w-[45%] pl-8">
                <Testimonials />
            </div>
        </div>
    );
}
