import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import Address from './address.entity';
import { Post } from 'src/posts/entities/post.entity';
 
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column({ unique: true })
  public email: string;
 
  @Column()
  public name: string;
 
  @Column()
  @Exclude()
  public password: string;
 
  // Cascade로 유저 정보 저장시 Address도 같이 저장
  @OneToOne(() => Address, {
    eager: true,
    cascade: true
  })
  @JoinColumn()
  public address: Address;

  @OneToMany(() => Post, (post: Post) => post.author)
  public posts: Post[];
}
 
export default User;