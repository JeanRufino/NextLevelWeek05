import { Entity, Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("settings")
class Setting {

    @PrimaryColumn({name: "id"})
    id: string;
    
    @Column()
    username: string;
    
    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Setting }