import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductCategoryControllerService } from '../../services/maryem-services/services/product-category-controller.service';
import { ProductCategory } from 'src/app/services/maryem-services/models/product-category';
import { MarketplaceProductControllerService } from 'src/app/services/maryem-services/services/marketplace-product-controller.service';
import { MarketplaceProduct } from 'src/app/services/maryem-services/models/marketplace-product';
import { CreateProduct$Params } from 'src/app/services/maryem-services/fn/marketplace-product-controller/create-product';

@Component({
  selector: 'app-add-products-back',
  templateUrl: './add-products-back.component.html',
  styleUrls: ['./add-products-back.component.css']
})
export class AddProductsBackComponent implements OnInit {
  productForm: FormGroup;
  categories: ProductCategory[] = [];

  constructor(
    private fb: FormBuilder,
    private productService: MarketplaceProductControllerService,
    private categoryService: ProductCategoryControllerService
  ) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', Validators.required],
      category: [null, Validators.required], // Initialize with null
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (categories) => {
        this.categories = categories;
        console.log('Loaded categories:', this.categories); // Log the loaded categories
        // Assuming you have a default category, you can set it here
        this.productForm.patchValue({
          category: this.categories[0] // Set the first category as default
        });
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  onSubmit() {
    console.log('Submitting product form...');
    if (this.productForm.invalid) {
      console.log('Invalid product form. Aborting submission.');
      return;
    }

    const productData: MarketplaceProduct = this.productForm.value;
    console.log('Product data:', productData); // Log the product data being sent

    // Log the type and value of the category property
    console.log('Type of productData.category:', typeof productData.category);
    console.log('Value of productData.category:', productData.category);

    // Check if the category object and its ID are present
    if (!productData.category || !productData.category.id) {
      console.error('No category selected or category ID missing.');
      return;
    }

    // Extract category ID
    const categoryId: string = productData.category.id.toString();
    console.log('Category ID:', categoryId); // Log the extracted category ID

    const params: CreateProduct$Params = {
      productName: productData.productName ?? '',
      productDescription: productData.productDescription ?? '',
      productPrice: productData.productPrice ?? 0,
      category: { id: categoryId }, // Assign categoryId to the id property of category object
      body: {
        // Since image is not included in productData, set it to undefined
        imageFile: undefined
      }
    };

    console.log('Params:', params); // Log the params being sent

    this.productService.createProduct(params).subscribe(
      response => {
        console.log('Product added successfully:', response);
        // Reset the form after successful submission
        this.productForm.reset();
      },
      error => {
        console.log('Error adding product:', error);
      }
    );
  }
}
