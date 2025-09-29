import { useState } from "react";

function CartApp() {
  const products = [
    { id: 1, name: "Sản phẩm A", price: 100 },
    { id: 2, name: "Sản phẩm B", price: 200 },
    { id: 3, name: "Sản phẩm C", price: 300 },
  ]
  
    function ProductItem({ product, addToCart }) {
    return (
        <div style={{ border: "1px solid gray", padding: 10, margin: 10 }}>
        <h3>{product.name}</h3>
        <p>Giá: {product.price}đ</p>
        <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
        </div>
    );
    }


  const [cart, setCart] = useState([])

  const addToCart = (product) => {setCart([...cart, product])}

  const Price = cart.reduce((sum, it) => sum + it.price, 0)

  return (
    <div style={{padding: 20}}>
      <div>
        <b>Bài 4: Giỏ hàng</b>Tạo danh sách sản phẩm (mảng object: id, name, price). Hiển thị danh sách bằng component ProductItem (dùng props). Mỗi sản phẩm có nút Thêm vào giỏ. Hiển thị tổng số sản phẩm, tổng tiền trong giỏ hàng.
      </div>
      <h3>
        Giỏ hàng: {cart.length} sản phẩm, tổng tiền: {Price}
      </h3>
      <div>
        {products.map((p) => (
          <ProductItem key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default CartApp;
