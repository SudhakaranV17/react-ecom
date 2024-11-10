import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Login from "./Login";
import Newsletter from "./Newsletter";
import Transactions from "./Transactions";
import MyAccount from "./MyAccount";
import AddressBook from "./AddressBook";
import WishList from "./WishList";
import Downloads from "./Downloads";
import RecurringPayments from "./RecurringPayments";
import OrderHistory from "./OrderHistory";
import RewardPoints from "./RewardPoints";
import AccountReturns from "./AccountReturns";
import Register from "./Register";
import AboutUs from "../information/AboutUs";
import DeliveryInfo from "../information/DeliveryInfo";
import PrivacyPolicy from "../information/PrivacyPolicy";
import TermsAndconditions from "../information/TermsAndconditions";
import ContactUs from "../ContactUs/ContactUs";

function Account() {
  const isUser = false;
  const tabs = [
    { value: "my-account", label: "My Account", comp: <MyAccount /> },
    { value: "address-book", label: "Address Book", comp: <AddressBook /> },
    { value: "wish-list", label: "Wish List", comp: <WishList /> },
    { value: "order-history", label: "Order History", comp: <OrderHistory /> },
    { value: "downloads", label: "Downloads", comp: <Downloads /> },
    {
      value: "recurring-payments",
      label: "Recurring Payments",
      comp: <RecurringPayments />,
    },
    { value: "reward-points", label: "Reward Points", comp: <RewardPoints /> },
    { value: "returns", label: "Returns", comp: <AccountReturns /> },
    { value: "transactions", label: "Transactions", comp: <Transactions /> },
    { value: "newsletter", label: "Newsletter", comp: <Newsletter /> },
  ];

  const tabs2 = [
    { value: "about-us", label: "About Us", comp: <AboutUs /> },
    {
      value: "delivery-info",
      label: "Delivery Information",
      comp: <DeliveryInfo />,
    },
    {
      value: "privacy-policy",
      label: "Privacy Policy",
      comp: <PrivacyPolicy />,
    },
    {
      value: "terms",
      label: "Terms & Conditions",
      comp: <TermsAndconditions />,
    },
    { value: "contact-us", label: "Contact Us", comp: <ContactUs /> },
  ];

  if (isUser) {
    tabs.unshift(
      { value: "login", label: "Login", comp: <Login /> },
      { value: "register", label: "Register", comp: <Register /> }
    );
  } else {
    tabs.push({ value: "logout", label: "Logout", comp: null });
  }

  const [selectedTab, setSelectedTab] = useState(tabs[0]?.value || "");
  const currentTab = [...tabs, ...tabs2].find(
    (tab) => tab.value === selectedTab
  );

  const handleTabClick = (tabValue, e) => {
    setSelectedTab(tabValue);
    e.stopPropagation(); // Prevent the event from bubbling up to the Accordion
  };

  return (
    <div className="container mx-auto my-10">
      <Tabs
        defaultValue={selectedTab}
        className="flex justify-between gap-16 flex-col lg:gap-0 lg:flex-row-reverse relative"
      >
        <div className="w-full lg:w-[75%] relative min-h-[200px]">
          <TabsContent value={selectedTab}>
            <div className="w-full relative lg:absolute lg:top-0 lg:left-0">
              {currentTab?.comp || null}
              {/* Render the corresponding component */}
            </div>
          </TabsContent>
        </div>
        {/* LIST IN BIG SCREEN */}
        <div className="hidden lg:w-[20%] lg:block">
          <TabsList className="border border-black/15">
            <h3 className="px-3 mb-3 text-md font-medium text-black">Home</h3>
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={(e) => handleTabClick(tab.value, e)}
                className={clsx(
                  "opacity-50 hover:opacity-100 transition-all",
                  tab.value === selectedTab && "opacity-100"
                )}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsList className="mt-6 border border-black/15">
            <h3 className="px-3 mb-3 text-md font-medium text-black">
              Information
            </h3>
            {tabs2.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={(e) => handleTabClick(tab.value, e)}
                className={clsx(
                  "opacity-50 hover:opacity-100 transition-all",
                  tab.value === selectedTab && "opacity-100"
                )}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* LIST IN MOBILE VIEW */}
        <div className="block lg:hidden">
          {/* <TabsList> */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Home</AccordionTrigger>
              <AccordionContent>
                <TabsList>
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTabClick(tab.value, e);
                      }}
                      className={clsx(
                        "opacity-50 hover:opacity-100 transition-all",
                        tab.value === selectedTab && "opacity-100"
                      )}
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="mt-6">
              <AccordionTrigger>Information</AccordionTrigger>
              <AccordionContent>
                <TabsList>
                  {tabs2.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTabClick(tab.value, e);
                      }}
                      className={clsx(
                        "opacity-50 hover:opacity-100 transition-all",
                        tab.value === selectedTab && "opacity-100"
                      )}
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* </TabsList> */}
        </div>
      </Tabs>
    </div>
  );
}

export default Account;
