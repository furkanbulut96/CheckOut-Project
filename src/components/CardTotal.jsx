const taxRate = 0.18;
const shipping = 25;
const CardTotal = ({tutorials}) => {
  const subTotal = tutorials.reduce(
    (acc, tutorials) =>
    tutorials.price * tutorials.dampingRate * tutorials.amount + acc,
    0
  );
  

  return (
    <div className="container w-50 mt-5">
      <p className="border-bottom p-2 d-flex justify-content-between">
        <span style={{ fontWeight: "700" }}>Subtotal</span>
        <span>{subTotal.toFixed(2)}</span>
      </p>
      <p className="border-bottom p-2 d-flex justify-content-between">
        <span style={{ fontWeight: "700" }}>Tax(18%)</span>
        <span>{(subTotal * taxRate).toFixed(2)}</span>
      </p>
      <p className="border-bottom p-2 d-flex justify-content-between">
        <span style={{ fontWeight: "700" }}>Shipping</span>
        <span>{shipping.toFixed(2)}</span>
      </p>
      <p className="border-bottom p-2 d-flex justify-content-between">
        <span style={{ fontWeight: "700" }}>Total</span>
        <span>{(subTotal + subTotal * taxRate + shipping).toFixed(2)}</span>
      </p>
    </div>
  );
};

export default CardTotal;
