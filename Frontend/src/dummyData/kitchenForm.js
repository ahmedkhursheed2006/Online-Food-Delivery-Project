export const fields =[
    // Restaurant Details
    {
        id: 1,
        categoryName: "Restaurant Details",
        fields: [
            {
                id: 1,
                name: "restaurantName",
                type: "text",
                placeholder: "Restaurant Name",
                label: "Restaurant Name",
            },
            {
                id: 2,
                name: "restaurantAddress",
                type: "text",
                placeholder: "Restaurant Address",
                label: "Restaurant Address",
            },
            {
                id: 3,
                name: "restaurantPhoneNumber",
                type: "text",
                placeholder: "Restaurant Phone Number",
                label: "Restaurant Phone Number",
            },
            {
                id: 4,
                name: "restaurantEmail",
                type: "email",
                placeholder: "Restaurant Email",
                label: "Restaurant Email",
            },
            {
                id: 5,
                name: "businessType",
                type: "select",
                options: [
                    { value: "restaurant", label: "Restaurant"},
                    { value: "cloudKitchen", label: "Cloud Kitchen"},
                    { value: "takeOut", label: "Take Out"},
                ],
                placeholder: "Business Type",
                label: "Business Type",
            },
            {
                id: 6,
                name: "cuisineType",
                type: "select",
                placeholder: "Cuisine Type",
                label: "Cuisine Type",
                options: [
                    { value: "burgersAndSandwitches", label: "Burgers & Sandwitches"},
                    { value: "pizzaAndItalian", label: "Pizza & Italian"},
                    { value: "asianCuisine", label: "Asian Cuisine"},
                    { value: "mexican", label: "Mexican"},
                    { value: "fastFood", label: "Fast Food"},
                    { value: "seafoodDishes", label: "Seafood Dishes"},
                    { value: "classics", label: "Classics"},
                    { value: "breakfastAndBrunch", label: "Breakfast & Brunch"},
                    { value: "desserts", label: "Desserts"},
                    { value: "salads", label: "Salads"},
                    { value: "other", label: "Other"},
                ],
            },
            {
                id: 7,
                name: "kitchenImage",
                type: "file",
                placeholder: "Kitchen Image",
                label: "Kitchen Image",
                accept: "image/*",
            },
        ],
    },
    // Owner/Manager Information
    {
        id: 2,
        categoryName: "Owner/Manager Information",
        fields: [
            {
                id: 1,
                name: "ownerName",
                type: "text",
                placeholder: "Owner/Manager Name",
                label: "Owner/Manager Name",
            },
            {
                id: 2,
                name: "ownerContactNumber",
                type: "text",
                placeholder: "Owner/Manager Contact Number",
                label: "Owner/Manager Contact Number",
            },
            {
                id: 3,
                name: "ownerContactEmail",
                type: "email",
                placeholder: "Owner/Manager Contact Email",
                label: "Owner/Manager Contact Email",
            },
            {
                id: 4,
                name: "governmentID",
                type: "text",
                placeholder: "Government-issued ID (CNIC... etc)",
                label: "Government-issued ID (CNIC... etc)",
            },
        ]
    },
    // Bank Details
    {
        id: 3,
        categoryName: "Bank Details",
        fields: [
            {
                id: 1,
                name: "bankName",
                type: "text",
                placeholder: "Bank Name",
                label: "Bank Name",
            },
            {
                id: 2,
                name: "accountNumber",
                type: "text",
                placeholder: "Account Number",
                label: "Account Number",
            },
            {
                id: 3,
                name: "accountTitle",
                type: "text",
                placeholder: "Account Title",
                label: "Account Title",
            },
            {
                id: 4,
                name: "ibanNumber",
                type: "text",
                placeholder: "IBAN Number",
                label: "IBAN Number",
            },
            {
                id: 5,
                name: "paymentCycle",
                type: "select",
                placeholder: "Payment Cycle",
                label: "Payment Cycle", 
                options: [
                    { value: "weekly", label: "Weekly"},
                    { value: "biweekly", label: "Biweekly"},
                    { value: "monthly", label: "Monthly"},
                ],
            }
        ]
    },
    
]