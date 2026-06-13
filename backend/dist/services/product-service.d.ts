export declare function getAllProducts(): Promise<({
    category: {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: number;
    name: string;
    description: string | null;
    price: import("@prisma/client/runtime/library").Decimal;
    stock: number;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;
})[]>;
//# sourceMappingURL=product-service.d.ts.map