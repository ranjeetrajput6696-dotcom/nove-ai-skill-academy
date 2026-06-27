import { useState, FormEvent } from 'react';
import { X, Trash2, ShoppingCart, Tag, Sparkles, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  removeFromCart,
  clearCart,
  onCheckout,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  const rawSubtotal = cart.reduce((acc, item) => acc + item.course.price * item.quantity, 0);
  const discountAmount = discountApplied ? rawSubtotal * 0.2 : 0; // 20% off with NOVA20
  const finalTotal = rawSubtotal - discountAmount;

  const handleApplyPromo = (e: FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'NOVA20') {
      setDiscountApplied(true);
    } else {
      setPromoError('Invalid coupon code. Try using "NOVA20"!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="cart-drawer-backdrop">
      <div className="absolute inset-0 overflow-hidden">
        {/* Underlay Backdrop Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={onClose}
          id="cart-underlay"
        ></div>

        {/* Drawer Panel Container */}
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10" id="cart-drawer-wrapper">
          <div
            id="cart-drawer-panel"
            className="w-screen max-w-md bg-[#fcf9f8] border-l border-[#c3c6d5] shadow-2xl flex flex-col animate-slide-left h-full"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-[#c3c6d5] flex items-center justify-between" id="cart-drawer-header">
              <h2 className="font-display font-bold text-lg text-[#1b1b1c] flex items-center gap-2 select-none">
                <ShoppingCart size={20} className="text-[#1E3A8A]" />
                Your Shopping Cart
              </h2>
              <button
                id="cart-close-btn"
                onClick={onClose}
                className="p-1 rounded-lg text-[#434653] hover:bg-[#f0eded] transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* List Content */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6" id="cart-drawer-items-list">
              {cart.length === 0 ? (
                <div className="text-center py-20 flex flex-col items-center" id="empty-cart-state">
                  <div className="w-16 h-16 bg-[#EFF6FF] rounded-full flex items-center justify-center text-[#1E3A8A] mb-4 select-none">
                    <ShoppingCart size={28} />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#1b1b1c] mb-1">Your cart is empty</h3>
                  <p className="font-sans text-xs text-[#434653] max-w-xs leading-relaxed">
                    Explore our learning pathways to find industry-led courses and start building digital excellence!
                  </p>
                  <button
                    id="cart-empty-cta-btn"
                    onClick={onClose}
                    className="mt-6 font-sans font-bold text-xs bg-[#1E3A8A] text-white px-5 py-2.5 rounded-full hover:bg-[#1D4ED8] transition-all cursor-pointer"
                  >
                    Browse Course Pathways
                  </button>
                </div>
              ) : (
                <div className="space-y-4" id="cart-active-items">
                  {cart.map((item) => (
                    <div
                      id={`cart-item-card-${item.course.id}`}
                      key={item.course.id}
                      className="flex gap-4 p-3 bg-white rounded-xl border border-[#c3c6d5]/70 premium-card-shadow relative group hover:border-[#1E3A8A] transition-colors"
                    >
                      <img
                        id={`cart-item-img-${item.course.id}`}
                        src={item.course.image}
                        alt={item.course.title}
                        className="w-20 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-grow space-y-1 pr-6" id={`cart-item-details-${item.course.id}`}>
                        <span id={`cart-item-cat-${item.course.id}`} className="text-[10px] font-bold text-[#1E3A8A] bg-[#EFF6FF] px-2 py-0.5 rounded uppercase">
                          {item.course.category}
                        </span>
                        <h4 id={`cart-item-title-${item.course.id}`} className="font-display font-bold text-sm text-[#1b1b1c] line-clamp-1">
                          {item.course.title}
                        </h4>
                        <div className="flex justify-between items-baseline" id={`cart-item-price-row-${item.course.id}`}>
                          <span className="font-display font-extrabold text-sm text-[#1E3A8A]">
                            ${item.course.price}
                          </span>
                        </div>
                      </div>

                      {/* Trash Button */}
                      <button
                        id={`cart-item-remove-btn-${item.course.id}`}
                        onClick={() => removeFromCart(item.course.id)}
                        className="absolute right-3 bottom-3 p-1.5 rounded-lg text-red-500 hover:bg-[#ffdad6] transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sticky Order Checkout Summary */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-[#c3c6d5] space-y-5" id="cart-checkout-summary">
                
                {/* Promo Code Input Form */}
                <form onSubmit={handleApplyPromo} className="flex gap-2" id="cart-promo-form">
                  <div className="relative flex-grow" id="promo-input-wrapper">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-[#434653]/60">
                      <Tag size={14} />
                    </span>
                    <input
                      id="cart-promo-field"
                      type="text"
                      placeholder="Coupon Code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#fcf9f8] border border-[#c3c6d5] rounded-lg text-xs font-semibold uppercase placeholder-[#434653]/50 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    />
                  </div>
                  <button
                    id="cart-promo-apply-btn"
                    type="submit"
                    className="px-4 py-2 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white rounded-lg font-sans font-semibold text-xs cursor-pointer transition-colors"
                  >
                    Apply
                  </button>
                </form>

                {promoError && <p className="text-[10px] font-semibold text-red-600 mt-1" id="promo-error-msg">{promoError}</p>}
                {discountApplied && (
                  <div className="bg-[#EFF6FF] border border-[#1E3A8A]/40 p-2.5 rounded-lg flex items-center justify-between text-[#1E3A8A]" id="promo-success-alert">
                    <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <Sparkles size={12} className="text-[#1E3A8A]" />
                      NOVA20 Coupon Applied
                    </span>
                    <span className="text-xs font-bold">-20%</span>
                  </div>
                )}

                {/* Subtotal, Discount & Total math lines */}
                <div className="space-y-2 border-t border-[#f0eded] pt-3 text-xs text-[#434653]" id="cart-pricing-details">
                  <div className="flex justify-between" id="subtotal-row">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#1b1b1c]">${rawSubtotal.toFixed(2)}</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-[#1E3A8A]" id="discount-row">
                      <span>Promo Discount</span>
                      <span className="font-bold">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm text-[#1b1b1c] font-bold border-t border-[#f0eded] pt-2" id="total-row">
                    <span className="text-sm">Total Investment</span>
                    <span className="font-display font-extrabold text-[#1E3A8A]">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Trigger button */}
                <div className="space-y-3" id="checkout-actions">
                  <button
                    id="cart-checkout-submit-btn"
                    onClick={onCheckout}
                    className="w-full py-4 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white rounded-xl font-sans font-bold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    Proceed to Enrollment
                  </button>
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#434653]/60 font-medium" id="cart-secure-checkout-label">
                    <ShieldCheck size={13} className="text-[#1E3A8A]" />
                    Secure Checkout • Fully Encrypted • Refund Protected
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
