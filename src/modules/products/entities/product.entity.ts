// src/products/entities/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { Category } from '../../categories/entities/category.entity';  // Adjust path as needed

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal')
    price: number;

    @Column()
    stock: number;

    //   @ManyToOne(() => Category, category => category.products)
    //   category: Category;
}
