import React from "react";
import { Line } from "react-chartjs-2";
import Card from "../card";
import { Chart as ChartJS, Tooltip, CategoryScale, LinearScale, PointElement, LineElement, Filler} from "chart.js";

ChartJS.register(CategoryScale, Tooltip, LinearScale, PointElement, LineElement,Filler);

const labels = ['May', 'Jun', 'Jul','Aug', 'Sep', 'Oct'];

const data = {
    labels,
    datasets :[{
        fill: true,
        label: "Last 6 month",
        data: [50, 30, 60, 75, 80, 50],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgb(53, 162, 235)" ,
        tension: 0.5,
    },],
};

function EarningSummary() {
    return (
        <Card className="px-6 pt-8 pb-10"> 
            <div className="flex flex-row items-center">
                <h4 className="text-black"> Earning Summary </h4>
                <select className="p5 ml-8">
                    <option>
                        Mar 2022 - Oct 2022
                    </option>
                </select>
                <div className="flex flex-row items-center space-x-2 ml-auto">
                    <div className="h-[10px] w-[10px] rounded-full bg-primary"></div>
                    <p className="p5 ">Last 6 month</p>
                </div>
                <div className="flex flex-row items-center space-x-2 ml-8">
                    <div className="h-[10px] w-[10px] rounded-full bg-gray-02"></div>
                    <p className="p5 ">Same period last year</p>
                </div>
            </div>

            <Line data={data}/>
        </Card>
    )
}

export default EarningSummary;