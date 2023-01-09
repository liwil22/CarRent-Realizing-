import Card from "../components/card";
import Layout from "../components/layout";
import StatisticCard from "../components/statistic-card";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import NotificationIcon from "../components/svgs/notification-icon";
import SearchIcon from "../components/svgs/search-icon";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import CarIcon from "../components/svgs/car-icon";
import ChevronDownIcon from "../components/svgs/chevron-down-icon";
import DateIcon from "../components/svgs/date-icon";
import ClockIcon from "../components/svgs/clock-icon";
import FilterIcon from "../components/svgs/filter-icon";
import StatusIcon from "../components/svgs/status-icon";
import { liveCars } from "../datas/live-car";
import EarningSummary from "../components/index/earning-summary";

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ["Hired", "Canceled", "Pending"],
  datasets: [
    {
      label: "Total",
      data: [54, 20, 26],
      backgroundColor: ["#006AFF", "#52C93F", "#FF2727"],
    },
  ],
};

const carNumbers = [
  "BK 123123 AB",
  "BK 234324 AB",
  "BK 162565 AB",
  "BK 653576 AB",
];

export default function Home() {
  const [carNumber, setCarNumber] = useState("");
  const [query, setQuery] = useState("");

  // Replace with data from api
  const filteredCarNumber =
    query === ""
      ? carNumbers
      : carNumbers.filter((number) => {
          return number.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Layout>
      {/* Todays Statistic */}
      <div className="flex w-80 flex-col space-y-4 overflow-y-auto bg-gray-04 px-7 py-8">
        {/* Headline */}
        <div>
          <h2 className="text-gray-01">Todays Statistics</h2>
          <span className="h5 text-gray-03">
            {new Date().toLocaleString("id-ID", {
              weekday: "long",
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </div>

        {/* Income */}
        <StatisticCard
          title="Income"
          date="Today"
          amount={9460.0}
          percentage={-1.5}
          comparedText="Compared to $9940 yesterday"
          lasetWeekText="Last week $25658.00"
        />

        {/* Expanses */}
        <StatisticCard
          title="Expanses"
          date="Today"
          amount={5660.0}
          percentage={2.5}
          comparedText="Compared to $5240 yesterday"
          lasetWeekText="Last week $25658.00"
        />

        <Card>
          <div className="flex flex-col space-y-[30px]">
            {/* Header */}
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-gray-02">Hire vs Cancel</h3>
              <span className="p5 rounded-sm bg-[#F4F5F7] px-2 py-1 text-gray-02">
                Today
              </span>
            </div>

            <div>
              <Doughnut
                data={data}
                options={{ cutout: "80%" }}
                className="mb-6"
              />
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center">
                  <span className="h-4 w-4 flex-none rounded-full bg-primary"></span>
                  <p className="ml-3 mr-6 flex-1">Total Hired</p>
                  <p>
                    54% <span className="text-green">↑</span>
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <span className="h-4 w-4 flex-none rounded-full bg-secondary"></span>
                  <p className="ml-3 mr-6 flex-1">Total Canceled</p>
                  <p>
                    20% <span className="text-secondary">↓</span>
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <span className="h-4 w-4 flex-none rounded-full bg-green"></span>
                  <p className="ml-3 mr-6 flex-1">Total Pending</p>
                  <p>
                    26% <span className="text-secondary">↓</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-1 flex-col space-y-5 p-7 overflow-y-auto">
        {/* Notificaiton and Search bar */}
        <div className="flex flex-row justify-end space-x-10">
          <button>
            <NotificationIcon />
          </button>
          <form className="flex flex-row items-center rounded-xl bg-white py-3 pr-6 pl-8 drop-shadow-card">
            <label htmlFor="search" className="w-full max-w-xs ">
              <input
                placeholder="Search"
                className="focus-visible:outline-none"
              />
            </label>
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>

        {/* Car Availablity */}
        <Card className="px-6 pt-8 pb-10">
          <h4 className="text-black">Car Availablity</h4>

          <div className="mt-4 flex  flex-row items-center space-x-6">
            {/* Search car number */}
            <Combobox value={carNumber} onChange={setCarNumber}>
              {({ open }) => (
                <div className="relative">
                  {/* Input */}
                  <div className="flex flex-row space-x-3 rounded border border-gray-05 py-3 px-4">
                    <CarIcon />
                    <Combobox.Input
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Car number"
                      className="focus-visible:outline-none"
                    />
                    <Combobox.Button>
                      <ChevronDownIcon
                        className={`transition-transform ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </Combobox.Button>
                  </div>

                  {/* Options */}
                  <Combobox.Options className="absolute mt-1 w-full rounded bg-white p-4 shadow-lg">
                    {filteredCarNumber.map((carNumberFilter: string) => (
                      <Combobox.Option
                        value={carNumberFilter}
                        key={carNumberFilter}
                        className="cursor-pointer hover:bg-gray-300"
                      >
                        {carNumberFilter}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </div>
              )}
            </Combobox>

            {/* Date */}
            <div className="flex flex-row rounded border border-gray-05">
              <div className="flex py-3 px-4">
                <DateIcon className="text-gray-02 mr-3"/>
                <span>
                  {new Date().toLocaleString("id-Id",{month:"short", year:"numeric", day:"2-digit"})}
                </span>
              </div>
              <div className="flex py-3 px-4 border-l border-gray-05">
                <ClockIcon className="text-gray-02 mr-3"/>
                <span>
                  {new Date().toLocaleString("id-Id",{hour:"2-digit", hour12: true, minute:"2-digit"})}
                </span>
                <ChevronDownIcon/>
              </div>
            </div>

            {/* Button check */}
            <button className="rounded bg-primary py-3 px-9 text-white">
              Check
            </button>
          </div>
        </Card>

        {/* live status */}
        <Card className="px-6 pt-8 pb-10">
          <div className="flex flex-row items-center justify-between">
            <h4 className="text-black"> Live Car Status </h4>
            <button className="flex items-center px-4 py-2 text-gray-02 mr-10">
              <FilterIcon className="mr-2"/>
              Filter
            </button>
          </div>
          
          <table className="table-auto w-full" cellPadding={1}>
            <thead>
              <tr className="text-sm font-light">
                <td className="py-4">No.</td>
                <td>Car no.</td>
                <td>Driver</td>
                <td>Status</td>
                <td>Earning</td>
              </tr>
            </thead>
            <tbody>
              {liveCars.map((liveCars,index) => 
                <tr key={index} className="border-t">
                  <td className="p5 py-4">{index + 1}</td>
                  <td className="py-4">
                    <h5 className="w-min rounded bg-[#999999]/10 text-black py-1 px-3">{liveCars.carNo}</h5>
                  </td>
                  <td className="py-4">
                    <div className="flex flex-row items-center space-x-3">
                      <img src={liveCars.driver.avatar} alt={liveCars.driver.name} className="h-10 w-10 rounded-full object-cover"/>
                      <span>{liveCars.driver.name}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="p4 flex text-gray-02 items-center">
                      <StatusIcon 
                        className={`w-4 h-4 mr-4 ${
                          liveCars.status == "Complete" 
                          ? 'text-green'
                          : liveCars.status == "Pading" 
                          ? "text-primary"
                          : "text-secondary"
                        }`} 
                      />
                        {liveCars.status}
                    </div>
                  </td>
                  <td className="py-4 p4 text-gray-02">{liveCars.earning}</td>
                  <td>
                    <button className="rounded bg-primary py-1 px-4 text-white">
                      Details
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Card>

        {/* Earning Summary */}
        <EarningSummary/>

      </div>
    </Layout>
  );
}