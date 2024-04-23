export interface products {
    id: number;
    productName: string;
    productDescription?: string;
    productPrice: number;
    status: string; // Assuming `OrderStatus` is a string enum
    paymentMethod: string; // Assuming `PaymentMethod` is a string enum
    //category: ProductCategory;
    imageUrl?: string;
  }
  

  