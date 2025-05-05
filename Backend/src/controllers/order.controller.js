import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";
import Order from "../models/order.model.js";
import Customer from "../models/customer.model.js";

export const placeOrder = async (req, res) => {
  try {
    const { cartId } = req.body;
    const itemForOrder = await Cart.findById(cartId);

    if (!itemForOrder) {
      return res.status(400).json({ message: "Item Id not found" });
    }

    const order = new Order({
      restaurantId: itemForOrder.restaurantId,
      customerId: itemForOrder.customerId,
      orderItem: {
        itemId: itemForOrder.productId,
        name: itemForOrder.name,
        quantity: itemForOrder.amount,
        price: itemForOrder.price,
      },

      totalAmount: Number(itemForOrder.price * itemForOrder.amount),
      paymentMethod: "Cash on Delivery",
      paymentStatus: "Pending",
      orderStatus: "Pending",
    });

    await order.save();
    await Cart.findByIdAndDelete(cartId);
    res.status(201).json({ message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ restaurantId: req.entity._id });

    if (!orders || orders.length === 0) {
      return res.status(200).json({ message: "No Orders Found" });
    }

    const allOrderDetails = await Promise.all(
      orders.map(async (order) => {
        const customer = await Customer.findById(order.customerId);

        if (!customer) {
          return {
            label: "Error",
            data: [
              { label: "Customer Not Found", placeholder: order.customerId },
            ],
          };
        }
        if (order.orderStatus != "On the Way") {
          return [
            {
              label: "Recipient Details",
              data: [
                { label: "Recepient Name", placeholder: customer.name },
                { label: "Recepient Address", placeholder: customer.city },
                { label: "Recepient Id", placeholder: customer._id },
              ],
            },
            {
              
              label: "Order Details",
              data: [
                { label: "Order Id", placeholder: order._id },
                { label: "Placed on", placeholder: order.createdAt },
                { label: "Order Item", placeholder: order.orderItem.name },
                { label: "Item Amount", placeholder: order.totalAmount },
                { label: "Payment Method", placeholder: order.paymentMethod },
                { label: "Payment Status", placeholder: order.paymentStatus },
                { label: "Order Status", placeholder: order.orderStatus },
              ],
            },
          ];
        }
      })
    );

    res.status(200).json(allOrderDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.status(201).json({ message: "Order Cancelled" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ erorr: "Internal Server Error" });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { orderStatus } = req.body;
    const { id } = req.params;
    const order = await Order.findByIdAndUpdate(
      id,
      { $set: { orderStatus } },
      { new: true }
    );
    if (!order) {
      res.status(201).json({ message: "Order not Found" });
    }
    res.status(201).json({ message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
