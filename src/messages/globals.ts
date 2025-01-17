import { Section } from "../types.js";
import type { AtLeastOne } from "../utils";

/**
 * TS knowledge intensifies
 * @internal
 */
export function isProductSections(obj: unknown[]): obj is ProductSection[] {
    return obj[0] instanceof ProductSection;
}

/**
 * Section API object
 *
 * @group Globals
 */
export class ProductSection extends Section<Product, 30> {
    /**
     * The products of the section
     */
    readonly product_items: Product[];

    /**
     * Builds a product section component
     *
     * @param title - The title of the product section
     * @param products - The products to add to the product section
     * @throws If title is over 24 characters if provided
     * @throws If more than 30 products are provided
     */
    constructor(title: string | undefined, ...products: AtLeastOne<Product>) {
        super("ProductSection", "products", products, 30, title);
        this.product_items = products;
    }
}

/**
 * Product API object
 *
 * @group Globals
 */
export class Product {
    /**
     * The id of the product
     */
    readonly product_retailer_id: string;

    /**
     * Builds a product component
     *
     * @param product_retailer_id - The id of the product
     */
    constructor(product_retailer_id: string) {
        this.product_retailer_id = product_retailer_id;
    }
}
