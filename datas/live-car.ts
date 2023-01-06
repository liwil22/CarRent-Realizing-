interface LiveCar {
    carNo: number,
    driver: {
      avatar: string,
      name: string,
    },
    status: 'Complete' | 'Pading' | 'In route'
    earning: number;
  }

export const liveCars = [
    {
      carNo: 6465,
      driver: {
        avatar: "/3.png",
        name: "Wildan Jaelani",
      },
      status: "Complete",
      earning: 1000,
    },
    {
      carNo: 6465,
      driver: {
        avatar: "/2.png",
        name: "Adzan",
      },
      status: "Pading",
      earning: 1000,
    },
    {
      carNo: 6465,
      driver: {
        avatar: "/1.png",
        name: "Nazar",
      },
      status: "In route",
      earning: 1000,
    },
  ] as LiveCar[]