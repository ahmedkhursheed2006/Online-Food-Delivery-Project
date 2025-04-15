// salesOverviewData.js

export const detailedSalesOverview = {
  summary: [
    { label: "Total Orders", value: 940 },
    { label: "Total Revenue", value: 13850 },
    { label: "Average Order Value", value: 14.74 },
    { label: "Total Items Sold", value: 2210 },
  ],

  timeFrames: {
    today: {
      orders: 34,
      revenue: 510,
      newCustomers: 5,
      averageOrderValue: 15,
      peakHour: {
        time: "1 PM - 2 PM",
        orders: 9,
      },
      hourlyBreakdown: [
        { hour: "9 AM", orders: 2 },
        { hour: "10 AM", orders: 1 },
        { hour: "11 AM", orders: 3 },
        { hour: "12 PM", orders: 5 },
        { hour: "1 PM", orders: 9 },
        { hour: "2 PM", orders: 6 },
        { hour: "3 PM", orders: 4 },
        { hour: "4 PM", orders: 4 },
      ],
    },

    thisWeek: {
      orders: 215,
      revenue: 3210,
      newCustomers: 17,
      averageOrderValue: 14.93,
      peakDay: {
        day: "Saturday",
        orders: 42,
      },
      dailyBreakdown: [
        { day: "Monday", orders: 24 },
        { day: "Tuesday", orders: 31 },
        { day: "Wednesday", orders: 28 },
        { day: "Thursday", orders: 22 },
        { day: "Friday", orders: 35 },
        { day: "Saturday", orders: 42 },
        { day: "Sunday", orders: 33 },
      ],
    },

    thisMonth: {
      orders: 940,
      revenue: 13850,
      newCustomers: 53,
      averageOrderValue: 14.73,
      peakDate: {
        date: "April 5",
        orders: 56,
      },
      dateBreakdown: [
        { date: "Apr 1", orders: 24 },
        { date: "Apr 2", orders: 31 },
        { date: "Apr 3", orders: 28 },
        { date: "Apr 4", orders: 22 },
        { date: "Apr 5", orders: 56 },
        { date: "Apr 6", orders: 42 },
        { date: "Apr 7", orders: 33 },
        { date: "Apr 8", orders: 27 },
        { date: "Apr 9", orders: 34 },
        { date: "Apr 10", orders: 29 },
        { date: "Apr 11", orders: 26 },
        { date: "Apr 12", orders: 22 },
        { date: "Apr 13", orders: 41 },
        { date: "Apr 14", orders: 36 },
        { date: "Apr 15", orders: 30 },
        { date: "Apr 16", orders: 29 },
        { date: "Apr 17", orders: 34 },
        { date: "Apr 18", orders: 32 },
        { date: "Apr 19", orders: 45 },
        { date: "Apr 20", orders: 39 },
        { date: "Apr 21", orders: 31 },
        { date: "Apr 22", orders: 33 },
        { date: "Apr 23", orders: 30 },
        { date: "Apr 24", orders: 27 },
        { date: "Apr 25", orders: 29 },
        { date: "Apr 26", orders: 34 },
        { date: "Apr 27", orders: 32 },
        { date: "Apr 28", orders: 33 },
        { date: "Apr 29", orders: 29 },
        { date: "Apr 30", orders: 38 },
      ],
    },
  },

  topSellingItems: [
    { name: "Cheeseburger", unitsSold: 312, revenue: 2184 },
    { name: "Pepperoni Pizza", unitsSold: 251, revenue: 2260 },
    { name: "Chicken Wrap", unitsSold: 199, revenue: 1393 },
    { name: "Veggie Salad", unitsSold: 145, revenue: 1015 },
    { name: "Chocolate Lava Cake", unitsSold: 120, revenue: 900 },
  ],

  customerStats: {
    new: 63,
    returning: 182,
    totalCustomers: 245,
  },

  revenueByCategory: [
    { category: "Burgers", revenue: 4120 },
    { category: "Pizza & Italian", revenue: 3780 },
    { category: "Wraps & Sandwiches", revenue: 2100 },
    { category: "Desserts", revenue: 960 },
    { category: "Others", revenue: 2890 },
  ],
};
