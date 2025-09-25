// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/auth/SupabaseClient";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";
import CustomerSidebar from "../CustomerSidebar";

function SidebarLink({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: string;
}) {
  const icons: Record<string, JSX.Element> = {
    home: (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m-4 0h4"
        />
      </svg>
    ),
    cube: (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 7.5V17a2 2 0 01-2 2H6a2 2 0 01-2-2V7.5M12 3l8 4.5M12 3L4 7.5m8-4.5v13.5"
        />
      </svg>
    ),
    "shopping-cart": (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
        />
      </svg>
    ),
    upload: (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12V8a2 2 0 012-2h12a2 2 0 012 2v4M12 16V4m0 0l-4 4m4-4l4 4"
        />
      </svg>
    ),
    tag: (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 7a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 01-1-1V7z"
        />
      </svg>
    ),
    "file-text": (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 16h8M8 12h8m-8-4h8M4 6h16M4 6v12a2 2 0 002 2h8a2 2 0 002-2V6"
        />
      </svg>
    ),
    printer: (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 9V2h12v7M6 18v4h12v-4M6 14h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2z"
        />
      </svg>
    ),
  };
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 font-medium"
    >
      {icons[icon as keyof typeof icons]}
      {label}
    </Link>
  );
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [customer, setCustomer] = useState<any>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderItems, setOrderItems] = useState([
    { description: "", quantity: 1 },
  ]);
  const [orderLoading, setOrderLoading] = useState(false);
  const [orderSuccessMsg, setOrderSuccessMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    const customerStr = localStorage.getItem("currentCustomer");
    if (!customerStr) {
      router.push("/auth/login");
      return;
    }
    setCustomer(JSON.parse(customerStr));
  }, [router]);

  useEffect(() => {
    if (customer?.id) {
      fetchOrders(customer.id);
    }
  }, [customer]);

  const fetchOrders = async (customerId: string) => {
    const { data, error } = await supabase
      .from("simple_orders")
      .select("*")
      .eq("customer_id", customerId)
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to fetch orders");
      return;
    }
    setOrders(data || []);
  };

  const handleAddOrderItem = () => {
    setOrderItems([...orderItems, { description: "", quantity: 1 }]);
  };
  const handleRemoveOrderItem = (idx: number) => {
    setOrderItems(orderItems.filter((_, i) => i !== idx));
  };
  const handleOrderItemChange = (idx: number, field: string, value: any) => {
    setOrderItems(
      orderItems.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      )
    );
  };
  const handleCreateOrder = async () => {
    if (!customer?.id) return;
    setOrderLoading(true);
    try {
      const itemsToInsert = orderItems
        .filter(
          (item) =>
            item.description && item.description.trim() !== "" && item.quantity
        )
        .map((item) => ({
          customer_id: customer.id,
          description: item.description,
          quantity: Number(item.quantity) || 1,
        }));
      if (itemsToInsert.length === 0) throw new Error("No valid order items");
      const { error } = await supabase
        .from("simple_orders")
        .insert(itemsToInsert);
      if (error) throw error;
      setShowOrderModal(false);
      setOrderItems([{ description: "", quantity: 1 }]);
      setOrderSuccessMsg("Order created successfully!");
      setTimeout(() => setOrderSuccessMsg(""), 60000);
      // Refresh orders
      fetchOrders(customer.id);
    } catch (err) {
      console.error("Error creating order:", err);
      setOrderSuccessMsg("Failed to create order");
      setTimeout(() => setOrderSuccessMsg(""), 60000);
    } finally {
      setOrderLoading(false);
    }
  };

  if (!customer) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <CustomerSidebar />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Orders</h1>
            <Dialog open={showOrderModal} onOpenChange={setShowOrderModal}>
              <DialogTrigger asChild>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                  onClick={() => setShowOrderModal(true)}
                >
                  Create Order
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg w-full p-0">
                <div className="flex flex-col h-full max-h-[90vh]">
                  <DialogHeader className="p-4 pb-0">
                    <DialogTitle>Create Your Order</DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="text-sm text-gray-500 mb-4">
                      Add items to your order and specify quantities
                    </div>
                    {orderItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="border rounded-lg p-4 mb-4 relative"
                      >
                        <div className="font-semibold mb-2">Item {idx + 1}</div>
                        <button
                          type="button"
                          className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                          onClick={() => handleRemoveOrderItem(idx)}
                        >
                          &times;
                        </button>
                        <div className="flex gap-2 mb-2">
                          <div className="flex-1">
                            <label className="block text-xs mb-1">
                              Description
                            </label>
                            <Input
                              value={item.description}
                              onChange={(e) =>
                                handleOrderItemChange(
                                  idx,
                                  "description",
                                  e.target.value
                                )
                              }
                              placeholder="Enter description"
                            />
                          </div>
                          <div className="w-24">
                            <label className="block text-xs mb-1">
                              Quantity
                            </label>
                            <Input
                              type="number"
                              min={1}
                              value={item.quantity}
                              onChange={(e) =>
                                handleOrderItemChange(
                                  idx,
                                  "quantity",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      className="w-full mb-4"
                      onClick={handleAddOrderItem}
                    >
                      + Add Another Item
                    </Button>
                  </div>
                  <div className="flex gap-2 justify-end p-4 border-t bg-white sticky bottom-0 z-10">
                    <Button
                      variant="outline"
                      onClick={() => setShowOrderModal(false)}
                      className="w-full sm:w-auto"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleCreateOrder}
                      disabled={orderLoading || orderItems.length === 0}
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                    >
                      {orderLoading ? "Creating..." : "Create Order"}
                    </Button>
                  </div>
                  {orderSuccessMsg && (
                    <div className="text-green-600 text-sm mt-2 text-center">
                      {orderSuccessMsg}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="overflow-x-auto w-full">
              <table className="min-w-full text-xs">
                <thead>
                  <tr>
                    <th className="px-2 py-1 border-b bg-gray-50 text-left">
                      Order ID
                    </th>
                    <th className="px-2 py-1 border-b bg-gray-50 text-left">
                      Description
                    </th>
                    <th className="px-2 py-1 border-b bg-gray-50 text-left">
                      Quantity
                    </th>
                    <th className="px-2 py-1 border-b bg-gray-50 text-left">
                      Date
                    </th>
                    <th className="px-2 py-1 border-b bg-gray-50 text-left">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length === 0 ? (
                    <tr>
                      <td
                        colSpan={3}
                        className="text-center py-8 text-gray-400"
                      >
                        No orders found.
                      </td>
                    </tr>
                  ) : (
                    orders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-2 py-1 border-b">{order.id}</td>
                        <td className="px-2 py-1 border-b">
                          {order.description}
                        </td>
                        <td className="px-2 py-1 border-b">{order.quantity}</td>
                        <td className="px-2 py-1 border-b">
                          {new Date(order.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-2 py-1 border-b">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
