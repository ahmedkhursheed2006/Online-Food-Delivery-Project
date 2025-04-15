export const orderCard = [
  {
    id: 1,
    label: "Recipient Details",
    data: [
      {
        id: 1,
        label: "Recepient Name",
        type: "text",
        placeholder: "John Doe",
      },
      {
        id: 2,
        label: "Recepient Adress",
        type: "text",
        placeholder: "Place Abc",
      },
      {
        id: 3,
        label: "Recepient Order ID",
        type: "number",
        placeholder: "123456789",
      },
    ],
  },
  {
    id: 2,
    label: "Order Details",
    data: [
        {
            id: 1,
            label: "Order No",
            type: "number",
            placeholder: "123456789",
        },
        {
            id: 2,
            label: "Placed on",
            type: "Date",
            placeholder: "04 April 2025",
        },
        {
            id: 3,
            label: "Placed at",
            type: "time",
            placeholder: "04:36",
        },
        {
            id: 4,
            label: "Shipped at",
            type: "time",
            placeholder: "05:36",
        },
        {
            id: 5,
            label: "Delivered at",
            type: "time",
            placeholder: "06:00",
        },
        
    ]
  },
  {
    id: 3,
    label: "Payment Details",
    data: [
        {
            id: 1,
            label: "Paid by",
            type: "text",
            placeholder: "John Doe",
        },
        {
            id: 2,
            label: "Paid Amount",
            type: "number",
            placeholder: "4.36",
        },
    ]
  }
];
