import MapComponent from "../MapComponent";
import { MapPin, Smartphone, Mail, CalendarDays } from "lucide-react";
import SendMessage from "../SendMessage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ContactUs() {
  return (
    <div className="flex flex-col gap-5 mb-15">
      <MapComponent />
      <div className="flex flex-col gap-15 max-w-7xl mx-auto p-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl sm:text-2xl">Contact Info</h1>
          <p className="text-[13px]/6 md:text-sm/6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            imperdiet libero id nisi euismod, sed porta est consectetur.
            Vestibulum auctor felis eget orci semper vestibulum. Pellentesque
            ultricies nibh gravida, accumsan libero luctus, molestie nunc.L orem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center w-full">
          {/* address */}
          <div className="flex flex-col gap-3 justify-center items-center w-full">
            <MapPin size={50} className="text-blue-400" />
            <div className="flex flex-col gap-0 justify-center items-center">
              <h1 className="font-bold text-lg md:text-xl">Address</h1>
              <p className="text-[13px] md:text-base text-gray-500">
                123 Wall Street, New York / NY
              </p>
            </div>
          </div>
          {/* Phone Number */}
          <div className="flex flex-col gap-3 justify-center items-center w-full">
            <Smartphone size={50} className="text-blue-400" />
            <div className="flex flex-col gap-0 justify-center items-center">
              <h1 className="font-bold text-lg md:text-xl">Phone Number</h1>
              <p className="text-[13px] md:text-base text-gray-500">
                (800) 123-4567
              </p>
            </div>
          </div>
          {/* E-mail Address */}
          <div className="flex flex-col gap-3 justify-center items-center w-full">
            <Mail size={50} className="text-blue-400" />
            <div className="flex flex-col gap-0 justify-center items-center">
              <h1 className="font-bold text-lg md:text-xl">E-mail Address</h1>
              <p className="text-[13px] md:text-base text-gray-500">
                rkcode@rkcodecompany.com
              </p>
            </div>
          </div>
          {/* Working Days/Hours */}
          <div className="flex flex-col gap-3 justify-center items-center w-full">
            <CalendarDays size={50} className="text-blue-400" />
            <div className="flex flex-col gap-0 justify-center items-center">
              <h1 className="font-bold text-lg md:text-xl">
                Working Days/Hours
              </h1>
              <p className="text-[13px] md:text-base text-gray-500">
                Mon - Sun / 9:00AM - 8:00PM
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <hr></hr>
        <div className="flex flex-col lg:flex-row gap-15 w-full">
          <div className="w-full lg:w-[50%]">
            <SendMessage />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Frequently Asked Questions</h1>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold md:text-[17px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, tempore?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold md:text-[17px]">
                  Lorem ipsum dolor sit amet consectetur?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We offer worldwide shipping through trusted courier
                    partners. Standard delivery takes 3-5 business days, while
                    express shipping ensures delivery within 1-2 business days.
                  </p>
                  <p>
                    All orders are carefully packaged and fully insured. Track
                    your shipment in real-time through our dedicated tracking
                    portal.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold md:text-[17px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We stand behind our products with a comprehensive 30-day
                    return policy. If you&apos;re not completely satisfied,
                    simply return the item in its original condition.
                  </p>
                  <p>
                    Our hassle-free return process includes free return shipping
                    and full refunds processed within 48 hours of receiving the
                    returned item.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-bold md:text-[17px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, tempore?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
