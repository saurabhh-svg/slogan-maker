import uuid from "react-uuid";

const ProductData = [
  {
    id: uuid(),
    name: "Privacy Policy Generator",
    product_img: require("../images/privacy-policy.png"),
    description:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    id: uuid(),
    name: "Terms & Conditions Generator",
    product_img: require("../images/terms.png"),
    description:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    id: uuid(),
    name: "Domain Name Generator",
    product_img: require("../images/domain-name.png"),
    description:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    id: uuid(),
    name: "Invoice Generator",
    product_img: require("../images/invoice-generator.png"),
    description:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
];

export { ProductData };
