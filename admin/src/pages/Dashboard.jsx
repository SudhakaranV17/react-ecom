import { useEffect, useState } from "react";
import DashboardProfile from "../components/dashboard/DashboardProfile";
import CardDetails from "../components/dashboard/CardDetails";

function Dashboard() {
  const [CardData, setCardData] = useState({});
  useEffect(() => {
    // fetch data from API
    const getCardDetails = async () => {
      try {
        const response = await fetch("/dashboardData.json");
        if (!response.ok) {
          throw new Error("error fetching dashboard details");
        }
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCardDetails();


  }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="border border-black md:w-1/2">
          <DashboardProfile />
        </div>
        <div className=" flex gap-4 md:w-1/2 flex-wrap">
          {CardData &&
            Object.entries(CardData).map(([_, value], index) => {
              return <CardDetails key={index} data={value} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
