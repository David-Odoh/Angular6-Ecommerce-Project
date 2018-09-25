export class Product {
        vendorId: string;
        productName: string;
        productImage: string;
        productBackImage: string;
        productLeftImage: string;
        productRightImage: string;
        productBriefDesc: string;
        productDetailDesc: string;
        productSpec: string;
        brand: string;
        location: string;
        category: {
                categoryName: string,
                categoryImage1: string,
                categoryImage2: string
                subcat: {
                        subcatName: string,
                        subcatImage1: string,   
                        subcatImage2: string    
                        }
        };
        rating: number = 0;
        type: string;
        quantity: number = 1;
        newPrice: number;
        oldPrice: number

}
