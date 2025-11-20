import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Ak 47 inheritance",
      price: 79.99,
      description: "Factory New",
      image:
        "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNQ0OKheqdoLPGaAFidxOp_pewnSn6wl0p-4D7Ryo34cSqeOwMlWZt5QbJfuhW9koKyMO3ksgWMiY8TzDK-0H009BnnIw/360fx360f",
    },
    {
      id: 2,
      name: "M4A1-S Nightmare",
      price: 39.21,
      description: "Minimal Wear",
      image:
        "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj-9gSCGnmBw1tgKIn4vwNCaJaAJ1WZNwE-Rft0G8kIKyNui24lPcjoNFn3n3iCtMuHo447tWVfcjqbqX0V8N9uh_hA/330x192?allow_animated=1",
    },
    {
      id: 3,
      name: "Butterfly Knife",
      price: 1250,
      description: "Factory New",
      image:
        "https://cdn.skinbaron.de/steamdata/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPr1Ibndk1RX6cF0teXI8oThxlG1rRA5Z2rzdtfHeldqZ13U-QO-w-jth8C4upzOnyFguSUq4XndyUepwUYb00RQWkk?optimizer=image",
    },
    {
      id: 4,
      name: "Gloves Baron",
      price: 59.99,
      description: "Field Tested",
      image:
        "https://cdn.skinbaron.de/steamdata/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eO0mJWOqOf9PbDum25V4dB8xLuUodml21Hg8hZtZ2ChI4PBIwY4M17VqVS9x-ft1pG_7Z_PwCRruSA8pSGKVMmunN8?optimizer=image",
    },
    {
      id: 5,
      name: "AWP Printstream",
      price: 50.65,
      description: "Battle-Scared",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_DVL0OK8Yap5M-SBC2ad_uJ_t-l9AX_qlk4k5GyAzo6ocC-QZgZxX8AjEbZY5xnrxtPjM7vnsgGIj9oTmXngznQeg3pfcPs/512fx384f",
    },
    {
      id: 6,
      name: "Butterfly Knife",
      price: 5000,
      description: "Minimal Wear",
      image: "https://skins-cdn.hltv.org/skin/m3MI5n6hCpVKNhKvWjM_hY.png",
    },
  ],
  cart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product && !state.cart.find((item) => item.id === product.id)) {
        state.cart.push(product);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectCart = (state) => state.product.cart;
export const selectCartCount = (state) => state.product.cart.length;

export default productSlice.reducer;
