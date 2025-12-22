import { useSelector, useDispatch } from "react-redux";
import { Trash2, Plus, Minus, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  updateItemCount,
  toggleCheckbox,
} from "../store/actions/shoppingCartActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartPage() {
  const cart = useSelector((store) => store.shoppingCart.cart);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((total, item) => {
    if (item.checked) {
      return total + item.product.price * item.count;
    }
    return total;
  }, 0);

  // --- kargo hesaplama ---
  const FREE_SHIPPING_THRESHOLD = 150;
  const shippingCost =
    totalAmount >= FREE_SHIPPING_THRESHOLD || totalAmount === 0 ? 0 : 29.99;
  const grandTotal = totalAmount + shippingCost;

  // ücretsiz kargo
  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - totalAmount;

  const handleIncrement = (productId, currentCount) => {
    dispatch(updateItemCount(productId, currentCount + 1));
  };

  const handleDecrement = (productId, currentCount) => {
    if (currentCount > 1) {
      dispatch(updateItemCount(productId, currentCount - 1));
    } else {
      dispatch(removeFromCart(productId));
      toast.warn("Ürün sepetten kaldırıldı.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
    toast.error("Ürün sepetten silindi.", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Sepetiniz Boş</h2>
        <Link
          to="/shop"
          className="bg-[#23A6F0] text-white px-6 py-3 rounded font-bold"
        >
          Alışverişe Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-10">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-[#252B42]">
          Sepetim ({cart.length} Ürün)
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* product list*/}
          <div className="flex-1 flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className={`bg-white p-4 rounded shadow-sm border flex flex-col sm:flex-row gap-4 items-center relative transition-opacity ${
                  !item.checked ? "opacity-50" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => dispatch(toggleCheckbox(item.product.id))}
                  className="w-5 h-5 accent-[#23A6F0] cursor-pointer"
                />

                <img
                  src={item.product.images?.[0]?.url}
                  alt={item.product.name}
                  className="w-24 h-32 object-cover rounded"
                />

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-[#252B42]">
                    {item.product.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.product.description}
                  </p>
                </div>

                <div className="flex items-center border rounded">
                  <button
                    onClick={() => handleDecrement(item.product.id, item.count)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 font-bold">{item.count}</span>
                  <button
                    onClick={() => handleIncrement(item.product.id, item.count)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="font-bold text-[#23A6F0] text-xl w-24 text-center">
                  ${(item.product.price * item.count).toFixed(2)}
                </div>

                <button
                  onClick={() => handleRemove(item.product.id)}
                  className="text-gray-400 hover:text-red-500 p-2"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* --- order summary */}
          <div className="w-full lg:w-80 h-fit bg-white p-6 rounded shadow-sm border">
            <h3 className="text-lg font-bold mb-4 text-[#252B42]">
              Sipariş Özeti
            </h3>

            {totalAmount > 0 && totalAmount < FREE_SHIPPING_THRESHOLD && (
              <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded text-sm text-[#F27A1A]">
                Ücretsiz kargo için{" "}
                <span className="font-bold">
                  ${remainingForFreeShipping.toFixed(2)}
                </span>{" "}
                daha ürün ekleyin!
                <div className="w-full bg-orange-200 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#F27A1A] h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        (totalAmount / FREE_SHIPPING_THRESHOLD) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            )}

            {totalAmount >= FREE_SHIPPING_THRESHOLD && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-sm text-green-700 font-bold text-center">
                Kargo ücretsiz! 🚀
              </div>
            )}

            <div className="flex flex-col gap-3 text-sm text-[#737373]">
              <div className="flex justify-between">
                <span>Ürünler Toplamı</span>
                <span className="font-bold text-[#252B42]">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Kargo Toplam</span>
                <span className="font-bold text-[#252B42]">
                  {shippingCost === 0 ? (
                    <span className="text-[#23A6F0]">Ücretsiz</span>
                  ) : (
                    `$${shippingCost}`
                  )}
                </span>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="flex justify-between items-center mb-6">
              <span className="text-[#252B42] font-bold text-lg">Toplam</span>
              <span className="text-[#23A6F0] font-bold text-xl">
                ${grandTotal.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-[#23A6F0] hover:bg-blue-600 text-white font-bold py-3 rounded flex justify-center items-center gap-2 transition-colors">
              Siparişi Tamamla <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
